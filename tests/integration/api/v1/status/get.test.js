const NEXT_PUBLIC_API_URL = 'http://localhost:3000';

test("GET to api/v1/status should return 200", async () => {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/status`);
  expect(response.status).toBe(200);
});

test("GET to api/v1/status should return right message", async () => {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/v1/status`);
  const data = await response.json();
  expect(data).toEqual({ "chave": "API is running" });
});