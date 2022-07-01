import { newReviewEntry } from './types'
import { Score } from './enums'

const parseReview = (reviewFromRequest: any): string => {
  if (!isString(reviewFromRequest)) {
    throw new Error('Incorrect or missing review')
  }
  return reviewFromRequest
}
const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}
const parseScore = (scoreFrommRequest: any): Score => {
  if (!isString(scoreFrommRequest) || !isScore(scoreFrommRequest)) {
    throw new Error('Incorrect or missing score')
  }
  return scoreFrommRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}
const isScore = (score: any): boolean => {
  return Object.values(Score).includes(score)
}

const toNewReviewEntry = (object: any): newReviewEntry => {
  const newEntry: newReviewEntry = {
    review: parseReview(object.review),
    date: parseDate(object.date),
    score: parseScore(object.score)

  }
  return newEntry
}

export default toNewReviewEntry
