import { render, screen, act, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import RootLayout from "@/app/layout";
import Page from "@/app/page";

describe("Index page", () => {
  it("render", () => {
    render(
      <RootLayout>
        <Page />
      </RootLayout>
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("displays Bulbasaur pokemon when selecting grass type", async () => {
    render(<Page />);

    user.click(screen.getByRole("combobox"));

    await waitFor(async () => {
      user.click(screen.getByRole("option", { name: /grama/i }));
    });

    await waitFor(async () => {
      expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    });
  });
});
