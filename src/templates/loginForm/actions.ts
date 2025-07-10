'use server'

import { login } from "@/api/auth"

export const authenticate = async (username: string, password: string) => {
    return await login(username, password)
}