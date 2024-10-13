import Navbar from "./components/Navbar";
import RandomPick from "./components/RandomPick";

function App() {
  return (
    <div className="flex flex-col max-w-full">
      <Navbar />
      <div className="mx-5 h-full flex flex-col">
        <RandomPick />
      </div>
      
    </div>
  )
}

export default App
