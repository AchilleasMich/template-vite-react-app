import { render, screen } from "@testing-library/react";
import Home from "@pages/Home";

describe("Home page", () => {
  it("renders the welcome heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /welcome to the home page/i })).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Home />);
    expect(
      screen.getByText(/this is a simple home page using react and tailwind css/i),
    ).toBeInTheDocument();
  });
});
