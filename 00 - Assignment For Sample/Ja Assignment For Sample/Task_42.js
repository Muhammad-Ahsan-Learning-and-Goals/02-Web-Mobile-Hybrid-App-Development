const magicians=["magician1","magician2","magician3"];

function make_great(magicians) {
    magicians.forEach((magician, i) => {
        magicians[i] = magician + " The great ";
    })

    return magicians
}

console.log(make_great(magicians));