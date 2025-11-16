import { render, screen } from "@testing-library/react";
import Home from "@pages/Home";

describe("Home page", () => {
  it("renders the welcome heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /welcome to your react template/i }),
    ).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Home />);
    expect(
      screen.getByText(/a modern, production-ready template with typescript/i),
    ).toBeInTheDocument();
  });

  it("renders the counter component", () => {
    render(<Home />);
    expect(screen.getByText(/counter example/i)).toBeInTheDocument();
  });

  it("renders feature cards", () => {
    render(<Home />);
    expect(screen.getByText(/⚡ lightning fast/i)).toBeInTheDocument();
    expect(screen.getByText(/🔷 typescript/i)).toBeInTheDocument();
    expect(screen.getByText(/🎨 tailwindcss v4/i)).toBeInTheDocument();
    expect(screen.getByText(/🧪 testing ready/i)).toBeInTheDocument();
  });
});
