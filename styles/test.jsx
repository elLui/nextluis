//const pre = ["color", "font", "text,  "spacing", "border", "transition"];


const pre = [ "pri", "sec", "ter", ];

const mid = [ "color",
              "font",
              "background",
              "text",
              "spacing",
              "border",
              "transition",
              "box-shadow",
              "text-shadow",
              "padding",
              "margin", ];

const suf = [ "spacing", "border", "transition", "box" ];



for( let i = 0; i < pre.length; i++ ) {
    for( let j = 0; j < mid.length; j++ ) {
        console.log( pre[ i ] + "-" + mid[ j ] );
    }
}
const suf = [ "spacing", "border", "transition", "box" ];

const misc = [ "spacing", "border", "transition", "box" ];

//for (let i = 0; i < pre.length; i++) {
//    const element = pre[i];
//    console.log(element);
//}
//
//const p = [
//  "color",
//  "font",
//  "spacing",
//  "border",
//  "background",
//  "border-radius",
//  "transition",
//  "box-shadow",
//  "text-shadow",
//  "filter",
//  "transform",
//  "outline",
//  "cursor",
//  "pointer-events",
//  "resize",
//  "appearance",
//  "user-select",
//  "fill",
//  "stroke",
//  "list-style",
//  "table-layout",
//  "empty-cells",
//  "object-fit",
//  "object-position",
//  "overflow",
//  "overscroll-behavior",
//  "position",
//  "top",
//  "right",
//  "bottom",
//  "left",
//  "z-index",
//  "flex",
//  "flex-grow",
//  "flex-shrink",
//  "flex-basis",
//  "flex-direction",
//  "flex-wrap",
//  "flex-flow",
//  "justify-content",
//  "align-items",
//  "align-content",
//  "align-self",
//  "order",
//  "grid",
//  "grid-template",
//  "grid-template-rows",
//  "grid-template-columns",
//  "grid-auto-rows",
//  "grid-auto-columns",
//  "grid-auto-flow",
//  "grid-column",
//  "grid-column-start",
//  "grid-column-end",
//  "grid-column-gap",
//  "grid-row",
//  "grid-row-start",
//  "grid-row-end",
//  "grid-row-gap",
//  "grid-gap",
//  "grid-area",
//  "gap",
//  "place-content",
//  "place-items",
//  "place-self",
//  "background-attachment",
//  "background-clip",
//  "background-color",
//  "background-image",
//  "background-origin",
//  "background-position",
//  "background-repeat",
//  "background-size",
//  "border-collapse",
//  "border-color",
//  "border-spacing",
//  "border-style",
//  "border-width",
//  "border-top",
//  "border-top-color",
//  "border-top-style",
//  "border-top-width",
//  "border-right",
//  "border-right-color",
//  "border-right-style",
//  "border-right-width",
//  "border-bottom",
//  "border-bottom-color",
//  "border-bottom-style",
//  "border-bottom-width",
//  "border-left",
//  "border-left-color",
//  "border-left-style",
//  "border-left-width",
//  "border-radius",
//  "border-top-left-radius",
//  "border-top",
//  "border-top-right-radius",
//  "border-bottom-right-radius",
//  "border-bottom-left-radius",
//  "border-image",
//  "border-image-source",
//  "border-image-slice",
//  "border-image-width",
//  "border-image-outset",
//  "border-image-repeat",
//  "border-top-image",
//  "border-right-image",
//  "border-bottom-image",
//  "border-left-image",
//  "box-decoration-break",
//  "box-shadow",
//  "box-sizing",
//  "caption-side",
//  "clear",
//  "clip",
//  "columns",
//  "column-count",
//  "column-fill",
//  "column-gap",
//  "column-rule",
//  "column-rule-color",
//  "column-rule-style",
//  "column-rule-width",
//  "column-span",
//  "column-width",
//  "content",
//  "counter-increment",
//  "counter-reset",
//  "cursor",
//  "direction",
//  "display",
//  "empty-cells",
//  "filter",
//  "flex",
//  "flex-basis",
//  "flex-direction",
//  "flex-flow",
//  "flex-grow",
//  "flex-shrink",
//  "flex-wrap",
//  "float",
//  "font",
//  "font-family",
//  "font-size",
//  "font-smoothing",
//  "font-style",
//  "font-variant",
//  "font-weight",
//  "hanging-punctuation",
//  "height",
//  "hyphens",
//  "image-rendering",
//  "isolation",
//  "justify-content",
//  "letter-spacing",
//  "line-height",
//  "list-style",
//  "list-style-image",
//  "list-style-position",
//  "list-style-type",
//  "margin",
//  "margin-top",
//  "margin-right",
//  "margin-bottom",
//  "margin-left",
//  "max-height",
//  "max-width",
//  "min-height",
//  "min-width",
//  "object-fit",
//  "object-position",
//  "opacity",
//  "order",
//  "orphans",
//  "outline",
//  "outline-color",
//  "outline-offset",
//  "outline-style",
//  "outline-width",
//  "overflow",
//  "overflow-x",
//  "overflow-y",
//  "padding",
//  "padding-top",
//  "padding-right",
//  "padding-bottom",
//  "padding-left",
//  "page-break-after",
//  "page-break-before",
//  "page-break-inside",
//  "perspective",
//  "perspective-origin",
//  "pointer-events",
//  "position",
//  "quotes",
//  "resize",
//  "right",
//  "tab-size",
//  "table-layout",
//  "text-align",
//  "text-align-last",
//  "text-decoration",
//  "text-decoration-color",
//  "text-decoration-line",
//  "text-decoration-style",
//  "text-emphasis",
//  "text-emphasis-color",
//  "text-emphasis-position",
//  "text-emphasis-style",
//  "text-indent",
//  "text-justify",
//  "text-overflow",
//  "text-rendering",
//  "text-shadow",
//  "text-size-adjust",
//  "text-transform",
//  "text-underline-position",
//  "top",
//  "transform",
//  "transform-origin",
//  "transform-style",
//  "transition",
//  "transition-delay",
//  "transition-duration",
//  "transition-property",
//  "transition-timing-function",
//  "unicode-bidi",
//  "vertical-align",
//  "visibility",
//  "white-space",
//  "widows",
//  "width",
//  "word-break",
//  "word-spacing",
//  "word-wrap",
//  "writing-mode",
//  "z-index",
//];
//
//
//
//const subject = ["pri", "sec", "ter", "text", "bg", "border", "shadow"];
//
//const suffix = ["light", "dark", "lighter", "darker", "lightest", "darkest"];

