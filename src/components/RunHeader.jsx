function RunHeader({status}){
    return (
        <div className="border p-4 rounded mb-4">
            <h2 className="font-bold text-lg">Analyze Apple R&D Intensity</h2>
             {/* <p className="text-sm text-gray-600">Status: {status}</p> */}
             <span className={`px-2 py-1  rounded text-xs
             ${status === "running" && "bg-blue-100 text-blue-600"}
             ${status === "complete" && "bg-green-100 text-green-600"}
             `}>{status==="running" ? "Run in progress..." : "Run completed"}</span>
        </div>
    )
}

export default RunHeader;