import { dummyJSON } from "@/api"
import routes from "./routes"

export const login = async (username: string, password: string) => {
   return dummyJSON.post(routes.login, { username, password })
}