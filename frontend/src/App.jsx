import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import RestaurantListPage from "./pages/RestaurantListPage";

// Components
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Navbar Landing */}
              <Navbar openModal={openModal} />
              <LandingPage openModal={openModal} />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route
          path="/restaurants"
          element={
            <>
              <RestaurantListPage />
            </>
          }
        />
      </Routes>

      {/* Modal for Login/Sign Up */}
      {modalOpen && <Modal modalType={modalType} closeModal={closeModal} />}
    </Router>
  );
}

export default App;
