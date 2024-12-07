import { render, screen, fireEvent } from '@testing-library/react'
import ReservationForm from '../app/components/ReservationForm'

describe('ReservationForm', () => {
  it('renders all form fields', () => {
    render(<ReservationForm />)
    
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    render(<ReservationForm />)
    
    const submitButton = screen.getByRole('button', { name: /Confirm Reservation/i })
    fireEvent.click(submitButton)

    // Check for validation messages
    expect(await screen.findByText(/Please fill in all fields/i)).toBeInTheDocument()
  })

  it('accepts valid input', () => {
    render(<ReservationForm />)
    
    const nameInput = screen.getByLabelText(/Full Name/i)
    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    expect(nameInput).toHaveValue('John Doe')

    const emailInput = screen.getByLabelText(/Email/i)
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    expect(emailInput).toHaveValue('john@example.com')
  })
})

