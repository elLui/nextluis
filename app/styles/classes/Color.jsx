/**
 * color class constructs a color object
 *
 *  - color object will contain the following properties
 *    - name
 *    - hex
 *    - css
 *
 *
 *-
 */

class Colors {
    
    
    /**
     * Constructs a color object with the given name and hexadecimal value.
     * @param {string} name - The name of the color.
     * @param {string} [hex='#000000'] - The hexadecimal value of the color.
     */
    constructor( name, hex = "#000000" ) {
        this.name = name;
        this.hex = hex;
    }
    
    /**
     * the following methods return the values of the properties
     * @returns {string} The name of the color
     * @returns {string} The hexadecimal value of the color
     * @returns {string} The css variable name of the color
     */
    getName() {
        return this.name;
    }
    
    getHex() {
        return this.hex;
    }
    
    getCss() {
        return `var(--${ name })`;
    }
    
    
    
    /**
     * the following methods are used to set the values of the properties
     * @param {string} name - name of the color
     * @param {string} hex - hexadecimal value of the color
     */
    setName( name ) {
        this.name = name;
    }
    
    setHex( hex ) {
        this.hex = hex;
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
