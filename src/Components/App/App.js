import Preloader from "../Preloader/Preloader";
import Standarts from "../Standarts/Standarts";
import { useEffect, useState } from "react";
import Services from "../Services/Services";
import Initial from "../Initial/Initial";
import Footer from "../Footer/Footer";
import Works from "../Works/works";
import Team from "../Team/Team";
import AOS from "../AOS/AOS";
import React from "react";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  AOS();

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Initial />
          <Services />
          <Standarts />
          <Works />
          <Team />
          <Footer />
        </>
      )}
    </>
  );
}
