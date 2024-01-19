import type { TrustpilotData } from './trustpilot.types'

type AverageRatingJSONResponse = {
  score: {
    trustScore: number
  }
  numberOfReviews: {
    total: number
  }
  links: Array<{
    herf: string
  }>
}

type ReviewsJSONResponse = {
  reviews: Array<{
    id: string
    stars: number
    text: string
    createdAt: string
    isVerified: boolean
    consumer: {
      displayName: string
    }
    title: string
  }>
}
const hedvigBusinessUnitId = '4d80cd6700006400050ef95e'
const apiKey = 'waKrJRkUeYRXLJdVBAeHukkk2s0d8srx'
// export const fetchTrustpilotData = async (locale: string) => {
//   try {
//     
//     if (!hedvigBusinessUnitId) {

//       return null
//     }

//    
//     if (!trustpilotApiKey) {
//       return null
//     }

//     // const [averageRating, reviews] = await Promise.all([
//     //   fetchAverageRating(hedvigBusinessUnitId, trustpilotApiKey),
//     //   fetchLatestReviews(hedvigBusinessUnitId, trustpilotApiKey, locale),
//     // ])

//     const averageRating =await fetchAverageRating(hedvigBusinessUnitId, trustpilotApiKey);
//     const reviews =await fetchLatestReviews(hedvigBusinessUnitId, trustpilotApiKey, locale);

//     return { ...averageRating, reviews }
//   } catch (error) {
//     console.error(error)
//     return null
//   }
// }

export const fetchAverageRating = async () => {
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

  const { score, numberOfReviews, links }: AverageRatingJSONResponse = await response.json()

  return {
    score: score.trustScore,
    totalReviews: numberOfReviews.total,
    link: { herf: 'https://uk.trustpilot.com/review/www.staysure.co.uk?utm_medium=trustbox&utm_source=Mini' }
  }
}

export const fetchLatestReviews = async (language: string, limit: number) => {
  const response = await fetch(
    `https://api.trustpilot.com/v1/business-units/${hedvigBusinessUnitId}/reviews?language=${language}&orderBy=createdat.desc&perPage=${limit}&page=1&stars=5`,
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
    name: review.consumer.displayName,
    title: review.title
  }))
}



const logMissingSetting = (message: string) => {
  if (process.env.NODE_ENV === 'production') {
    console.warn(message)
  } else {
    console.log(message)
  }
}
