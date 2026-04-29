import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
console.log('LIST ID VALUE:', process.env.BREVO_LIST_ID, 'TYPE:', typeof process.env.BREVO_LIST_ID, 'PARSED:', parseInt(process.env.BREVO_LIST_ID!, 10));
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email invalide.' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(process.env.BREVO_LIST_ID!, 10)],
        updateEnabled: true, // si le contact existe déjà, on l'ajoute juste à la liste
      }),
    });

    // 201 = créé, 204 = déjà existant mis à jour — les deux sont OK
    if (response.status === 201 || response.status === 204) {
      return res.status(200).json({ success: true });
    }

    const data = await response.json();
    console.error('Brevo error:', data);
    return res.status(500).json({ error: "Erreur lors de l'inscription." });

  } catch (error) {
    console.error('Newsletter error:', error);
    return res.status(500).json({ error: "Erreur lors de l'inscription." });
  }
}