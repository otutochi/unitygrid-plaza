const getAllEvents = async () => {
    try {
        const result = await fetch('/api/events')
        const data = await result.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Failed to fetch events', error)
    }
}

const getEventsByLocation = async (location_id) => {
    try {
        const result = await fetch(`/api/events?location_id=${location_id}`)
        const data = await result.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Failed to fetch events for this location', error)
    }
}

const getEventById = async (event_id) => {
    try {
        const result = await fetch(`/api/events?event_id=${event_id}`)
        const data = await result.json()
        console.log(data)
        return data
    } catch (error) {
        console.error(`Failed to fetch event with id ${event_id}`, error)
    }
}

export default { getAllEvents, getEventsByLocation, getEventById }