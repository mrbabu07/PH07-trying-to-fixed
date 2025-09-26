import "./App.css";



import { Suspense } from "react";
import Boxes from "./assets/components/Boxes";
import Navbar from "./Navbar";
import Footer from "./assets/components/Footer";
import IssuesManagement from "./issuesManagement";


  


const fetchIssues = async () => {
  const result = await fetch("/tickets.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();

  return (
    <>
      <Navbar/>

      <Boxes> </Boxes>

      <Suspense fallback={<div>Loading...</div>}>
        <IssuesManagement fetchPromise={fetchPromise} />
      </Suspense>

      <Footer/>
    </>
  );
}

export default App;