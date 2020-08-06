const deployedURL = "https://project2-backend-hosted.herokuapp.com"
const URL = deployedURL ? deployedURL : "http://localhost:3000"

// From an obj populate the event card
const createEventCard = async(obj) => {
    // Create card elements
    const $h3EventName = $('<h3>').attr('class', "event_name card-title").text(obj.event_name)
    const $pEventBorough = $('<p>').attr('class', "event_borough").text(obj.event_borough)
    const $pEventLocation = $('<p>').attr('class', "event_location").text(obj.event_location)
    const $pStartDateTime = $('<p>').attr('class', "start_date_time").text("Starts: " + obj.start_date_time.slice(11,16))
    const $pEndDateTime = $('<p>').attr('class', "end_date_time").text("Ends: " + obj.end_date_time.slice(11,16))
    const $divEvent = $('<div>').attr('class', "event card-body")
    const $divEventCard = $('<div>').attr({
        class: 'event-card card shadow p-3 mb-3 bg-white rounded',
        id: obj._id        
    })
    // Add event id to remove event button
    const $removeEventButton = $('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">').attr('id', obj._id).text('Remove Event')
    // Toggle "selected" class to Add Event button
    $removeEventButton.on('click', async (event) => {
        let $elementId = await event.target.id
        await $(`#${$elementId}`).toggleClass('selected')
    })

    $divEvent.append([$h3EventName, $pEventBorough, 
        $pEventLocation, $pStartDateTime, 
        $pEndDateTime, $removeEventButton])
    $divEventCard.append([$divEvent])
    $(`#flex-container`).append($divEventCard)
};

function clearRewardsContainer() {
    $('#flex-container').html("");
};

// Check wether there is a user 
const userExists = async(name) => {
    const response = await fetch(`${URL}/users/name/${name}`)
    const data = await response.json()
    console.log(data)
};

console.log('user exists', userExists("Jendri Morocho"))

const getUserEvents = async() => {
    const user = $('#name-input-field').val()
    const response = await fetch(`${URL}/users/user/${user}/eventsAttending`)
    const data = await response.json()
    
    clearRewardsContainer()

    data.eventsAttending.forEach( (obj) => createEventCard(obj))
    
};

// Removes event from user list
$('#removefromdb').on('click', async(event) => {
    if ($('#name-input-field').val() !== "") {
    // get value from input box
        const user = await $('#name-input-field').val()

        // Send "user" to removeUser route
        const response = await fetch(`${URL}/users/removeUser/${user}`, {
            method: "delete",
            headers: {"Content-Type": "application/json"}
        });
        // After 'click' event detach event-card from the flex-container 
        //$(`#${$targetEventId}`).detach()
        $("#removeUserModal").modal('hide')
    } else {
        $("#removeUserModal").modal('hide')
        alert ("Name input field must not be blank")
    } 
});


$('#queryuser').on('click', getUserEvents);