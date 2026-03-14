export default function arrayToString(texts: string[]): string {
  if (texts.length === 0) {
    return "";
  } else if (texts.length === 1) {
    return texts[0];
  } else {
    return texts.join(", ");
  }
}
