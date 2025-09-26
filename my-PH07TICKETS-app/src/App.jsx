import "./App.css";

import { useState, useEffect } from "react";
import Boxes from "./assets/components/Boxes";
import Navbar from "./Navbar";
import Footer from "./assets/components/Footer";
import Cart from "./assets/components/Cart";

function App() {
  // State for issues (all tickets)
  const [issues, setIssues] = useState([]);

  // State for task management
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  // Fetch issues
  useEffect(() => {
    const fetchIssues = async () => {
      const result = await fetch("/tickets.json");
      const data = await result.json();
      setIssues(data);
    };
    fetchIssues();
  }, []);

  return (
    <>
      <Navbar />

      {/* Boxes → show counts */}
      <Boxes
        inProgressCount={inProgressTasks.length}
        resolvedCount={resolvedTasks.length}
      />

      {/* Cart → pass data + handlers */}
      <Cart
        issues={issues}
        inProgressTasks={inProgressTasks}
        setInProgressTasks={setInProgressTasks}
        resolvedTasks={resolvedTasks}
        setResolvedTasks={setResolvedTasks}
      />

      <Footer />
    </>
  );
}

export default App;
