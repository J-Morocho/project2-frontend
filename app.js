const deployedURL = null
const URL = deployedURL ? deployedURL : "http://localhost:3000"




// From an obj populate the event card
const createEventCard = async(obj) => {
    const $h3EventName = $('<h3>').attr('class', "event_name").text("test")
    const $pEventBorough = $('<p>').att('class', "event_borough").text("test")
    const $pEventLocation = $('<p>').attr('class', "event_location").text("test")
    const $pStartDateTime = $('<p>').attr('class', "start_date_time").text("test")
    const $pEndDateTime = $('<p>').attr('class', "end_date_time").text("test")
    const $divEvent = $('<div>').attr('class', "event")
    $divEvent.append([$h3EventName, $pEventBorough, $pEventLocation, $pStartDateTime, $pEndDateTime])
    $divEventCard.append([$divEvent])
    $('#flex-container').append($divEventCard)
}

const populateOptions = async (field, id) => {
    const data = await fetch(`${URL}/events/distinct/${field}`)
    const response = await data.json()
    console.log(response)
}


const getAllEvents = async () => {
    const response = await fetch(`${URL}/events/getAll`)
    const data = await response.json()
    console.log(data)
}

populateOptions("event_borough")
// populateOptions("event_borough")