//import { Comfortaa, Fredoka, MuseoModerno, Raleway } from "@next/font/google";
//
//
//
//export default function StyleVariables() {
//
//    // colors
//    const colors = {
//
//        // main colors
//        pri : "#1CA9C9", // pacific blue
//        sec : "#FF496C", // radical red
//        ter : "#9D81BA", // purple mountain majesty
//
//        // neutral colors
//        white : "#FFFFFF", // white
//        black : "#000000", // black
//
//        // colors text
//        textLight : "#FFFFFF", // white
//        text      : "#000000", // black
//        textDark  : "#333333", // dark grey
//
//        // colors background
//        bgLight : "#FFFFFF", // white
//        bg      : "#F4F4F4", // light grey
//        bgDark  : "#333333", // dark grey
//
//        // greys
//        greyLight : "#F4F4F4", // light grey
//        grey      : "#E4E4E4", // grey
//        greyDark  : "#333333", // dark grey
//
//        // accent colors
//        accentLight : "#F4F4F4", // light grey
//        accent      : "#E4E4E4", // grey
//        accentDark  : "#E4E4E4", // dark grey
//
//        // status colors
//        success : "#5CB85C", // green
//        warning : "#F0AD4E", // orange
//        error   : "#D9534F", // red
//        info    : "#5BC0DE", // blue
//
//        // social colors
//        facebook  : "#3B5998", // facebook blue
//        twitter   : "#55ACEE", // twitter blue
//        instagram : "#3F729B", // instagram blue
//        pinterest : "#BD081C", // pinterest red
//        youtube   : "#BB0000", // youtube red
//        linkedin  : "#0077B5", // linkedin blue
//        google    : "#DD4B39", // google red
//
//        // gradient colors
//        gradient      : "linear-gradient(45deg, #1CA9C9 0%, #FF496C 100%)", // pacific blue to radical red
//        gradientLight : "linear-gradient(45deg, #1CA9C9 0%, #FF496C 100%)", // pacific blue to radical red
//        gradientDark  : "linear-gradient(45deg, #1CA9C9 0%, #FF496C 100%)", // pacific blue to radical red
//
//        // transparent colors
//        transparent      : "transparent", // transparent
//        transparentLight : "rgba(255, 255, 255, 0.5)", // transparent white
//        transparentDark  : "rgba(0, 0, 0, 0.5)", // transparent black
//
//        // shadow colors
//        shadow      : "rgba(0, 0, 0, 0.5)", // black
//        shadowLight : "rgba(255, 255, 255, 0.5)", // white
//        shadowDark  : "rgba(0, 0, 0, 0.5)", // black
//
//        // border colors
//        border      : "#E4E4E4", // grey
//        borderLight : "#F4F4F4", // light grey
//        borderDark  : "#333333", // dark grey
//
//        // button colors
//        button      : "#1CA9C9", // pacific blue
//        buttonLight : "#1CA9C9", // pacific blue
//        buttonDark  : "#1CA9C9", // pacific blue
//
//        // link colors
//        link      : "#1CA9C9", // pacific blue
//        linkLight : "#1CA9C9", // pacific blue
//        linkDark  : "#1CA9C9", // pacific blue
//
//
//
//    };
//
//
//    // fonts
//    const font = {
//
//        // primary font
//        pri : "Comfortaa",
//
//        // secondary font
//        sec : "Fredoka",
//
//        // tertiary font
//        ter : "Raleway",
//
//        // display font
//        qua : "MuseoModerno",
//
//        // font sizes
//        size : {
//
//            // smallest font size
//            xxs : "0.5rem",
//
//            // smaller font size
//            xs : "0.75rem",
//
//            // small font size
//            sm : "1rem",
//
//            // medium font size
//            md : "1.25rem",
//
//            // large font size
//            lg : "1.5rem",
//
//            // larger font size
//            xl : "2rem",
//
//            // largest font size
//            xxl : "3rem",
//
//        },
//
//        // font weights
//        weight : {
//
//            // lightest font weight
//            xxs : "300",
//
//            // lighter font weight
//            xs : "400",
//
//            // small font weight
//            sm : "500",
//
//            // medium font weight
//            md : "600",
//
//            // large font weight
//            lg : "700",
//
//            // larger font weight
//            xl : "800",
//
//            // largest font weight
//            xxl : "900",
//
//        },
//
//        // font line heights
//        lineHeight : {
//
//            // smallest font line height
//            xxs : "0.5rem",
//
//            // smaller font line height
//            xs : "0.75rem",
//
//            // small font line height
//            sm : "1rem",
//
//            // medium font line height
//            md : "1.25rem",
//
//            // large font line height
//            lg : "1.5rem",
//
//            // larger font line height
//            xl : "2rem",
//
//            // largest font line height
//            xxl : "3rem",
//
//        },
//
//        // font letter spacings
//        letterSpacing : {
//
//            // smallest font letter spacing
//            xxs : "0.5rem",
//
//            // smaller font letter spacing
//            xs : "0.75rem",
//
//            // small font letter spacing
//            sm : "1rem",
//
//            // medium font letter spacing
//            md : "1.25rem",
//
//            // large font letter spacing
//            lg : "1.5rem",
//
//            // larger font letter spacing
//            xl : "2rem",
//
//            // largest font letter spacing
//            xxl : "3rem",
//
//        },
//
//    };
//
//    // spacing
//    const spacing = {
//
//        // margin
//        margin : {
//
//            // top margin
//            top : "1rem",
//
//            // right margin
//            right : "1rem",
//
//            // bottom margin
//            bottom : "1rem",
//
//            // left margin
//            left : "1rem",
//
//        },
//
//        // padding
//        padding : {
//            top : "1rem", right : "1rem", bottom : "1rem", left : "1rem",
//        },
//
//        // height
//        height : {
//            xxs : "1rem", xs : "2rem", sm : "3rem", md : "4rem", lg : "5rem", xl : "6rem", xxl : "7rem",
//        },
//
//        // width
//        width : {
//            xxs : "1rem", xs : "2rem", sm : "3rem", md : "4rem", lg : "5rem", xl : "6rem", xxl : "7rem",
//        },
//
//    };
//
//    // border
//    const border = {
//
//        // border-width
//        width : {
//            xxs : "1px", xs : "2px", sm : "3px", md : "4px", lg : "5px", xl : "6px", xxl : "7px",
//        },
//
//        // border-radius
//        radius : {
//            xxs : "1px", xs : "2px", sm : "3px", md : "4px", lg : "5px", xl : "6px", xxl : "7px",
//        },
//
//        // border-color
//        color : {
//            xxs : "1px", xs : "2px", sm : "3px", md : "4px", lg : "5px", xl : "6px", xxl : "7px",
//        },
//
//    };
//
//    // transition
//    const transition = {
//
//        // transition-duration
//        duration : {
//            xxs : "0.1s", xs : "0.2s", sm : "0.3s", md : "0.4s", lg : "0.5s", xl : "0.6s", xxl : "0.7s",
//        },
//
//        // transition-timing-function
//        timing : {
//            xxs : "ease-in-out",
//            xs  : "ease-in-out",
//            sm  : "ease-in-out",
//            md  : "ease-in-out",
//            lg  : "ease-in-out",
//            xl  : "ease-in-out",
//            xxl : "ease-in-out",
//        },
//
//    };
//
//
//    return ( <div>style variables</div>
//
//    );
//
//}


