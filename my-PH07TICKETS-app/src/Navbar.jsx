import React from "react";
import Container from "./assets/components/Container";


const Navbar = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row md:justify-between p-4 items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="font-bold">CS — Ticket System</h1>
        </div>

        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 text-gray-600 items-center">
          <a href="">Home</a>
          <a href="">FAQ</a>
          <a href="">Changelog</a>
          <a href="">Blog</a>
          <a href="">Download</a>
          <a href="">Contact</a>
          <button className="bg-[#422AD5] text-white p-2 rounded-lg">
            + New Ticket
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;