// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { type DefaultSession } from 'next-auth'

// Extend the User interface
declare module 'next-auth' {
	interface User {
		id: number
		username: string
		email: string
		accessToken: string
		refreshToken: string
		gender: string,
		firstName: string,
		lastName: string
	}

	interface Session {
		user: User
	}

}

// Extend the JWT interface to include all properties from the User interface
declare module 'next-auth/jwt' {
	interface JWT {
		id: number
		username: string
		email: string
		accessToken: string
		refreshToken: string
		gender: string,
		firstName: string,
		lastName: string
	}
}
