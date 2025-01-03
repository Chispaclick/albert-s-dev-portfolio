import { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Función para obtener la hora de Madrid
    const updateMadridTime = () => {
      const madridTime = new Date().toLocaleTimeString("en-GB", {
        timeZone: "Europe/Madrid",
        hour12: true,
      });
      setTime(madridTime);
    };

    // Actualizar cada segundo
    const interval = setInterval(updateMadridTime, 1000);

    // Ejecutar la función inmediatamente para mostrar el tiempo sin esperar
    updateMadridTime();

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home_container">
      <div className="home_wrapper">
        <div className="home_data-container">
          <p className="home_data-time">{time}</p>
          <p className="home_data-text">Granada, Spain</p>
        </div>
        <div className="home_img">
          <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1630958157/Portfolio/IMG_20210820_094357" />

          <h1 className="home_title">Hello I’m Albert</h1>
          <p className="home_description">
            am a Frontend developer passionate about creating modern and
            functional solutions. I began my path self-taught, learning the
            basics of web development and evolving towards more complex projects
            with current technologies.
          </p>
        </div>
        <div className="home_carousel">
          <div className="home_carousel-item">
            <p className="home_description">
              am a Frontend developer passionate about creating modern and
              functional solutions. I began my path self-taught, learning the
              basics of web development and evolving towards more complex
              projects with current technologies.
            </p>
          </div>
          <div className="home_carousel-item"></div>
          <div className="home_carousel-item"></div>
        </div>
      </div>
    </div>
  );
};
