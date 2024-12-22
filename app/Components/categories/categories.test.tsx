import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Categories } from "./categories";
import { focusTab } from "./focusTab";
import { ContextCategoriesProps, RecipesCategoriesAPI } from "@/app/data/types";
import { createUrl } from "@/app/utils/createUrl/createUrl";
import { useCategoriesCntxt } from "@/app/Context/useCategoriesCntxt";


jest.mock("./focustab");
jest.mock("@/app/utils/createUrl/createUrl");
jest.mock("../../Context/useCategoriesCntxt");

const categoriesMock:RecipesCategoriesAPI[] = [
  {
    name: "Ice Creams",
    id: "iceCreams",
    imgLink: "https://images.unsplash.com/photo-1597249536924-b226b1a1259d?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

(createUrl as jest.Mock).mockReturnValue("#");

describe("renders", ()=>{
  it("should render categories", async () => {

    const mockContext: ContextCategoriesProps= {
      categories: categoriesMock,
      isLoading: false
    };
    
    (useCategoriesCntxt as jest.Mock).mockReturnValue(mockContext)
    


    render(<Categories currentCategory="iceCreams" />)
  
    const categoryTab = await screen.findByRole("tab")
  
    expect(useCategoriesCntxt).toHaveBeenCalledTimes(1)
    expect(categoryTab).toHaveTextContent(/ice creams/i)
  
  })


  it("should render skeleton if isLoading=true",async ()=>{
    const notLoadedCntxt: ContextCategoriesProps= {
      categories: categoriesMock,
      isLoading: true
    };
    (useCategoriesCntxt as jest.Mock).mockReturnValue(notLoadedCntxt)

    render(<Categories currentCategory="iceCreams" />)

    const tablist =  screen.queryByRole("tablist")
    const skeleton = await screen.findByTestId("categoriesSkeleton")

    expect(tablist).not.toBeInTheDocument()
    expect(skeleton).toBeInTheDocument()

  })


})


describe("accessibility",()=>{


  beforeEach(()=>{
    const mockContext: ContextCategoriesProps= {
      categories: categoriesMock,
      isLoading: false
    };
    
    (useCategoriesCntxt as jest.Mock).mockReturnValue(mockContext)
  })
  

  test("current category should have aria-selected=true",async ()=>{
    render(<Categories currentCategory="iceCreams" />)  
  
    const selectedCategory = await screen.findByRole("tab", {selected: true})
  
    expect(useCategoriesCntxt).toHaveBeenCalledTimes(1)
    expect(selectedCategory).toHaveTextContent(/ice creams/i)
    
  })
  
  
  it("should focus tab when arrow key is pressed",async ()=>{
    const user = userEvent.setup()
    render(<Categories currentCategory="iceCreams" />)
      
    const categoryTab = await screen.findByRole("tab")
    categoryTab.focus()
  
    await user.keyboard("{ArrowRight}")
  
    expect(useCategoriesCntxt).toHaveBeenCalledTimes(1)
    expect(focusTab).toHaveBeenCalled()
  })
  
})