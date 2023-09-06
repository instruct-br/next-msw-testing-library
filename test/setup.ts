import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { server } from "../lib/mocks/server";

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
