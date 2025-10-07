import { pool } from "../config/database.js"

const getLocations = async (req, res) => {
    const query = 'SELECT id, name, address, image_link FROM locations ORDER BY id ASC'

    try {
        const result = await pool.query(query)
        res.status(200).json(result.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getLocationById = async (req, res) => {
    const id = parseInt(req.params.id, 10)
    if (Number.isNaN(id)) {
        return res.status(400).json({ error: 'Invalid or missing id parameter' })
    }

    const query = 'SELECT id, name, address, image_link FROM locations WHERE id = $1'

    try {
        const result = await pool.query(query, [id])
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Location not found' })
        }
        res.status(200).json(result.rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default { getLocations, getLocationById }