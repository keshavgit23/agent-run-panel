import { useState, useEffect } from "react"
import RunHeader from "./components/RunHeader"
import TaskCard from "./components/TaskCard"
import FinalOutput from "./components/FinalOutput"

function App() {
  const [tasks, setTasks] = useState([])
  const [finalOutput, setFinalOutput] = useState("")
  const [runStatus, setRunStatus] = useState("running")

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (!isMounted) return;
      setTasks([
        {
          id: "t1",
          label: "Fetch Apple 10L fillings",
          agent: "filling_fetcher",
          status: "running",
          outputs: [],
          finalOutput: []
        },
      ]);
    }, 1000)

    setTimeout(() => {
      setTasks(prev =>
        prev.map(t =>
          t.id === "t1"
            ? { ...t, status: "complete", outputs: ["Fetching Apple data..."] }
            : t
        )
      );
    }, 2000);
    // step:2 First log
    setTimeout(() => {
      if (!isMounted) return;
      setTasks(prev => [...prev,
      {
        id: "t2",
        label: "Fetch Microsoft data",
        agent: "fetcher",
        status: "running",
        outputs: [],
        parallel: true
      },
      {
        id: "t3",
        label: "Fetch Google data",
        agent: "fetcher",
        status: "running",
        outputs: [],
        parallel: true
      },
      {
        id: "t4",
        label: "Fetch Meta data",
        agent: "fetcher",
        status: "running",
        outputs: [],
        parallel: true
      }
      ]);
    }, 3000)
    //step:3 second log
    setTimeout(() => {
      if (!isMounted) return;
      setTasks((prev) => prev.map((t => t.id === "t4" ? { ...t, status: "failed", outputs: [...t.outputs, "Extracting R&D data..."], } : t
      )
      ));
    }, 5000);

    //step 4: complete

    setTimeout(() => {
      if (!isMounted) return;
      setTasks(prev => prev.map(t => t.id === "t4" ? { ...t, status: "running", outputs: [...t.outputs, "Retrying..."] } : t
      ));
    }, 7000)

    setTimeout(() => {
      if (!isMounted) return;
      setTasks(prev => prev.map(t => t.id === "t4" ? { ...t, status: "cancelled", outputs: [...t.outputs, "Stopped early enough data"] } : t))
    }, 9000)

    setTimeout(() => {
      if (!isMounted) return
        setTasks(prev => prev.map(t => t.id === "t2" || t.id === "t3" ? { ...t, status: "complete", outputs: [...t.outputs, "Data fetched"] } : t
        ));
    }, 10000)

    setTimeout(() => {
      if (!isMounted) return;
      setTasks(prev => [...prev,
      {
        id: "t5",
        label: "Generate Final report",
        agent: "synthesizer",
        status: "running",
        outputs: ["Combining all data..."],
      }
      ])
    }, 11000)

    setTimeout(() => {
      setFinalOutput("Apple R&D increased significantly vs peers...")
      setRunStatus("complete")
      setTasks(prev => prev.map(t => t.id === "t5" ? { ...t, status: "complete" } : t

      ))
    }, 13000)

    return () => {
      isMounted = false;
    }
  }, []);
    const sequentialTasks = tasks.filter(t => !t.parallel)
    const parallelTasks = tasks.filter(t => t.parallel)
  return (
    <div className="min-h-screen bg-gray-50">
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <RunHeader status={runStatus} />

      {sequentialTasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}

      {parallelTasks.length > 0 && (
        <div className="mt-6 p-4 border-l-4 border-purple-500 rounded-lg bg-purple-50">
          <p className="text-sm font-semibold text-purple-700 mb-3">
            Running tasks in parallel
          </p>

          {parallelTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
      )}
          {finalOutput && <FinalOutput output={finalOutput} />}
          
    </div>
    </div>
  );
}

export default App;
