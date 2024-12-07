import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      
      <main className="flex-grow bg-[#495E57] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Booking has been confirmed!</h1>
          <p className="text-lg">Thank you for choosing Little Lemon.</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}

