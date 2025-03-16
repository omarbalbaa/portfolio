import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Components
import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectDetails from "./pages/portfolio/[project]/ProjectDetails";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/404/PageNotFound";


function App() {
  // Personal details for the user
  const personalDetails = {
    name: "Omar Balbaa",
    location: "Egypt",
    email: "omareidbalbaa@gmail.com",
    tagline: "Software Engineer",
  };

  const location = useLocation();

  const [originalTitle, setOriginalTitle] = useState();

  useEffect(() => {
    // Store the original document title
    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    // Handle document title change when tab visibility changes
    const handleTabChange = () => {
      if (document.hidden) {
        document.title = "👋🏻 👋🏻 Omar Balbaa | Portfolio";
      } else {
        document.title = originalTitle;
      }
    };

    // Listen for visibility change events
    window.addEventListener("visibilitychange", handleTabChange);
    return () =>
      window.removeEventListener("visibilitychange", handleTabChange);
  }, [location, originalTitle]);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Define routes */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Landing
              name={personalDetails.name}
              tagline={personalDetails.tagline}
            />
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route
          path="/contact"
          element={
            <Contact
              name={personalDetails.name}
              location={personalDetails.location}
              email={personalDetails.email}
            />
          }
        />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="/portfolio/:projectTitle" element={<ProjectDetails />} />
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/page-not-found" />} />
      </Routes>
    </>
  );
}

export default App;
