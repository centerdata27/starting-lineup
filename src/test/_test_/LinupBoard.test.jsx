import { render, screen } from '@testing-library/react';
import LineupBoard from '../../components/LineupBoard';

test('loads and displays starting lineup', async() => {
    render (<LineupBoard />);

    expect(screen.getByText(/Loading starting lineup/i)).toBeInTheDocument();

    //The list appears after async fetch
    expect(await screen.findByRole('list', {name: /starting lineup list/i })).toBeInTheDoc

    //Specific Players to be present
    expect(await screen.findByText(/Jordan Riley/)).toBeInTheDocument();
    expect(await screen.findByText(/Casey Brooks/)).toBeInTheDocument();

    //Badge shows total starters
    const badge = screen.getByLabelText(/starters:/i);
    expect(badge).toHaveTextContent('4');
});