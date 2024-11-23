import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css"

export default function Page() {


    return (
        <main>
            <div className={`${styles.welcomeCont}`}>
                <p className={`${styles.welcomeCont_txt}`}>Welcome to your happy place!</p>

                <Image unoptimized className={`${styles.welcomeCont_img}`} width={0} height={0} 
                src={"/chupaTetas.png"}
                    alt="Decorative image of desserts."
                />

            </div>
            
        </main>
    )
}