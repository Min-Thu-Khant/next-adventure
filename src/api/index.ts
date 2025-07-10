import axios, { AxiosError } from 'axios'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const dummyJSON = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {'Content-Type': 'application/json'}
});

export const dummyJSONWithAuth = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {'Content-Type': 'application/json'}
});

export const movesAPI = axios.create({
  baseURL: process.env.MOVES_URL
})

dummyJSONWithAuth.interceptors.request.use( async (config) => {
  const session = await getServerSession()
  if(session){
     config.headers.Authorization = "Bearer " + session?.user.accessToken
  }
 
  return  config
})

dummyJSONWithAuth.interceptors.response.use( async (response) => {
  if (response.status == 401 || response.status == 403){
     redirect('/signout')
  }
  return response
}, (error) => {
  if ((error as AxiosError).status == 401 ){
    console.log("redirect...")
    redirect("/")
  }
  console.log("error............")
  return Promise.reject(error)
})