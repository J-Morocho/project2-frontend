const deployedURL = "https://project2-backend-hosted.herokuapp.com"
const URL = deployedURL ? deployedURL : "http://localhost:3000"

const getAllEvents = async () => {
    const response = await fetch(`${URL}/events/getAll`)
    const d = await response.json()

    d.forEach( obj => createEventCard(obj))
};

getAllEvents();

// Callback function for "Add Event" button. Takes in the button id
const addEventToUser = async (event) => {
    await $('.btn btn-primary save').on('click',console.log('hello'))
    
};

const getUserEvents = async() => {
    const user = $('#name-input-field').val()
    const response = await fetch(`${URL}/users/user/${user}/eventsAttending`)
    const data = await response.json()

};

$('#queryuser').on('click', getUserEvents);

// From an obj populate the event card
const createEventCard = async(obj) => {
    const $h3EventName = $('<h3>').attr('class', "event_name card-title").text(obj.event_name)
    const $pEventBorough = $('<p>').attr('class', "event_borough").text(obj.event_borough)
    const $pEventLocation = $('<p>').attr('class', "event_location").text(obj.event_location)
    const $pStartDateTime = $('<p>').attr('class', "start_date_time").text("Starts: "+ obj.start_date_time.slice(11,16))
    const $pEndDateTime = $('<p>').attr('class', "end_date_time").text("Ends: "+ obj.end_date_time.slice(11,16))
    const $divEvent = $('<div>').attr('class', "event card-body")
    const $divEventCard = $('<div>').attr({
        class: 'event-card card shadow p-3 mb-3 bg-white rounded',
        id: obj._id        
    });
    const $addEventButton = $('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">').attr('id', obj._id).text('Add Event')
    
    // Toggle "selected" class to Add Event button
    $addEventButton.on('click', async (event) => {
        let $elementId = await event.target.id
        await $(`#${$elementId}`).toggleClass('selected')
    });

    $divEvent.append([$h3EventName, $pEventBorough, $pEventLocation, $pStartDateTime, $pEndDateTime, $addEventButton]);

    $divEventCard.append([$divEvent])
    $(`#flex-container`).append($divEventCard)
};

const populateSelect = async (field, idAttribute) => {
    const data = await fetch(`${URL}/events/distinct/${field}`)
    const response = await data.json()

    response.forEach( e => {
        $(`#${idAttribute}`).append($(`<option>`).attr('value', e).text(e))
    });
};


populateSelect("event_borough", "locations");
populateSelect("event_type", "eventTypes");

const displayQueriedEvents = async() => {
    const $eventTypeSelect = $('#eventTypes').val()
    const $locationSelect = $('#locations').val()
    
    const data = await fetch(`${URL}/events/query/${$locationSelect}/${$eventTypeSelect}`)
    const response = await data.json()
    
    if (response.length !== 0) {
        // clear flex container that holds events
        $(`#flex-container`).empty()
        response.forEach( (obj) => {createEventCard(obj)})
    } else {
        $(`#flex-container`).empty()
    }
};

const $findEventsButton = $('#find-events-button')
$findEventsButton.on('click', displayQueriedEvents)

$('#addToList').on('click', async(event) => {

    // Ensure name field is not empty
    if ( $('#userNameField').val() !== "") {

        // Find the "selected" event and the user's name
        let $targetEventId = $('.selected').attr('id')
        const name = $(`#userNameField`).val()
        
        // Send attributes to backend routes
        const data = await fetch(`${URL}/users/user/${name}/addEvent/${$targetEventId}`, {
            method: "put",
            headers: {"Content-Type": "application/json"}
        });

        // After 'click' event detach event-card from the flex-container 
        $(`#${$targetEventId}`).toggleClass('selected')
        $(`#${$targetEventId}`).detach()
        $("#userNameField").val("")
        $("#exampleModalCenter").modal('hide') 
        
    } else {
        alert ("Name field must not be blank")
        $("#exampleModalCenter").modal('hide')
    };
    
});

