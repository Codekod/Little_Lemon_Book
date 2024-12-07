import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Little Lemon logo"
              width={50}
              height={50}
              className="w-auto h-8"
            />
            <span className="text-gray-800 font-serif">LITTLE LEMON</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="/menu" className="text-gray-600 hover:text-gray-900">Menu</Link>
          <Link href="/reservations" className="text-gray-600 hover:text-gray-900">Reservations</Link>
          <Link href="/order" className="text-gray-600 hover:text-gray-900">Order Online</Link>
          <Link href="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
        </div>
      </div>
    </nav>
  )
}

