import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css"
import { Categories } from "./(categories)/categories";
import { SingleProduct } from "./singleProduct/singleProduct";

export default function Page() {


    return (
        <main>
            <div className={`${styles.welcomeCont}`}>
                <h1 className={`${styles.welcomeCont_txt}`}>Welcome to your happy place!</h1>

                <Image unoptimized className={`${styles.welcomeCont_img}`} width={450} height={350} 
                src={"/welcomeImg.png"}
                    alt="Decorative image of desserts."
                />

            </div>

            <Categories/>

            <SingleProduct/>
            
        </main>
    )
}