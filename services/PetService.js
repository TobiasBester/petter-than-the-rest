import axios from 'axios'

const DATA_API_URL = 'https://my-json-server.typicode.com/TobiasBester/petter-than-the-rest'
const DOG_URL = 'https://dog.ceo/api/breeds/image/random'
const CAT_URL = `https://api.thecatapi.com/v1/images/search?api_key=${process.env.NUXT_ENV_CAT_API_KEY}`

const api = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const getPetPosts = () => {
  return api.get(`${DATA_API_URL}/posts`)
}

export const getPetPost = (id) => {
  return api.get(`${DATA_API_URL}/posts/${id}`)
}

export const getPetImageCalls = (numPets) => {
  return Array.from(Array(numPets), () => getPetImageCall())
}

export const getPetImageCall = () => {
  return api.get(getRandomPetUrl())
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
