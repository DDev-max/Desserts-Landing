import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css"
import { SingleProduct } from "./Components/singleProduct/singleProduct";
import { MultipleProducts } from "./Components/multipleProducts/multipleProducts";
import { Categories } from "./Components/categories/categories";
import { FullRecipe } from "./Components/fullRecipe/fullRecipe";
import { PageProps } from "@/.next/types/app/layout";
import { generateJsonLd } from "./utils/generaJsonLd/generateJsonLd";
import { Faq } from "./Components/faq/faq";
import { faqUrl } from "./data/consts";

export default async function Page(props: PageProps) {

    const searchParams = await props.searchParams;
    const category = searchParams?.category || 'cookies';
    const currentPage = searchParams?.page || "1";

    const recipesJsonLd =  await generateJsonLd({url:`http://localhost:3001/${category}?_page=${currentPage}&_per_page=2`, type: "recipeList"})
    const faqJsonLd =  await generateJsonLd({url: faqUrl, type: "faq"})

    
    return (

        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: recipesJsonLd}}/>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: faqJsonLd}}/>

            <main>
                <div className={`${styles.welcomeCont}`}>
                    <h1 className={`${styles.welcomeCont_txt}`}>Welcome to your happy place!</h1>

                    <Image className={`${styles.welcomeCont_img}`} width={450} height={350}
                        src={"/welcomeImg.png"}
                        alt="Decorative image of desserts."
                    />
                </div>

                <div className={`${styles.mainPadding}`}>

                    <div className={`${styles.fullCateogriesCont}`}>

                        <Categories />

                        <FullRecipe category={category} page={currentPage} />

                    </div>

                    <SingleProduct />

                    <MultipleProducts />

                    <Faq/>

                </div>
                

            </main>
        </>
    )
}