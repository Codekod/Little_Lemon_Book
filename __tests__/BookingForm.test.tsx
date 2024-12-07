import { render, screen, fireEvent } from '@testing-library/react'
import BookingForm from '../app/components/BookingForm'

describe('BookingForm', () => {
  it('renders all form fields', () => {
    render(<BookingForm />)
    expect(screen.getByLabelText(/Ad Soyad/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/E-posta/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Tarih/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Saat/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Kişi Sayısı/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Rezervasyon Yap/i })).toBeInTheDocument()
  })

  it('displays error messages for invalid inputs', async () => {
    render(<BookingForm />)
    fireEvent.click(screen.getByRole('button', { name: /Rezervasyon Yap/i }))

    expect(await screen.findByText(/İsim gereklidir/i)).toBeInTheDocument()
    expect(await screen.findByText(/Geçerli bir e-posta adresi giriniz/i)).toBeInTheDocument()
    expect(await screen.findByText(/Tarih seçiniz/i)).toBeInTheDocument()
    expect(await screen.findByText(/Saat seçiniz/i)).toBeInTheDocument()
    expect(await screen.findByText(/Kişi sayısı 1 ile 10 arasında olmalıdır/i)).toBeInTheDocument()
  })

  it('clears error message when user starts typing', async () => {
    render(<BookingForm />)
    fireEvent.click(screen.getByRole('button', { name: /Rezervasyon Yap/i }))

    const nameInput = screen.getByLabelText(/Ad Soyad/i)
    expect(await screen.findByText(/İsim gereklidir/i)).toBeInTheDocument()

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    expect(screen.queryByText(/İsim gereklidir/i)).not.toBeInTheDocument()
  })
})

