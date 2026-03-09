import "dotenv/config";

function getPort(): number {
  let PORT = process.env.PORT;
  if (!PORT) {
    throw new Error("Port not found.");
  }
  if (isNaN(parseInt(PORT))) {
    throw new Error("Port misconfigured (must be numeric).");
  }
  return parseInt(PORT);
}

export { getPort };
