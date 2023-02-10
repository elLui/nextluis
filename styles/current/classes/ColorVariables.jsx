/**
 * - this class is to create color variables for the css
 *  - this class will receive a string as a parameter
 *  - this string will be validated to ensure it is a valid css string for a variable name
 *  - this class will then create an object with the nested objects
 *  - each nested object will be named after a string parameter || ie "color"===xxx.color || "font"===xxx.font  || "background"===primary.background || "text"===secondary.text
 *
 *
 *
 *
 */
class ColorVariables {
    
    /**
     * will receive a string that must be on this list of valid css variables
     *  - primary, secondary, tertiary, background, text, font, color, border,  padding, etc
     *      * object creation properties will be dependent on the string
     *      * if the string is "primary" then the object will have the following properties
     *          - the object will have nested objects for each of the possible css variables
     *          - color, font, background, text, border, padding, etc
     *              * each nested object will have the following properties
     *                  - the object will have nested objects for each of the possible css variables
     *                      * primary.color.dark || primary.button.active || primary.button.border.active
 *                      - all these combinations will be created by nested objects
     * @param name
     */
    constructor(name) {
        this.name = name;
        this.colors = {};
    }
    
    
    /**
     * this method will create the nested objects
     */
    create() {
    
    }
    
    


}
