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
        class: 'event-card card shadow p-3 mb-3 bg-white rounded',
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
};

function clearRewardsContainer() {
    $('#flex-container').html("");
  }


const getUserEvents = async() => {
    const user = $('#name-input-field').val()
    const response = await fetch(`${URL}/users/user/${user}/eventsAttending`)
    const data = await response.json()
    
    clearRewardsContainer()

    data.eventsAttending.forEach( (obj) => createEventCard(obj))
    
};

// Removes event from user list
$('#removefromdb').on('click', async(event) => {

    // get value from input box
    const user = await $('#name-input-field').val()

    // Send "user" to removeUser route
    // const response = await fetch(`${URL}/users/removeUser/${user}`, {
    //     method: "delete",
    //     headers: {"Content-Type": "application/json"}
    // });
    console.log(user)

    // After 'click' event detach event-card from the flex-container 
    //$(`#${$targetEventId}`).detach()
    $("#exampleModalCenter").modal('hide') 
});



$('#queryuser').on('click', getUserEvents);

const removeUser = async() => {
    if ($('#name-input-field').val() !== ""){
        
        const $text = $('#name-input-field')
        const user = $('#name-input-field').val()
        
        const response = await fetch(`${URL}/users/removeUser/${user}`, {
        method: "delete",
        headers: {"Content-Type": "application/json"}
        });
        $text.value = ''
    } else {
        alert ('not allowed!')
    }
    
    
};

$('#removeuser').on('click', async() => { console.log('click')});