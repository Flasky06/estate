import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl lg:font-thin font-bold md:font-medium text-red-300 underline">
        home
      </h1>
    </div>
  );
}

export default App;
