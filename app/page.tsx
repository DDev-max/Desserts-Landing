import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css"
import { SingleProduct } from "./Components/singleProduct/singleProduct";
import { MultipleProducts } from "./Components/multipleProducts/multipleProducts";
import { Categories } from "./Components/categories/categories";
import { FullRecipe } from "./Components/fullRecipe/fullRecipe";
import { PageProps } from "@/.next/types/app/layout";

export default async function Page(props: PageProps) {


    const searchParams = await props.searchParams;
    const category = searchParams?.category || 'cookies';
    const currentPage = searchParams?.page || "1";

    return (
        <main>
            <div className={`${styles.welcomeCont}`}>
                <h1 className={`${styles.welcomeCont_txt}`}>Welcome to your happy place!</h1>

                <Image className={`${styles.welcomeCont_img}`} width={450} height={350}
                    src={"/welcomeImg.png"}
                    alt="Decorative image of desserts."
                />

            </div>

            <Categories />

            <FullRecipe category={category} page={currentPage} />

            <SingleProduct />

            <MultipleProducts />


        </main>
    )
}