import express from 'express'
import 'dotenv/config';

const app = express()
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

router.get('/user/:id', (req, res, next) => {
  if (req.params.id === '0') next('route')
  else next()
}, (req, res, next) => {
  res.send('regular')
})

router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
//   res.render('special')
res.send('special');
})

app.use('/', router)

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on Port: ${process.env.PORT}`);
})