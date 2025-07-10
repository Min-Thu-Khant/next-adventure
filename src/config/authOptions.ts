import { login } from "@/api/auth"
import { AuthOptions, User } from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: "username",
        },
        password: {
          label: "password"
        }
      },
      async authorize(credentials) {
        try {
          const result = await login(credentials?.username!, credentials?.password!)
          return result.data as User
        } catch (error) {
          console.log(error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token }) {
      if (token) {
        session.user = token
      }
      return session
    },
  },
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/"
  }
}
