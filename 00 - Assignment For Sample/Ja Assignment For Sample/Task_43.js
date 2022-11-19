const magicians=["magician1","magician2","magician3"];
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician    )
    })
}
//show original array
show_magicians(magicians)


function make_great(magicians) {
    let arr = []
    magicians.map((magician, i) => {
        arr.push(`The great ${magician}`)
    })
    return arr

}

const modifiedMagicians = make_great(magicians)


show_magicians(modifiedMagicians)
show_magicians(magicians)


