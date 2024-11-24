import Image from "next/image";
import styles from "./singleProduct.module.css";
export function SingleProduct() {


    return (
        <section className={`${styles.section}`}>
            <h2>Fresh and New!</h2>

            <div className={`${styles.section_recipe}`}>
                <Image  className={`${styles.section_recipe_img}`} src={"/magdalenas.png"} width={450} height={300} alt="Vanilla cupcakes with colorful sprinkles."/>

                <div className={`${styles.section_recipe_info}`}>
                    <h3 className={`${styles.section_recipe_info_title}`}>Vanilla Cupcakes</h3>

                    <ol>

                        <li>Preheat oven to 350°F (175°C); line a cupcake tray with 12 liners.</li>
                        
                        <li>Whisk flour, baking powder, and salt in a bowl.</li>
                        
                        <li>Cream butter and sugar; beat in eggs and vanilla.</li>
                        
                        <li>Mix in dry ingredients and milk alternately.</li>
                        
                        <li>Fill liners ⅔ full; bake 18–22 minutes.</li>
                        
                        <li>Cool, then enjoy!</li>

                    </ol>

                </div>
            </div>
        </section>
    )
}