import type { VercelRequest, VercelResponse } from '@vercel/node';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const SYSTEM_PROMPT = `Vous êtes l'assistant virtuel de Gotam Events, une entreprise spécialisée dans la location de véhicules de luxe avec chauffeur en France. 

Règles importantes:
- Répondez UNIQUEMENT en français
- Soyez professionnel, courtois et reflétez l'excellence de notre marque de luxe
- Aidez les clients avec des questions sur notre flotte de véhicules, nos services, les tarifs, et les réservations
- Si vous ne connaissez pas une information spécifique (comme les prix exacts), invitez poliment le client à nous contacter directement
- Mettez en avant le caractère premium et exclusif de nos services

Notre entreprise propose:
- Location de véhicules de luxe avec chauffeur professionnel
- Service disponible pour événements, mariages, transferts aéroport, voyages d'affaires
- Flotte incluant des marques prestigieuses (Mercedes, BMW, Audi, Rolls-Royce, etc.)
- Service personnalisé et discret
- Disponibilité 24h/24, 7j/7

Commencez toujours par accueillir chaleureusement le client s'il n'a pas encore été salué.`;

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

interface ChatRequest {
    messages: Message[];
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!OPENAI_API_KEY) {
        console.error('OPENAI_API_KEY is not configured');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        const { messages } = req.body as ChatRequest;

        if (!messages || !Array.isArray(messages)) {
            return res.status(400).json({ error: 'Invalid request: messages array required' });
        }

        // Prepare messages with system prompt
        const apiMessages: Message[] = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages
        ];

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-4-turbo-preview',
                messages: apiMessages,
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('OpenAI API error:', errorData);
            return res.status(response.status).json({
                error: 'Erreur lors de la communication avec l\'assistant'
            });
        }

        const data = await response.json();
        const assistantMessage = data.choices[0]?.message?.content;

        if (!assistantMessage) {
            return res.status(500).json({ error: 'No response from assistant' });
        }

        return res.status(200).json({
            message: assistantMessage
        });

    } catch (error) {
        console.error('Chat API error:', error);
        return res.status(500).json({
            error: 'Une erreur est survenue. Veuillez réessayer.'
        });
    }
}
