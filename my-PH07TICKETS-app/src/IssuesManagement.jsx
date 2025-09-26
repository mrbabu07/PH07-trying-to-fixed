import React, { use } from "react";
import Cart from "./assets/components/Cart";


const IssuesManagement = ({ fetchPromise }) => {
  // Suspense + use() দিয়ে data resolve করছো
  const issues = use(fetchPromise);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-xl font-bold mb-4">Customer Tickets</h1>
      <Cart issues={issues} />
    </div>
  );
};

export default IssuesManagement;