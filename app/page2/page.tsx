import Link from 'next/link';
import Rectangle from '../components/Rectangle';

export default function Home() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <Rectangle color={'red'}/>
          <Link href="/">Ir a pagina 1</Link>
      </div>
    );
  }