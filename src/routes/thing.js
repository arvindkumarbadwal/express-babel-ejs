import express from 'express'
let router = express.Router()

router.get('/:name', async (req, res) => {
    try {
        const thing = await Promise.resolve({ hello: req.params.name }) // async/await!
        return res.json({ ...thing, message: "Have a good day" }) // object-rest-spread!
    } catch (e) {
        return res.json({ error: e.message })
    }
})

export default router