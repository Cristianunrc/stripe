import Stripe from 'stripe'
import dotenv from 'dotenv'

dotenv.config()
const stripe = new Stripe(process.env.TEST_KEY)

export const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    product_data: {
                        name: 'Notebook',
                        description: 'Exo',
                    },
                    currency: 'usd',
                    unit_amount: 5000, // 5000 cents equal to 50 dolars
                },
                quantity: 1
            },
            {
                price_data: {
                    product_data: {
                        name: 'Motorbike',
                        description: 'Honda CBR 600',
                    },
                    currency: 'usd',
                    unit_amount: 100000 // 100000 cents equal to 1000 dolars
                },
                quantity: 1
            }
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel'
    })
    return res.json(session)
}