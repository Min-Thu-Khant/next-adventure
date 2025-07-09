import { Rooms } from '@/data/rooms'
import { create } from 'zustand'



type ProifleStore = {
    username?: string | null,
    inventory: Array<string>,
    current_room: Rooms,
    setCurrentRoom: (room: Rooms) => void,
    setUsename: (username: string) => void ,
    addItem: (item: string) => void,
    removeItem: (item: string)=> void,
    clearStore: () => void,
}

const useProfileStore = create<ProifleStore>((set, get) => ({
    username: null,
    inventory: [],
    current_room: Rooms.ENTRANCE_HALL,
    setUsename: (_username: string) => set(()=> ( { username: _username })),
    addItem: (_item: string) => set(() => ( { inventory: [ ...get().inventory, _item]})),
    removeItem: (_item: string) =>  set(()=> ( { inventory: get().inventory.filter((i)=> i != _item )})),
    clearStore: () => set(()=> ({username: null, inventory: []})),
    setCurrentRoom: (_room: Rooms) => set(()=> ({current_room: _room})) 
}))

export default useProfileStore