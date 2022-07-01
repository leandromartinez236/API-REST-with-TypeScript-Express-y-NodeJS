import express from 'express'
import reviewRoutes from './routes/review'
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (_req, res) => {
  console.log('Hello')
  res.send('Hello World!')
})

app.use('/api/reviews', reviewRoutes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
