
let current_users = ["admin", "user1", "user2", "user3", "user4"]
let new_users = ["user6", "user2", "user8", "user9"]

new_users.forEach((user) => {
    current_users.includes(user.toLowerCase()) ?
        console.log("the person will need to enter a new username"):
        console.log("the username is available")
})