import "./mentira.css"

export function PruebaPinga() {


    return (
        <div>
            <p className="displayNada" data-testid={12}>
            hola
            </p>
        </div>
    )
}
// si tiene display none, no puede seleccionar al elemento, no lo encuentra, el test falla. SI SE HACE CON ROLE O ACCESIBILIDAD¿
