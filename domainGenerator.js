
function generador() {
var palabras = {
     pronouns: [ "The", "Your", "Our", "Mine", "They"],
     adjective: [ "Funny", "Glamorous", "Ignorant", "Illegal", "Large", "Obese", "Hot"],
     nouns: [ "Advice", "Website", "Racoon", "Lion", "Band", "Newspapper", "Console", "Call-center", "Assistant", "Bike"],
}
var ejemplos = []
    
    for(p = 0; p < palabras.pronouns.length; p++){
        for(a = 0; a < palabras.adjective.length; a++){
            for(n = 0; n < palabras.nouns.length; n++){
               ejemplos.push(palabras.pronouns[p] + palabras.adjective[a] + palabras.nouns[n] + ".com")
             }
        }
    }
    return(ejemplos);
}

console.log(generador());