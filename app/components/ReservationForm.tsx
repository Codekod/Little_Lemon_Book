'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ReservationForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would submit to an API here
    router.push('/confirmation')
  }

  return (
    <div className="bg-[#495E57] min-h-screen py-12">
      <div className="max-w-md mx-auto bg-white/10 p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="date" className="block text-white mb-2">Choose Date</label>
            <input
              type="date"
              id="date"
              className="w-full p-2 rounded bg-white"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-white mb-2">Choose Time</label>
            <select
              id="time"
              className="w-full p-2 rounded bg-white"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
            >
              <option value="">Select a Time</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
            </select>
          </div>

          <div>
            <label htmlFor="guests" className="block text-white mb-2">Number of Guests</label>
            <input
              type="number"
              id="guests"
              min="1"
              max="10"
              className="w-full p-2 rounded bg-white"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="occasion" className="block text-white mb-2">Occasion</label>
            <select
              id="occasion"
              className="w-full p-2 rounded bg-white"
              value={formData.occasion}
              onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
              required
            >
              <option value="">Select an Option</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F4CE14] text-[#495E57] py-2 px-4 rounded font-bold hover:bg-yellow-400 transition-colors"
          >
            Make Your Reservation
          </button>
        </form>
      </div>
    </div>
  )
}

