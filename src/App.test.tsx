import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByText('Vite + React + TypeScript + Tailwind')
    expect(heading).toBeInTheDocument()
  })
}) 