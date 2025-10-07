import { pool } from "../config/database.js"

const getEvents = async (req, res) => {
    const { location_id } = req.query

    try {
        if (location_id !== undefined) {
            const id = Number(location_id)
            if (Number.isNaN(id)) {
                return res.status(400).json({ error: 'location_id must be an integer' })
            }

            const query = 'SELECT id, name, location_id, date_time, image_link FROM events WHERE location_id = $1 ORDER BY id ASC'
            const values = [id]

            const result = await pool.query(query, values)
            return res.status(200).json(result.rows)
        } else {
            const query = 'SELECT id, name, location_id, date_time, image_link FROM events ORDER BY id ASC'
    
            const result = await pool.query(query)
            res.status(200).json(result.rows)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default { getEvents }