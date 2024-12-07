import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-green-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center" aria-label="Main Navigation">
        <Link href="/" className="text-2xl font-bold" aria-label="Little Lemon Home">
          Little Lemon
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" aria-current="page">Ana Sayfa</Link></li>
          <li><Link href="/menu">Menü</Link></li>
          <li><Link href="/book">Rezervasyon</Link></li>
        </ul>
      </nav>
    </header>
  )
}

