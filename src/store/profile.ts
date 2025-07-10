import { Items, Rooms } from '@/data/rooms'
import { create } from 'zustand'



type ProifleStore = {
    username?: string | null,
    inventory: Array<Items>,
    current_room: Rooms,
    item_found?: Items | null,
    setCurrentRoom: (room: Rooms) => void,
    setUsename: (username: string) => void ,
    addItem: (item: Items) => void,
    removeItem: (item: Items)=> void,
    clearStore: () => void,
    setFoundItem: (item: Items | null | undefined) => void,
}

const useProfileStore = create<ProifleStore>((set, get) => ({
    username: null,
    item_found: null,
    inventory: [],
    current_room: Rooms.ENTRANCE_HALL,
    setUsename: (_username: string) => set(()=> ( { username: _username })),
    addItem: (_item: Items) => set(() => ( { inventory: [ ...get().inventory, _item]})),
    removeItem: (_item: Items) =>  set(()=> ( { inventory: get().inventory.filter((i)=> i != _item )})),
    clearStore: () => set(()=> ({username: null, inventory: []})),
    setCurrentRoom: (_room: Rooms) => set(()=> ({current_room: _room})) ,
    setFoundItem: ( _item: Items | null | undefined) => set({ item_found: _item})
}))

export default useProfileStore