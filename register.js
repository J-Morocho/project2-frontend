
const deployedURL = "https://project2-backend-hosted.herokuapp.com"
const URL = deployedURL ? deployedURL : "http://localhost:3000"


$('#register-button').on('click', async () => {
    // Check if name input field is not blank
    if ( $('#registerNameInput').val() !== "") {
        const name = $('#registerNameInput').val()
        
        const newUser = {
            name: name,
            eventsAttending: []
        }

        const response = await fetch(`${URL}/users/create`, {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        } )
        console.log(`registration successfull!`)
    } else {
        console.error('NAME INPUT ERROR')
    }
})