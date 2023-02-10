const colorCats = [ "primary", "secondary", "tertiary" ];


const targets = [ "color", "font", "background", "text" ];


for (const color of colorCats) {
    
    for (const target of targets) {

        const varName  = `${color}-${target}`;
        const varValue = `var(--${varName})`;
        
        
        
    }
    
}


//for (let i = 0; i < colorCats.length; i++) {
//
//    for (let j = 0; j < target.length; j++) {
//
//        const color = colorCats[i];
//        const target = target[j];
//        const varName = `${color}-${target}`;
//        const varValue = `var(--${varName})`;
//
//        console.log(varName, varValue);
//    }
//
//}




