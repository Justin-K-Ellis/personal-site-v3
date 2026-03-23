export default function SubTitle({ text }: { text: string }) {
  return (
    <h3 className="font-bold text-center text-xl md:text-3xl mt-1 mb-4">
      {text}
    </h3>
  );
}
