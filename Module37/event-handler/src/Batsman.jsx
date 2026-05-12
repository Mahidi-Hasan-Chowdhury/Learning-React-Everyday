import { useState } from "react"




export default function Batsman() {
    const batsmanHandle=() => {
    setRuns(runs + 1);
    }

    const handleFour = () => {
        setRuns(runs+4);
    }

    const [runs, setRuns] = useState(0);
    return (
        <div>
            <h3>This is Batsman Component</h3>
            <p>Runs: {runs}</p>
            <button onClick={batsmanHandle}>Add 1 Run</button>
            <button onClick={() => setRuns(runs + 6)}>Six</button>
            <button onClick={handleFour}>Four</button>
        </div>
    )
}