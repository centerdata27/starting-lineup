const BASE = '/api';

export async function getLineup() {
    const res = await fetch(`${BASE}/lineup`);
    if (!res.ok) throw new Error('Failed to load lineup');
    return res.json()
}

export async function addStarter(payload) {
    const res = await fetch(`${BASE}/starters`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Failed to add starter');
    return res.json();
}