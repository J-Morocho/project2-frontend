const deployedURL = null//"https://project2-backend-hosted.herokuapp.com"
const URL = deployedURL ? deployedURL : "http://localhost:3000"

// From an obj populate the event card
const createEventCard = async(obj) => {
    const $h3EventName = $('<h3>').attr('class', "event_name card-title").text(obj.event_name)
    const $pEventBorough = $('<p>').attr('class', "event_borough").text(obj.event_borough)
    const $pEventLocation = $('<p>').attr('class', "event_location").text(obj.event_location)
    const $pStartDateTime = $('<p>').attr('class', "start_date_time").text(obj.start_date_time)
    const $pEndDateTime = $('<p>').attr('class', "end_date_time").text(obj.$pEndDateTime)
    const $divEvent = $('<div>').attr('class', "event card-body")
    const $divEventCard = $('<div>').attr({
        class: 'event-card card',
        id: obj._id        
    })
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
}

const getUserEvents = async() => {
    const user = $('#name-input-field').val()
    const response = await fetch(`${URL}/users/user/${user}/eventsAttending`)
    const data = await response.json()
    data.eventsAttending.forEach( (obj) => createEventCard(obj))
}

// Removes event from user list
$('#w').on('click', async(event) => {

    const user = await $('#name-input-field').val()
    // Find the "selected" event and the user's name
    let $targetEventId = $('.selected').attr('id')
    
    // Send attributes to backend routes
    const data = await fetch(`${URL}/users/user/${user}/removeEvent/${$targetEventId}`, {
        method: "delete",
        headers: {"Content-Type": "application/json"}
        })
    // After 'click' event detach event-card from the flex-container 
    $(`#${$targetEventId}`).toggleClass('selected')
    $(`#${$targetEventId}`).detach()
    $("#exampleModalCenter").modal('hide') 
})



$('#queryuser').on('click', getUserEvents)

