import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css"
import { SingleProduct } from "./Components/singleProduct/singleProduct";
import { MultipleProducts } from "./Components/multipleProducts/multipleProducts";
import { Categories } from "./Components/categories/categories";
import { FullRecipe } from "./Components/fullRecipe/fullRecipe";
import { PageProps } from "@/.next/types/app/layout";
import { generateJsonLd } from "./utils/generateJsonLd/generateJsonLd";
import { Faq } from "./Components/faq/faq";
import { Suspense } from "react";
import { FaqSkeleton } from "./Components/faq/faqSkeleton";
import { FullRecipeSkeleton } from "./Components/fullRecipe/fullRecipeSkeleton";
import { MultipleProductsSkeleton } from "./Components/multipleProducts/multipleProductsSkeleton";
import { getFaqData, getRecipeData } from "./utils/mappedFetch";

export default async function Page(props: PageProps) {

    const searchParams = await props.searchParams;
    const category = searchParams?.category || 'cookies';
    const currentPage = searchParams?.page || "1";

    const recipeUrl = `http://localhost:3001/${category}?_page=${currentPage}&_per_page=2`

    const faqData = await getFaqData()
    const recipesData = await getRecipeData(recipeUrl)

    const recipesJsonLd = generateJsonLd({ from: recipesData, type: "recipeList" })
    const faqJsonLd = generateJsonLd({ from: faqData, type: "faq" })


    return (

        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: recipesJsonLd }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />

            <main id="mainContent">
                <div className={`${styles.welcomeCont}`}>
                    <h1 className={`${styles.welcomeCont_txt}`}>Welcome to your happy place!</h1>

                    <Image className={`${styles.welcomeCont_img}`} width={450} height={350}
                        src={"/welcomeImg.png"}
                        alt=""
                    />
                </div>

                <div className={`${styles.mainPadding}`}>

                    <div className={`${styles.fullCateogriesCont}`}>

                        <Categories currentCategory={category} />

                        <Suspense fallback={<FullRecipeSkeleton />}>
                            <FullRecipe recipes={recipesData} category={category} page={currentPage} />
                        </Suspense>


                    </div>

                    <SingleProduct />


                    <Suspense fallback={<MultipleProductsSkeleton />}>
                        <MultipleProducts />
                    </Suspense>

                    <Suspense fallback={<FaqSkeleton />}>
                        <Faq data={faqData}/>
                    </Suspense>


                </div>


            </main>
        </>
    )
}