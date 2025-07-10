'use server'
import { me } from '@/api/auth'
import { createMove , getAllMoves } from '@/api/moves'
import { Move } from '@/api/moves/types'

export const move = async ( move: Move) => {
    return (await createMove(move)).data
}

export const getAll = async () => {
    const result =  (await getAllMoves()).data
    return (result as Array<object>).reverse()
}

export const callme = async () => {
     return (await me()).data;
}