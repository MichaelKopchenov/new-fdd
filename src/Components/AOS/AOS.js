import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

export default function AOS() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
}
