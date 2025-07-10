import { movesAPI } from '@/api'
import { Move } from './types'
import { routes } from './routes'

export const createMove = async (move: Move) => {
    return movesAPI.post(routes.store, move)
}

export const getAllMoves = async () => {
    return movesAPI.get(routes.store)
}
