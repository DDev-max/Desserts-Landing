import Image from 'next/image'
import { StarsSVG } from '../../SVG/Stars/StarsSVG'
import styles from './fullRecipe.module.css'
import { ClockSVG } from '../../SVG/ClockSVG'
import { RecipeSteps } from '../recipeSteps/recipeSteps'
import { PaginationBtns } from '../paginationBtns/paginationBtns'
import type { PageCatgry } from '@/data/types'

interface FullRecipeProps {
  category: string
  page: string
  recipes: PageCatgry
}

export async function FullRecipe({ category, page, recipes }: FullRecipeProps) {
  return (
    <div
      tabIndex={0}
      aria-labelledby={`${category}ID`}
      id={`${category}Tab`}
      className={`${styles.recipesCont} 
            ${category == 'cookies' ? styles['recipesCont--rightBrdr'] : ''}
            ${category == 'fruits' ? styles['recipesCont--leftBrdr'] : ''}`}
    >
      {recipes?.data.map(elmnt => {
        return (
          <article className={`${styles.recipesCont_recipe}`} id={elmnt.id} key={elmnt.id}>
            <Image
              className={`${styles.recipesCont_recipe_img}`}
              alt={elmnt.dish}
              src={elmnt.image}
              width={200}
              height={200}
            />

            <div className={`${styles.recipesCont_recipe_aditionalInfo}`}>
              <StarsSVG
                className={`${styles.recipesCont_recipe_aditionalInfo_starsCont_star}`}
                qtty={elmnt.stars}
              />

              <ClockSVG className={`${styles.recipesCont_recipe_aditionalInfo_clock}`} />

              <p>{`${elmnt.minutesOfPreparation} min`}</p>
            </div>

            <div className={`${styles.recipesCont_recipe_info}`}>
              <h3>{elmnt.dish}</h3>
              <RecipeSteps recipeParagraph={elmnt.recipe} />
            </div>
          </article>
        )
      })}

      <PaginationBtns
        currentPage={Number(page)}
        selectedBtnClassName={`${styles['recipesCont_btnsCont_btn--selected']}`}
        classNameCont={`${styles.recipesCont_btnsCont}`}
        classNameBtn={`${styles.recipesCont_btnsCont_btn}`}
        buttonsQtty={recipes?.pages || 0}
      />
    </div>
  )
}
