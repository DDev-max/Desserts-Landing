import { render, screen,  } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PaginationBtns } from './paginationBtns'

it("renders all the buttons", ()=>{
    render(<PaginationBtns buttonsQtty={2} currentPage={1} selectedBtnClassName=''/>)

    const allLinks = screen.getAllByRole("link")
    
    expect(allLinks).toHaveLength(2)
    expect(allLinks[0]).toHaveTextContent('1')
    expect(allLinks[1]).toHaveTextContent('2')
})
