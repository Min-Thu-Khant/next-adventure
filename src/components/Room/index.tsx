import { Items, Rooms } from "@/data/rooms";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type roomInfo = {
    name: string,
    currentRoom: Rooms
    item?: Items | null,
}
export default function Room( { name, item, currentRoom } : roomInfo) {
    return (
        <Button
            className={ cn(`h-20 w-full flex flex-col items-center justify-center text-xs font-medium transition-all `,  currentRoom == name ? 'border-6  border-emerald-600': '' )}
        >
            <div className="text-lg mb-1">
                { name }
            </div>
            <div className="text-center leading-tight">
                { item }
            </div>
        </Button>
    )
}