import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingForm from '../components/BookingForm'

export default function Book() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Rezervasyon Yap</h1>
        <BookingForm />
      </main>
      <Footer />
    </div>
  )
}

