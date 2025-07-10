import { Move } from "@/api/moves/types";
import { ScrollArea } from "@/components/ui/scroll-area";

type MoveHistoryProps = {
  moves: Move[];
}

export const MoveHistory = ({ moves }: MoveHistoryProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-xl font-bold mb-4 text-slate-800">Move History</h2>
      
      <ScrollArea className="h-80">
        <div className="space-y-3">
          {moves.length === 0 ? (
            <p className="text-slate-500 text-sm text-center py-8">
              No moves yet. Start exploring!
            </p>
          ) : (
            moves.map((move) => (
              <div 
                key={move.id} 
                className="p-3 bg-slate-50 rounded-lg border-l-4 border-blue-400"
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-medium text-slate-800">
                    Previous Room : {move.pre_room}
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Next Room: {move.next_room}
                </p>
                <div>Inventory</div>
                { move.bag.join(", ")}
              </div>
            ))
          )}
        </div>
      </ScrollArea>
      
      {moves.length > 0 && (
        <div className="mt-4 pt-4 border-t">
          <p className="text-xs text-slate-500 text-center">
            Total moves: {moves.length}
          </p>
        </div>
      )}
    </div>
  );
};