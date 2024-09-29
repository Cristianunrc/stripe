import { Router } from 'express'

const router = Router()

router.get('/session', (req, res) => {
    res.send('<p>checkout session</p>')
})

router.get('/success', (req, res) => {
    res.send('<p>Success payment</p>')
})

router.get('/cancel', (req, res) => {
    res.send('<p>Cancel</p>')
})

export default router