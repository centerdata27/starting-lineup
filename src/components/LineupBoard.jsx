import { useEffect, useState } from "react";
import { getLineup } from "@/api/client";

export default function LineupBoard() {
	const [starters, setStarters] = useState([]);
	const [status, setStatus] = useState('idle');

    useEffect(() => {
        let mounted = true;
        (async () => {
            setStatus('loading');
            try {
                const data = await getLineup();
                if (mounted) { setStarters(data); setStatus('idle');}
            } catch {
                if (mounted) setStatus('error')
            }
        })();
        return () => { mounted = false};
    }, []);

    return (
        <section aria-labelledby="lineup-heading" className = "card" role="region">
            <div className="h1">
                <span className="kit" aria-hidden="true" />
                <h2 id="lineup-heading" style={{ margin:0 }}>Starting Lineup</h2>
                <span className="badge" aria-label={`Starters: ${starters.length}`}>{starters.length}</span>
            </div>

            {status === 'loading' && <p>Loading lineup...</p>}
            {status === 'error' && <p className="helper" style={{ color: 'red' }}>Failed to load lineup</p>}
            {status === 'idle' && (
                <ul className="list">
                    {starters.map(starter => (
                        <li key={starter.id}>
                            <span className="pos">{starter.position}</span>
                            <strong>{starter.name}</strong>
                            <span className="helper">#{starter.number}</span>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}
