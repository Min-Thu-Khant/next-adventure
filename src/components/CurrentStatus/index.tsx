import { Items } from "@/data/rooms"
import useProfileStore from "@/store/profile"

type CurrentStatusProps = {
    current_room: string,
    item_found?: Items | null,
    inventory: Array<Items>,
}

export default function CurrentStatus({ current_room, item_found, inventory }: CurrentStatusProps) {
    const { addItem, removeItem} = useProfileStore()

    const showItemFound = () : boolean => {
        if (item_found){
            const item = inventory.find((i) => i == item_found)

            return item ? false : true
        }
        return false
    }
    return <div>
        <div>Current Room : {current_room}</div>
        {
            showItemFound() && <>
                <div>Item Found </div>
                <div className="w-full flex justify-between p-2 bg-gray-300 m-1 rounded-md">
                    <span>{item_found}</span>
                    <button className="bg-green-400 rounded-sm p-1" onClick={() => addItem(item_found)}>Collect</button>
                </div>
            </>
        }
        <div>
            <h2>Inventory</h2>
            {
                inventory.map((i) => (<div key={i} className="w-full flex justify-between p-2 bg-gray-300 m-1 rounded-md">
                    <span>{i}</span>
                    <button className="bg-red-400 rounded-sm p-1" onClick={() => removeItem(i)}>Remove</button>
                </div>))
            }
        </div>
    </div>


}