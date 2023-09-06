import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { server } from "../lib/mocks/server";
import { vi } from "vitest";

vi.mock("next/font/google", () => {
  return {
    Inter: vi.fn().mockReturnValue({
      className: "className",
      variable: "variable",
      style: { fontFamily: "fontFamily" },
    }),
  };
});

beforeAll(() => {
  cleanup();
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});
