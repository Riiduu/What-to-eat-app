import Navbar from "./components/Navbar";
import RandomPick from "./components/RandomPick";

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="flex flex-col max-w-md mx-auto bg-white h-screen">
        <Navbar />
        <RandomPick />

      </div>
      
      
    </div>
  )
}

export default App
