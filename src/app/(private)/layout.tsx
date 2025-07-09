import { Navbar } from "@/components/NavBar";
import { ReactNode } from "react";

export default function PrivateLayout ( { children } : { children: ReactNode}) {

    return <> 
        <Navbar/>
        {children}
    </>
}