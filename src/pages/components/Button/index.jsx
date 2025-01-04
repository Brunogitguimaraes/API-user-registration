
import {Button} from "../Button/styles"

function DefaultButton({children, ...props}){

    return(
        <Button {...props}>{children}</Button>
    )
}


export default DefaultButton