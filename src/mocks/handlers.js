import { http, HttpResponse } from 'msw';

let lineup = [
    { id: 's1', name: 'Jordan Riley', number: 10, position: 'FW' },
    { id: 's2', name: 'Casey Brooks', number: 8, position: 'MF' },
    { id: 's3', name: 'Taylor Kim', number: 1, position: 'DF' },
    { id: 's4', name: 'Sam Lee', number: 4, position: 'GK '}
];

export const handlers = [
    http.get('/api/lineup', () => HttpResponse.json(lineup)),
    http.post('/api/starters', async ({ request }) => {
        const body = await request.json();
        lineup = [...lineup, body];
        return HttpResponse.json(body, {status: 201});
    })
]