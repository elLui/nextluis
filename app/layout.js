import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import { comfortaa } from "@/app/styles/fonts/fonts";
import styled, { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "./lib/StyledComponentsRegistry.jsx";
import { Comfortaa } from "./styles/fonts/fonts";


export default function RootLayout( { children } ) {
    return ( <html
        lang="en"
        className={comfortaa.className}
    >
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
