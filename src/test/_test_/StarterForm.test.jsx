import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StarterForm from "@/components/StarterForm";

test("adds a new starter to the recent additions", async () => {
	const user = userEvent.setup();
	render(<StarterForm />);

	await user.type(screen.getByLabelText(/player name/i), "Michael Wilcox");
	await user.type(screen.getByLabelText(/jersey/i), "36");
	await user.selectOptions(screen.getByLabelText(/position/i), "FW");

	await user.click(screen.getByRole("button", { name: /add to starting xi/i}));

	const items = await screen.findAllByRole("listitem");
	const last = items[items.length -1];

	expect(within(last).getByText(/Michael Wilcox/)).toBeInTheDocument();
	expect(within(last).getByText(/#36/)).toBeInTheDocument();
	expect(within(last).getByText(/FW/)).toBeInTheDocument();
})

