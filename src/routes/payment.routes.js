import { Router } from 'express'
import { createSession } from '../controllers/payment.controller.js'

const router = Router()

router.post('/session', createSession)

router.get('/success', (req, res) => {
    res.send('<p>Success payment</p>')
})

router.get('/cancel', (req, res) => {
    res.send('<p>Cancel</p>')
})

export default router