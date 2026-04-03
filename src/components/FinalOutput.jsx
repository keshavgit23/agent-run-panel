function FinalOutput({ output }) {
    return (
        <div>
            <div className="mt-8 p-6 border-2 border-green-400 rounded-lg bg-green-50">
                <h2 className="font-semibold text-lg mb-2">Final Output</h2>
                <p className="text-gray-700">{output}</p>
            </div>

        </div>
    )
}

export default FinalOutput;