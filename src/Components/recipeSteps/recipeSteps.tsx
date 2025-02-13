interface RecipeStepsProps {
  recipeParagraph: string
  olClassName?: string
  liClassName?: string
}

export function RecipeSteps({ recipeParagraph, liClassName, olClassName }: RecipeStepsProps) {
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
