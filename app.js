

const deployedURL = null
const URL = deployedURL ? deployedURL : "http://localhost:3000"




const getAllEvents = async () => {
    const response = await fetch(`${URL}/events/getAll`)
    const d = await response.json()
    
    d.forEach( obj => createEventCard(obj))
}

let o1 = getAllEvents()

// From an obj populate the event card
const createEventCard = async(obj) => {
    const $h3EventName = $('<h3>').attr('class', "event_name").text(obj.event_name)
    const $pEventBorough = $('<p>').attr('class', "event_borough").text(obj.event_borough)
    const $pEventLocation = $('<p>').attr('class', "event_location").text(obj.event_location)
    const $pStartDateTime = $('<p>').attr('class', "start_date_time").text(obj.start_date_time)
    const $pEndDateTime = $('<p>').attr('class', "end_date_time").text(obj.$pEndDateTime)
    const $divEvent = $('<div>').attr('class', "event")
    const $divEventCard = $('<div>').attr('class', 'event-card')
    $divEvent.append([$h3EventName, $pEventBorough, $pEventLocation, $pStartDateTime, $pEndDateTime])
    $divEventCard.append([$divEvent])
    $('#flex-container').append($divEventCard)
}



const populateDatalist = async (field, id) => {
    const data = await fetch(`${URL}/events/distinct/${field}`)
    const response = await data.json()

    response.forEach( e => {
        $(`#${id}`).append($(`<option>`).attr('value', e))
    })
    console.log(response)
}



populateDatalist("event_borough", "locations")
populateDatalist("event_type", "eventTypes")