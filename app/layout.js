import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import { Audiowide, Comfortaa, Montserrat, Quicksand, Staatliches } from "@next/font/google";
import styled, { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/StyledComponentsRegistry.jsx";


const audiowide = localFont({
    src: "../pu"
                            })



export default function RootLayout( { children } ) {
    return ( <html lang="en">
    {/*
     <head /> will contain the components returned by the nearest parent
     head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
     */ }
    <head/>
    <body>
    <StyledComponentsRegistry>
        { children }
    </StyledComponentsRegistry>
    </body>
    </html> );
}
