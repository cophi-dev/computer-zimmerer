export function debug(namespace: string, payload: Record<string, unknown>) {
  const event = typeof payload.event === "string" ? payload.event : "";
  const isFailure = /error|fail|missing|invalid|exception/.test(event);
  const enabled = process.env.DEBUG?.split(",").some((token) => token.trim() === namespace || token.trim() === "*");
  if (!enabled && !isFailure && process.env.NODE_ENV === "production") {
    return;
  }
  console.error(`[${namespace}]`, payload);
}
