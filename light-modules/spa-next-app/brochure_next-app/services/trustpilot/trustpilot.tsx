import type { TrustpilotData } from './trustpilot.types'

type AverageRatingJSONResponse = {
  score: {
    trustScore: number
  }
  numberOfReviews: {
    total: number
  }
}

type ReviewsJSONResponse = {
  reviews: Array<{
    id: string
    stars: number
    text: string
    createdAt: string
    isVerified: boolean
  }>
}

export const fetchTrustpilotData = async (locale: string) => {
  try {
    const hedvigBusinessUnitId = '4d80cd6700006400050ef95e'
    if (!hedvigBusinessUnitId) {
     
      return null
    }

    const trustpilotApiKey = 'waKrJRkUeYRXLJdVBAeHukkk2s0d8srx'
    if (!trustpilotApiKey) {
      return null
    }

    const [averageRating, reviews] = await Promise.all([
      fetchAverageRating(hedvigBusinessUnitId, trustpilotApiKey),
      fetchLatestReviews(hedvigBusinessUnitId, trustpilotApiKey, locale),
    ])

    return { ...averageRating, reviews }
  } catch (error) {
    console.error(error)
    return null
  }
}

const fetchAverageRating = async (unitId: string, apiKey: string) => {
  const response = await fetch(`https://api.trustpilot.com/v1/business-units/find?name=staysure.co.uk`, {
    headers: {
      apiKey,
    },
  })

  if (!response.ok) {
    throw new Error(
      `Failed to retrieve Trustpilot average rating information: ${response.statusText}`,
    )
  }

  const { score, numberOfReviews }: AverageRatingJSONResponse = await response.json()

  return {
    score: score.trustScore,
    totalReviews: numberOfReviews.total,
  }
}

const fetchLatestReviews = async (unitId: string, apiKey: string, language: string) => {
  const response = await fetch(
    `https://api.trustpilot.com/v1/business-units/${unitId}/reviews?language=${language}&orderBy=createdat.desc&perPage=10&page=1`,
    {
      headers: {
        apiKey,
      },
    },
  )

  if (!response.ok) {
    throw new Error(`Failed to retrieve Trustpilot reviews information: ${response.statusText}`)
  }

  const { reviews }: ReviewsJSONResponse = await response.json()

  return reviews.map((review) => ({
    id: review.id,
    stars: review.stars,
    text: review.text,
    createdAt: review.createdAt,
    isVerified: review.isVerified,
  }))
}


const logMissingSetting = (message: string) => {
  if (process.env.NODE_ENV === 'production') {
    console.warn(message)
  } else {
    console.log(message)
  }
}
