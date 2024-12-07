export default function Hero() {
  return (
    <section className="bg-[#495E57] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-yellow-400 mb-4">
              Little Lemon
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4">Chicago</h2>
            <p className="text-lg mb-8">
              We are a family owned Mediterranean restaurant, focused on traditional 
              recipes served with a modern twist.
            </p>
            <a 
              href="/reservations" 
              className="bg-yellow-400 text-[#495E57] px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
              aria-label="Reserve a table"
            >
              Reserve a Table
            </a>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Featured dish at Little Lemon restaurant"
              className="rounded-lg shadow-xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

