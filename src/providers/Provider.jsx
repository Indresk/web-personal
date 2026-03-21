import { StrictMode } from 'react'
import { BrowserRouter } from "react-router";

export default function Provider({children}){
    return(
        <StrictMode>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </StrictMode>
    )
}