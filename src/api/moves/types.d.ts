import { Items, Rooms } from "@/data/rooms"

type Move = {
    id?: string,
    pre_room: Rooms
    next_room: Rooms,
    bag: Array<Items>
}