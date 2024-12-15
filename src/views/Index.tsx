import { useRef } from "react"
import { Link } from "react-router-dom"
import fondoImage from "../assets/img/Dragon_Ball_Z_logo.svg"
// import AudioPlayer from "../components/AudioPlayer"
import mp3File from '../assets/mp3/dragon-ball.mp3';
import AudioPlayer from "../components/AudioPlayer";

export const Index = () => {
    console.log(fondoImage)

    const audioRef = useRef(null);


   // Función para reproducir el audio al hacer hover, solo después de la interacción inicial
   const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Error al reproducir el audio:', error);
      });
    }
  };
  return (
    <>
        <div>
            <AudioPlayer audioRef={audioRef} mp3File={mp3File} />
            <Link to="/chararter" className="efecto" onMouseEnter={handleMouseEnter}>
                <img src={fondoImage} alt="" style={{ width: "100%" }}/>
            </Link>
        </div>
    </>
  )
}
