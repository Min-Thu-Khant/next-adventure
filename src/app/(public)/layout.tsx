import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/config/authOptions";
import { redirect } from "next/navigation";

export default async function PrivateLayout ( { children } : { children: ReactNode}) {
    const session = await getServerSession(authOptions)
    if (session?.user){
        redirect('/game')
    }
    return <> 
        {children}
    </>
}