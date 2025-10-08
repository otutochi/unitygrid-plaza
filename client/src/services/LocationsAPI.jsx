const getAllLocations = async () => {
    try {
        const result = await fetch('/api/locations')
        const data = await result.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Failed to fetch locations', error)
    }
}

const getLocationById = async (location_id) => {
    try {
        const result = await fetch(`/api/locations/${location_id}`)
        const data = await result.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Failed to fetch location', error)
    }
}

export default { getAllLocations, getLocationById }

