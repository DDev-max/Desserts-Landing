import { render, screen } from '@testing-library/react'
import { RecipeSteps } from './recipeSteps'
import '@testing-library/jest-dom'


it('renders list items from a string', () => {
    const stringMock= "First do this. Then do this . Finally, try this."
    
    render(<RecipeSteps recipeParagraph={stringMock}/>)
    
    const listItems = screen.getAllByRole("listitem")

    
    expect(listItems).toHaveLength(3)
    expect(listItems[0]).toHaveTextContent(/First do this/i)
    expect(listItems[1]).toHaveTextContent(/Then do this/i)
    expect(listItems[2]).toHaveTextContent(/Finally, try this/i)

});