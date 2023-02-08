"use client";
import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";



export default function StyledComponentsRegistry( props ) {
    const [ styledComponentsStyleSheet ] = useState( () => new ServerStyleSheet() );
    
    useServerInsertedHTML( () => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{ styles }</>;
    } );
    
    
    
    if( typeof window !== "undefined" ) {
        return <>{ props.children }</>;
    }
    
    return ( <StyleSheetManager sheet={ styledComponentsStyleSheet.instance }>
        { props.children }
    </StyleSheetManager> );
}

