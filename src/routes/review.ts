import express from 'express'
import * as reviewServices from '../services/reviewServices'
import toNewReviewEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(reviewServices.getReviewsWithoutsensitiveInfo())
})

router.get('/:id', (req, res) => {
  const review = reviewServices.findById(+req.params.id)
  return (review !== null)
    ? res.send(review)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newReviewEntry = toNewReviewEntry(req.body)
    const newReview = reviewServices.createReview(newReviewEntry)
    res.json(newReview)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
