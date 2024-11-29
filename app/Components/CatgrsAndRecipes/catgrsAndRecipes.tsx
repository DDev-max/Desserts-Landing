"use client"
import { useState } from "react";
import { Categories } from "../categories/categories";
import { FullRecipe } from "../fullRecipe/fullRecipe";
import { AllCategories, PageCatgry } from "@/app/data/types";
import { useSearchParams } from "next/navigation";

export function CatgrsAndRecipes() {

    const searchParams = useSearchParams()

    const [selectedCatgry, setSelectedCatgry] = useState<keyof AllCategories>((searchParams.get("category") as keyof AllCategories) || "cookies")

    const [recipes, setRecipes] = useState<PageCatgry>()

    return (
        <>
            <Categories selectedCatgry={selectedCatgry} setSelectedCatgry={setSelectedCatgry}/>

            <FullRecipe recipes={recipes} setRecipes={setRecipes}/>
        </>
    )
    
}