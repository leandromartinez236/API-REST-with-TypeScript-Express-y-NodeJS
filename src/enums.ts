export enum Score {
  Cool = 'cool',
  Good = 'good',
  Bad = 'bad',
  Lousy = 'lousy'
}

export interface ReviewEntry {
  id: number
  date: string
  score: Score
  review: string
}
