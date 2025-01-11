import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Import HomePage component
import JobDetails from "./pages/JobDetails";
import Login from "./pages/admin/Login";
import Signup from "./pages/admin/Signup";
function App() {
  return (
    <Router>
      <div>
        <h1>Vephi</h1>

        {/* nav links */}
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/job_details">Job details</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job_details" element={<JobDetails />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/signup" element={<Signup />} />
          {/* <Route path="/contact" element={<Profile />} />
          <Route path="/contact" element={<JobTracker />} />
          <Route path="/contact" element={<Tips />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
