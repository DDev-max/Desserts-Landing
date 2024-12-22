import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Faq } from "./faq";
import { FaqAPI } from "@/app/data/types";

jest.mock("../../utils/fetchData/fetchData");


it("should render data from FAQ fetch", async () => {

    const mockFetch: FaqAPI[] = [{
        id: "idN1",
        question: "Do you accept custom orders?",
        answer: "Yes, we do!."
    }];


    render(await Faq({data: mockFetch}))

    const questionAnswer = await screen.findByRole("group")

    expect(questionAnswer).toHaveTextContent(mockFetch[0].question)
    expect(questionAnswer).toHaveTextContent(mockFetch[0].answer)


})