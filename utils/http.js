const DOG_URL = 'https://dog.ceo/api/breeds/image/random'
const CAT_URL = 'https://dog.ceo/api/breeds/image/random'
// const CAT_URL = `https://api.thecatapi.com/v1/images/search?api_key=${process.env.CAT_API_KEY}`

export const getPetImageCalls = ($axios, numPets) => {
  return Array.from(Array(numPets), () => $axios.get(getRandomPetUrl()))
}

const getRandomPetUrl = () => {
  return Math.random() > 0.5 ? DOG_URL : CAT_URL
}

export const extractPetImageFromResponse = (imgResponse) => {
  const isDogResponse = imgResponse.config.url.includes('dog.ceo')
  if (isDogResponse) {
    const result = imgResponse.data
    return result.status === 'success' ? result.message : ''
  } else {
    const result = imgResponse.data[0]
    return result.url
  }
}
