import React from "react"


export default function bs({children}: { children: React.ReactNode}) {
    return <div>
        <div className="border-b text-center">
            20% off next 3 days
        </div>
        {children}
    </div> 
}