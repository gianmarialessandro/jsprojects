// Pete likes to bake some cakes. He has some recipes and ingredients. 
// Unfortunately he is not good in maths. Can you help him to find out, 
// how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) 
// and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 
// For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.

// example
// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

var ricetta = {flour: 500, sugar: 200, eggs: 1}
// var disponibile = {flour: 1200, sugar: 1200, eggs: 1, milk: 200}
var disponibile = { }

cakes(ricetta, disponibile)
function cakes(recipe, available) {
    let doable = true
    // let portions = 0
    let portionsArr = []
    for (const ing in recipe) {
        if (doable == false) break
        for (const ingrediente in available) {
            if (ing == ingrediente) {
                doable = true
                let por = Math.floor(available[ingrediente] / recipe[ing])
                portionsArr.push(por)
                // if (por < portions && portions != 0 ) { portions = por }
                break
            } else {
                doable = false
            }
        }
    }
    if (doable == false) {
        console.log(0)
        return 0
    } else {
        let min = Math.min(...portionsArr)
        console.log(min, portionsArr)
        if( min == Infinity) return 0
        else return min
    }
}

// OTHER SOLUTIONS 

//
function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
  }

//
const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )

//
function cakes(recipe, initial){
    return Math.floor(Object.keys(recipe).reduce(function(min, key){
       return Math.min(initial[key] / recipe[key] || 0, min);
    }, Infinity));
 }

 //
 function cakes(recipe, initial){
    return Math.floor(Object.keys(recipe).reduce(function(min, key){
       return Math.min(initial[key] / recipe[key] || 0, min);
    }, Infinity));
 }