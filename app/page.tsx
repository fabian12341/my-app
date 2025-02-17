import Link from 'next/link';
import Rectangle from "./components/Rectangle";

export default function Home() {
  const colors = [
    "blue", "green", "red", "yellow", "purple", "orange", "cyan", "pink", 
    "lime", "teal", "indigo", "brown", "magenta", "gold", "coral", 
    "navy", "olive", "salmon", "maroon", "turquoise", "violet", 
    "lavender", "plum", "beige", "khaki"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="grid grid-cols-5 gap-2">
        {colors.map((color, index) => (
          <Rectangle 
            key={index}
            color={color}
          />
        ))}
      </div>
      <Link href="/page2" className="mt-8">Ir a página 2</Link>
    </div>
  );
}

