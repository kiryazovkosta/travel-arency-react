import Home from "./Home";
import { render, screen } from '@testing-library/react';

test('Heading component must have kkiryazov\'s project', () => {
    render(<Home />);

    const headingElement = screen.getByText("kkiryazov's project");
    expect(headingElement).toBeInTheDocument();
})