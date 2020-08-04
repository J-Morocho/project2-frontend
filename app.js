

const deployedURL = null
const URL = deployedURL ? deployedURL : "http://localhost:3000"

const getAllEvents = async () => {
    const response = await fetch(`${URL}/events/getAll`)
    const d = await response.json()
    
    d.forEach( obj => createEventCard(obj))
}

let o1 = getAllEvents()

// Callback function for "Add Event" button. Takes in the button id
const addEventToUser = async (event) => {
    await $('.btn btn-primary save').on('click',console.log('hello'))
    
}


// From an obj populate the event card
const createEventCard = async(obj) => {
    const $h3EventName = $('<h3>').attr('class', "event_name").text(obj.event_name)
    const $pEventBorough = $('<p>').attr('class', "event_borough").text(obj.event_borough)
    const $pEventLocation = $('<p>').attr('class', "event_location").text(obj.event_location)
    const $pStartDateTime = $('<p>').attr('class', "start_date_time").text(obj.start_date_time)
    const $pEndDateTime = $('<p>').attr('class', "end_date_time").text(obj.$pEndDateTime)
    const $divEvent = $('<div>').attr('class', "event")
    const $divEventCard = $('<div>').attr('class', 'event-card')
    const $addEventButton = $('<input type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" value="Add Event">').attr('id', obj._id)
    $addEventButton.on('click', addEventToUser)
    $divEvent.append([$h3EventName, $pEventBorough, 
        $pEventLocation, $pStartDateTime, 
        $pEndDateTime, $addEventButton])
    $divEventCard.append([$divEvent])
    $('#flex-container').append($divEventCard)
}

const populateSelect = async (field, idAttribute) => {
    const data = await fetch(`${URL}/events/distinct/${field}`)
    const response = await data.json()

    response.forEach( e => {
        $(`#${idAttribute}`).append($(`<option>`).attr('value', e).text(e))
    })
}



populateSelect("event_borough", "locations")
populateSelect("event_type", "eventTypes")

// this works
$('input[id="w"]').click(async() => { await console.log('hello')})