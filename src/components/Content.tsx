import React from "react";

export default function Content({children}: React.PropsWithChildren) {
    return (
        <div className="text-center text-grey-900 bg-gray-100 py-10">
            {children}
        </div>
    )
}