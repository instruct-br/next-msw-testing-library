export function register() {
  const envMockVal = process.env.NEXT_PUBLIC_API_MOCKING;
  if (process.env.NEXT_RUNTIME === "nodejs" && envMockVal) {
    import("@/lib/mocks");
  }
}
