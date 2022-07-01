import { ReviewEntry } from './enums'

export type NoSensitiveInfoReviewEntry = Omit<ReviewEntry, 'review'>
export type newReviewEntry = Omit<ReviewEntry, 'id'>
