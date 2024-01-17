import Initial from "../Initial/Initial";
import Services from "../Services/Services";
import Standarts from "../Standarts/Standarts";
import Works from "../Works/works";
import "./App.css";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import AOS from "../AOS/AOS";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);

  AOS();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
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
