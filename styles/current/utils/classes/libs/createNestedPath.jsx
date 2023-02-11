/**
 * @name createNestedPath
 * @description creates an array of strings that can be used to create a nested object path
 * @param {string} path - a string that contains a path to a nested object
 * @returns {array} an array of strings that can be used to create a nested object path
 * @example
 * const path = "primary.color.dark";
 * const pathArray = createNestedPath( path );
 * // pathArray = [ "primary", "color", "dark" ];
 */

function createNestedPath() {



}

const prefix = [
    /// main color categories
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    
    // css variables
    "text",
    "background",
    "border",
    "shadow",
    "link",
    "color",
    "font",
    "line",
    
    // misc color categories
    "success",
    "warning",
    "error",
    "info",
    "disabled",
    "highlight",
    
    
]
