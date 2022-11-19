function make_album(artistName, albumTitle, noOfTracks) {
    return object={
        artistName,
        albumTitle,
        noOfTracks
    }
}

console.log(make_album("artist1", "album1"))
console.log(make_album("artist2", "album2",5))
console.log(make_album("artist3", "album3"))