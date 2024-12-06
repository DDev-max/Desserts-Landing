import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Categories } from "./categories";
import { fetchData } from "../../utils/fetchData/fetchData";
import { createUrl } from "../../utils/createUrl/createUrl";



jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: '',
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn()
    }),
    useSearchParams: () => ({
      get: () => { },
      set: () => { }
    })
  }
})

jest.mock("../../utils/fetchData/fetchData")

jest.mock('../../utils/createUrl/createUrl');


it("should change url when category input changes", async () => {
  const categoriesMock = [
    {
      name: "Cookies",
      id: "cookies",
      imgLink: "https://plus.unsplash.com/premium_photo-1670895802184-176bbb53a2f7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Ice Creams",
      id: "iceCreams",
      imgLink: "https://images.unsplash.com/photo-1597249536924-b226b1a1259d?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  (fetchData as jest.Mock).mockReturnValueOnce(categoriesMock)


  const user = userEvent.setup()

  render(<Categories />)

  const input = await screen.findByText("Ice Creams")

  await user.click(input)

  expect(createUrl).toHaveBeenCalledWith(expect.objectContaining({
    paramsAndValueObj: expect.objectContaining({
      category: "iceCreams",
      page: 1,
    }),
  }))

})

// it("should change the current input checked if the url changes",async ()=>{
//   const categoriesMock = [
//     {
//       name: "Cookies",
//       id: "cookies",
//       imgLink: "https://plus.unsplash.com/premium_photo-1670895802184-176bbb53a2f7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//     {
//       name: "Ice Creams",
//       id: "iceCreams",
//       imgLink: "https://images.unsplash.com/photo-1597249536924-b226b1a1259d?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     },
//   ];

//   (fetchData as jest.Mock).mockReturnValueOnce(categoriesMock)

//   render(<Categories/>)
//   window.history.pushState({},"", "/?category=iceCreams")

//   const input = await screen.findByDisplayValue("iceCreams")

//   console.log("pathName es: ",window.location.pathname);
  
//   expect(input).toBeChecked()

// })

