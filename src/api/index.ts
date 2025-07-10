import axios from 'axios'

const dummyJSON = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {'Content-Type': 'application/json'}
});

export {
    dummyJSON
}