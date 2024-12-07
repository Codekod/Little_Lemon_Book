import Nav from './components/Nav'
import Footer from './components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      
      <main className="flex-grow">
        <section className="bg-[#495E57] text-white">
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-[#F4CE14] text-6xl font-bold mb-4">Little Lemon</h1>
              <h2 className="text-3xl mb-4">Chicago</h2>
              <p className="text-lg mb-8">
                We are a family owned Mediterranean restaurant, focused on traditional 
                recipes served with a modern twist.
              </p>
              <Link
                href="/reservations"
                className="inline-block bg-[#F4CE14] text-[#495E57] px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                Reserve Table
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/featured-dish.jpg"
                alt="Featured dish"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

