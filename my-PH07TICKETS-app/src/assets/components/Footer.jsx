import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <Container>
        <div className="grid grid-cols-1 md:text-left text-center gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Company Info */}
          <div>
            <h1 className="text-lg font-semibold mb-3">CS — Ticket System</h1>
            <p className="text-sm text-gray-400">
              Streamline support requests with CS Ticket System.
            </p>
          </div>

          {/* Company */}
          <div>
            <h1 className="font-semibold mb-3">Company</h1>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sales</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h1 className="font-semibold mb-3">Services</h1>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h1 className="font-semibold mb-3">Information</h1>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h1 className="font-semibold mb-3">Social Links</h1>
            <div className="flex justify-center items-center">
              <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-1"><img src="/Group.png" alt="" />@CS — Ticket System</li>
              <li className="flex gap-1"><img src="/fi_145807.png" alt="" />@CS — Ticket System</li>
              <li className="flex gap-1"><img src="/facebook.png" alt="" />@CS — Ticket System</li>
              <li className="flex gap-1"><img src="/Group.png" alt="" />support@cst.com</li>
            </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;