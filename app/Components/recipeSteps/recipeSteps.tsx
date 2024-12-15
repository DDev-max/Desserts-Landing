export interface RecipeStepsProps{
    recipeParagraph: string
    olClassName?: string
    liClassName?: string
}

export function RecipeSteps({recipeParagraph,liClassName,olClassName}: RecipeStepsProps) {
    
    const steps = recipeParagraph.match(/[^.]+[.]/g)


    return (
        <ol className={olClassName}>
            {steps?.map((step, idx) => (
                <li className={liClassName} key={idx}>
                    {step}
                </li>
            ))}
        </ol>
    )
}

/*

{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Recipe",
        "name": "Tarta de manzana clásica",
        "image": "https://example.com/images/tarta-manzana.jpg",
        "description": "Una receta fácil y deliciosa de tarta de manzana con canela.",
        "url": "https://example.com/recetas/tarta-de-manzana",
        "author": {
          "@type": "Person",
          "name": "Chef Ana"
        },
        "cookTime": "PT1H",
        "prepTime": "PT20M",
        "recipeYield": "8 porciones",
        "recipeCategory": "Postres",
        "recipeCuisine": "Española",
        "keywords": "postre, tarta, manzana",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "reviewCount": "125"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Recipe",
        "name": "Brownies de chocolate",
        "image": "https://example.com/images/brownies.jpg",
        "description": "Brownies húmedos y deliciosos con un intenso sabor a chocolate.",
        "url": "https://example.com/recetas/brownies-de-chocolate",
        "author": {
          "@type": "Person",
          "name": "Chef Carlos"
        },
        "cookTime": "PT45M",
        "prepTime": "PT15M",
        "recipeYield": "12 porciones",
        "recipeCategory": "Postres",
        "recipeCuisine": "Americana",
        "keywords": "postre, brownies, chocolate",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "200"
        }
      }
    }
  ]
}

*/