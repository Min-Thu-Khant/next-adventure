import { dummyJSON, dummyJSONWithAuth } from "@/api"
import routes from "./routes"

export const login = async (username: string, password: string) => {
   return dummyJSON.post(routes.login, { username, password, expiresInMins: 1 })
}

export const me = async () => {
   return dummyJSONWithAuth.get("/auth/me")
}