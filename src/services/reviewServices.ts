import { NoSensitiveInfoReviewEntry, newReviewEntry } from '../types'
import { ReviewEntry } from '../enums'
import reviewData from './reviews.json'

const reviews: ReviewEntry[] = reviewData as ReviewEntry[]

export const getReviews = (): ReviewEntry[] => reviews

export const findById = (id: number): NoSensitiveInfoReviewEntry | undefined => {
  const data = reviews.find(rev => rev.id === id)
  if (data != null) {
    const { review, ...restOfReview } = data
    return restOfReview
  }
  return undefined
}

export const getReviewsWithoutsensitiveInfo = (): NoSensitiveInfoReviewEntry[] => {
  return reviews.map(({ id, date, score }) => {
    return {
      id,
      date,
      score
    }
  })
}

export const createReview = (newReviewEntry: newReviewEntry): ReviewEntry => {
  const newReview = {
    id: Math.max(...reviews.map(rev => rev.id)) + 1,
    ...newReviewEntry
  }
  reviews.push(newReview)
  return newReview
}
