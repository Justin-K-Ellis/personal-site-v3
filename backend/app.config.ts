function getPort(): number {
  const PORT = process.env.PORT;
  if (!PORT) {
    throw new Error("Port not found.");
  }
  const port = parseInt(PORT);
  if (isNaN(port)) {
    throw new Error("Port misconfigured (must be numeric).");
  }
  return port;
}

export { getPort };
