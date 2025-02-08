import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import ServicesGrid from "./components/ServicesGrid";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Contact from "./pages/Contact";
import Benifit from "./pages/Benifit";
import More from "./pages/More";
import Login from "./pages/Login";
import NewRegistration from "./pages/New";
import HandicapRegistration from "./pages/Handicap";
import UpdateRegistration from "./pages/Update";
import SearchRegistration from "./pages/Search";
import VerifiedRegistration from "./pages/Verified";
import RegistrationForm from "./pages/Forms/NewRegistration";
import HandicapRegistrationForm from "./pages/Forms/HandicapRegistrationForm";
import SearchMarriageProfiles from "./pages/Search";

export default function App() {
  return (
    <Router>
      <Header />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider />
              <ServicesGrid />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
        <Route path="/login" element={<Login />} />
        <Route path="/benifit" element={<Benifit />} />
        <Route path="/new" element={<NewRegistration />} />
        <Route path="/handicap" element={<HandicapRegistration />} />
        <Route path="/update" element={<UpdateRegistration />} />
        <Route path="/search" element={<SearchMarriageProfiles />} />
        <Route path="/verified" element={<VerifiedRegistration />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/hregister" element={<HandicapRegistrationForm />} />

      </Routes>
    </Router>
  );
}
