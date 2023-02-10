/**
 * color class constructs a color object
 *
 *  - color object will contain the following properties
 *    - name
 *    - hex
 *    - css
 *
 *
 *
 */

class Colors {
    
    
    /**
     * constructor method is a special method that is called when an instance of
     * the class is created - it is used to initialize the instance with the provided
     * parameters
     */
    constructor( name, hex, css ) {
        this.name = name;
        this.hex = hex;
    }
    
    /**
     * the following methods are used to return the values of the properties
     */
    getName() {
        return this.name;
    }
    
    getHex() {
        return this.hex;
    }
    
    
    
    /**
     * the following methods are used to set the values of the properties
     */
    setName( name ) {
        this.name = name;
    }
    
    setHex( hex ) {
        this.hex = hex;
    }
    
    
    /**
     * the following methods are used to calculate the values of the properties
     */
    calcHex() {
        // calculate the hex value
        
    }
    
    css( name ) {
        // calculate the css value
        return `var(--${ name })`;
    }
    
    /**
     * the following methods are used to output the values of the properties
     *
     * *NOTE* - output methods are usually used for debugging purposes
     * *        and should be deactivated before publishing
     */
//    outputName() {
//        console.log( this.name );
//    }
//
//    outputHex() {
//        console.log( this.hex );
//    }
//
//    outputCss() {
//        console.log( this.css( this.name ) );
//    }
}



// testing methods
//const colorPrimary = new Colors( "red", "#ff0000" );
//colorPrimary.outputName();
//colorPrimary.outputHex();
//colorPrimary.outputCss();
