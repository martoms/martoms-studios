import { render, screen } from '@testing-library/react'
import Contact from './Contact'

describe('Contact', () => {
    it('renders correctly', () => {
        render(<Contact />)
        const header = screen.getByRole('heading', {
            level: 2
        })
        expect(header).toBeInTheDocument()
    })
})