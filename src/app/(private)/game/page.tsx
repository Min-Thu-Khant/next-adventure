"use client"
import { MoveHistory } from "@/components/MoveHistory";
import Room from "@/components/Room";
import { Directions, rooms } from "@/data/rooms";
import useProfileStore from "@/store/profile";
import { useEffect, useState } from "react";
import CurrentStatus from "@/components/CurrentStatus";
import { toast } from "sonner";
import { getAll, move } from "@/templates/game/actions";
import { dummyJSONWithAuth } from "@/api";
import { callme } from "@/templates/game/actions";
export default function Game() {
    const { current_room, setCurrentRoom, inventory, item_found, setFoundItem } = useProfileStore()
    const [moves, setMoves] = useState([]) 

    const walk = (direction: Directions) => {
        // find current room object
        const current = rooms.find((r) => r.name == current_room)   

        //check availabe room with pressed direction

        const next_room = current?.available_rooms.find((av) => av.direction == direction)
        if (!next_room) {
            toast.error("You cannot go " + direction)
        } else {
            setCurrentRoom(next_room.room)
            move({
                pre_room: current_room,
                next_room: next_room.room,
                bag: inventory
            }).then(() => getAllMoves())
        }
    }

    const getAllMoves = async () => {
         const result = await getAll()
        setMoves(result)

    }
    useEffect(()=> {
        getAllMoves()
    }, [])
    useEffect(() => {
        const room = rooms.find((r) => r.name ==  current_room)
        setFoundItem(room?.item)
        const handleKeyDown = (e: WindowEventMap["keydown"]) => {
        // console.log(e)
        switch (e.key) {
            case "ArrowUp":
                walk(Directions.UP)
                break;
            case "ArrowDown":
                walk(Directions.DOWN)
                break;
            case "ArrowLeft":
                walk(Directions.LEFT)
                break;
            case "ArrowRight":
                walk(Directions.RIGHT)
                break;
            default:
                break;
        }
    }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [current_room])

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                {/* Room Grid - Left/Center Area */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4 text-center text-slate-800">Room Layout</h2>
                        <div className="grid grid-cols-3 gap-1 max-w-sm mx-auto">
                            {rooms.map((r) => <Room key={r.name} name={r.name} item={r.item} currentRoom={current_room} />)}
                        </div>


                    </div>
                </div>

                {/* Move History - Right Area */}
                <div className="lg:col-span-1">{current_room}
                    <MoveHistory moves={moves} />
                </div>
            </div>
            <CurrentStatus 
                current_room={current_room} 
                inventory={inventory} 
                item_found={item_found}
                />
                <button onClick={callme}>Call Dummy</button>
        </div>
    )
}