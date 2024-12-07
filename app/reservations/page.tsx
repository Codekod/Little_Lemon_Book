import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ReservationForm from '../components/ReservationForm'

export default function ReservationsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <ReservationForm />
      <Footer />
    </div>
  )
}

