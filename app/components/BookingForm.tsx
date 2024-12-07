'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateForm = () => {
    let isValid = true
    let newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'İsim gereklidir'
      isValid = false
    }

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz'
      isValid = false
    }

    if (!formData.date) {
      newErrors.date = 'Tarih seçiniz'
      isValid = false
    }

    if (!formData.time) {
      newErrors.time = 'Saat seçiniz'
      isValid = false
    }

    if (!formData.guests || parseInt(formData.guests) < 1 || parseInt(formData.guests) > 10) {
      newErrors.guests = 'Kişi sayısı 1 ile 10 arasında olmalıdır'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateForm()) {
      // Burada API çağrısı yapılacak
      console.log('Form gönderildi:', formData)
      // API çağrısı simülasyonu
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Rezervasyonunuz alındı!')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <Label htmlFor="name">Ad Soyad</Label>
        <Input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby="name-error"
        />
        {errors.name && <p id="name-error" className="text-red-500">{errors.name}</p>}
      </div>
      <div>
        <Label htmlFor="email">E-posta</Label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby="email-error"
        />
        {errors.email && <p id="email-error" className="text-red-500">{errors.email}</p>}
      </div>
      <div>
        <Label htmlFor="date">Tarih</Label>
        <Input 
          type="date" 
          id="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          aria-invalid={errors.date ? "true" : "false"}
          aria-describedby="date-error"
        />
        {errors.date && <p id="date-error" className="text-red-500">{errors.date}</p>}
      </div>
      <div>
        <Label htmlFor="time">Saat</Label>
        <Input 
          type="time" 
          id="time" 
          name="time" 
          value={formData.time} 
          onChange={handleChange} 
          aria-invalid={errors.time ? "true" : "false"}
          aria-describedby="time-error"
        />
        {errors.time && <p id="time-error" className="text-red-500">{errors.time}</p>}
      </div>
      <div>
        <Label htmlFor="guests">Kişi Sayısı</Label>
        <Input 
          type="number" 
          id="guests" 
          name="guests" 
          value={formData.guests} 
          onChange={handleChange} 
          min="1" 
          max="10" 
          aria-invalid={errors.guests ? "true" : "false"}
          aria-describedby="guests-error"
        />
        {errors.guests && <p id="guests-error" className="text-red-500">{errors.guests}</p>}
      </div>
      <Button type="submit">Rezervasyon Yap</Button>
    </form>
  )
}

