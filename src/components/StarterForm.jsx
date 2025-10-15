import { useState } from "react";
import { addStarter } from '@/api/client';
import { nanoid } from "nanoid";

const positions = ['GK','DF','MF','FW'];

export default function StarterForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [position, setPosition] = useState('MF');
    const [team, setTeam] = useState('Starting XI FC');
    const [adding, setAdding] = useState(false);
    const [added, setAdded] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        setAdding(true);
        try {
            const payload = { id: nanoid(), name, number: Number(number), position, team };
            const saved = await addStarter(payload);
            setAdded(prev => [...prev, saved]);
            setName(''); setNumber('');
        } finally {
            setAdding(false);
        }
    }

    return (
        <section aria-labelledby="add-heading" className="card" role="region">
            <h2 id="add-heading" className="h1" style={{ gap:8 }}>
                <span aria-hidden="true">+</span>Add Starter
            </h2>
            <form onSubmit={handleSubmit} aria-label="add starter form">
                <label>
                    Player Name 
                    <input 
                        placeholder="e.g., FirstName LastName"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                    <label>
                        Jersey # 
                        <input 
                            inputMode="numeric"
                            placeholder="13"
                            value={number}
                            onChange={e => setNumber(e.target.value)}
                        />
                </label>
                <label>
                    Position 
                    <select value={position} onChange={e => setPosition(e.target.value)}>
                        {positions.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                </label>
                <label>
                    Team 
                    <input value={team} onChange={e => setTeam(e.target.value)}/>
                </label>

                <button type="submit" disabled={adding || !name || !number}>
                    {adding ? 'Signing...' : 'Add to Starting XI'}
                </button>
                <p className="helper">POSTs to <code>/api/starters</code> (mocked in tests).</p>
            </form>

            <hr className="hr" />

            <div aria-live="polite" aria-atomic="true">
                {!!added.length && <p><strong>Recent Additions:</strong></p>}
                <ul className="list">
                    {added.map(p => (
                        <li key={p.id}>
                            <span className="pos">{p.position}</span>
                            <strong>{p.name}</strong>
                            <span className="helper">#{p.number}</span>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
}