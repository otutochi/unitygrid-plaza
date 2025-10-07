import { pool } from "./database.js"
import "./dotenv.js"
import eventsData from "../data/events.js"
import locationsData from "../data/locations.js"

const createLocationsTable = async () => {
    const query = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            address TEXT NOT NULL,
            image_link TEXT NOT NULL
        )
    `

    try {
        const result = await pool.query(query)
        console.log('Locations table created successfully')
    } catch (error) {
        console.error('Error creating locations table', error)
    }
}

const seedLocationsTable = async () => {
    await createLocationsTable()

    for (const location of locationsData) {
        const query = 'INSERT INTO locations (id, name, address, image_link) VALUES ($1, $2, $3, $4)'
        const values = [location.id, location.name, location.address, location.image_link]

        try {
            const result = await pool.query(query, values)
            console.log(`${location.name} added succesfully`) 
        } catch (error) {
            console.error(`Error adding ${location.name}`, error)
        }
    }
}

const createEventsTable = async () => {
    const query = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            location_id INTEGER NOT NULL,
            date_time INTEGER NOT NULL,
            image_link TEXT NOT NULL,
            FOREIGN KEY (location_id) REFERENCES locations(id)
        )
    `

    try {
        const result = await pool.query(query)
        console.log('Events table created succesfully')
    } catch (error) {
        console.error('Error creating events table', error)
    }
} 

const seedEventsTable = async () => {
    await createEventsTable()

    for (const event of eventsData) {
        const query = 'INSERT INTO events (id, name, location_id, date_time, image_link) VALUES ($1, $2, $3, $4, $5)'
        const values = [event.id, event.name, event.location_id, event.date_time, event.image_link]

        try {
            const result = await pool.query(query, values)
            console.log(`${event.name} added successfully`)
        } catch (error) {
            console.error(`Error adding ${event.name}`, error)
        }
    }
}

await seedLocationsTable()
await seedEventsTable()
