'use client'
import { Package, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import useProfileStore from "@/store/profile";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";



export const Navbar = () => {
    const { username, inventory, clearStore } = useProfileStore()
    const { data } = useSession()
    const router = useRouter()
    const logout = async () => {
        //clear store
        await signOut()
        clearStore()
        router.replace("/login")
        //nav to login page
    }
  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-bold text-amber-400">Adventure Quest</h1>
        
        <div className="flex items-center space-x-2 bg-slate-700 px-3 py-2 rounded-lg">
          <User className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium">{data?.user.username}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-slate-700 px-3 py-2 rounded-lg">
          <Package className="h-4 w-4 text-green-400" />
          <span className="text-sm font-medium">Bag: {inventory.length}</span>
        </div>
        
        <Button 
          onClick={logout}
          variant="outline" 
          size="sm"
          className="bg-red-600 border-red-600 text-white hover:bg-red-700"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </nav>
  );
};