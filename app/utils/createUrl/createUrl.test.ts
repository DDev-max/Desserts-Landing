import '@testing-library/jest-dom'
import { createUrl } from "./createUrl";
import { useRouter } from 'next/navigation';


afterEach(() => {
  jest.clearAllMocks();
})



describe("returns url",()=>{

    test("returns link with hash",()=>{
        const paramsAndValueObj = {
            category: "iceCreams",
            page: 1,
        }

        const pathName = '/'
        const searchParams = new URLSearchParams()

        const newUrl = createUrl({paramsAndValueObj, pathName,searchParams,hash: "aboutUs"})

        expect(newUrl).toBe("/?category=iceCreams&page=1#aboutUs")

    })


    test("returns full link", ()=>{
      const paramsAndValueObj = {
        category: "iceCreams",
        page: 1,
      }

      const pathName = '/example'
      const searchParams = new URLSearchParams()

      const newUrl = createUrl({paramsAndValueObj, pathName,searchParams})

      expect(newUrl).toBe("/example?category=iceCreams&page=1")
    })

})


describe("url changes", ()=>{
  test("it push a new link", ()=>{
    const paramsAndValueObj = {
      category: "iceCreams",
      page: 1,
    }

    const pathName = '/'
    const searchParams = new URLSearchParams()
    const router = useRouter()

    createUrl({paramsAndValueObj,pathName,searchParams, router})

    expect(router.push).toHaveBeenCalledWith("/?category=iceCreams&page=1",{scroll: false})
  })


  test("should not call router.push if router is not provided", ()=>{
    const paramsAndValueObj = {
      category: "iceCreams",
      page: 1,
    }

    const pathName = '/'
    const searchParams = new URLSearchParams()
    const router = useRouter()

    createUrl({paramsAndValueObj,pathName,searchParams})

    expect(router.push).not.toHaveBeenCalled()
  })
  
  
})