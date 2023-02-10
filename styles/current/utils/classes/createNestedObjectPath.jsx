/**
 * createNestedObjectPath is a utility function that creates a nested object path
 * - it will receive an array of strings and will return an object named after the first element in the array
 * - the object will have nested objects named after the remaining elements in the array in the order they are received
 * - the last nested object will be an empty object
 *
 */
function createNestedObjectPath( path ) {
    // create a new object this will be the object that will be returned
    let obj = {};
    
    /**
     * iterate over the array of strings and create nested objects for each string
     */
    // reduce the array of strings to a single object
    path.reduce( ( acc, current, index ) => {
        // if the index is the last element in the array then set the value to an empty object
        return acc[ current ] = index === path.length - 1 ? {} : acc[ current ] || {};
    }, obj );
    
    return obj;
    
}

export default createNestedObjectPath;

/**
 * # methods below are for testing
 *
 */
// const path = [ "primary", "color", "dark" ];
// const path2 = [ "primary", "color", "light" ];
// const path3 = [ "primary", "color", "medium" ];
//
// const paths = [ path, path2, path3 ];
//
// for (const path of paths) {
//     console.log( createNestedObjectPath( path ) );
// }


