/**
 * @file CssVariables.jsx
 * @author }}}
 *
 */
import createNestedObjectPath from "../utilities/createNestedObjectPath.jsx";
import { cssPropertyNames } from "../data/cssVariables.jsx";




function createParsedCssVariableArrayList( cssPropertyNames ) {
    
    return ( cssVariableStringList.map( ( variable ) => {
        if( !variable.includes( "-" ) ) {
            return variable;
        } else {
            return variable.split( "-" );
            
        }
    } ) );
}

//console.log( createParsedCssVariableArrayList( cssPropertyNames ) );

function createCssVariableObject( cssNameArray) {

    return createNestedObjectPath( cssNameArray );

}

console.log( createCssVariableObject( createParsedCssVariableArrayList( cssPropertyNames ) ) );
