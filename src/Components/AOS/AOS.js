import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOS() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
}
