const arrLetters = ["a", "a", "a", "b", "c", "d","a", "b", "g", "b"];

var arrNoDuplicate = [];
for (let i = 0; i < arrLetters.length; i++) {
    const e = arrLetters[i];
    let counter = false;
    arrNoDuplicate.forEach((l) => {
        if(l == e) counter = true;
    })
    if(!counter) arrNoDuplicate.push(e)

}
console.log(arrNoDuplicate)
