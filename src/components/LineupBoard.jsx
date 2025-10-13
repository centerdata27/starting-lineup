import { useEffect, useState } from "react";
import { getLinup } from "@/api/client";

export default function LineupBoard() {
	const [starters, setStarters] = useState([]);
	const [status, setStatus] = useState([]);

    useEffect(() => {
        let mounted = true;
        (async () => {
            setStatus('loading');
            try {
                const data = await getLinup();
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
            
        </section>
    )
}
