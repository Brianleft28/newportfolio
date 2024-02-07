import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const router = express.Router()

// Resto del código...

// server used to send send emails
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(5000, () => console.log('Server Running'))
console.log(process.env.EMAIL_USER)
console.log(process.env.EMAIL_PASS)

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    host: 'smtp.gmail.com',
    port: 587,
    user: 'bbdevcontact@gmail.com',
    pass: 'pvki hoit tdou trbn'
  }
})

contactEmail.verify((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready to Send')
  }
})

router.post('/contact', (req, res) => {
  const name = req.body.firstName + req.body.lastName
  const email = req.body.email
  const message = req.body.message
  const phone = req.body.phone
  const mail = {
    from: name,
    to: 'contactobrianleft@gmail.com',
    subject: 'Contact Form - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`
  }

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error)
    } else {
      res.json({ code: 200, status: 'Message Sent' })
    }
  })
})
