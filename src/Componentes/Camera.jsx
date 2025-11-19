import { BrushCleaning, CameraIcon } from "lucide-react";
import { TbCameraPlus } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";

export function Camera({ onFotoTirada, limparGaleria }) {
    const videoRef = useRef(null);
    const canvaRef = useRef(null);
    const [foto, setFoto] = useState(null);

    useEffect(() => {
        iniciarCamera();
    }, []);

    const iniciarCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error("Erro ao acessar a câmera: ", error);
        }
    };
    const tirarFoto = () => {
        const video = videoRef.current;
        const canvas = canvaRef.current;

        const ctx = canvas.getContext("2d");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imagem = canvas.toDataURL("image/png");
        setFoto(imagem);
        
        if (onFotoTirada) {
            onFotoTirada(imagem);
        }
    };
    const reiniciar = () => {
        setFoto(null);
        iniciarCamera();
    }

    return (
        <section className="camera-box">
            <h2>Captura de câmera</h2>
            <figure className="preview">
                {/* Exibe a imagem que a câmera está capturando */}
                {!foto ? (
                    <video 
                        ref={videoRef}
                        autoPlay
                        playsInline
                        aria-label="Fluxo de camera"
                    />
                ) : (
                    // Mostra a foto tirada
                    <img src={foto} alt="Foto capturada" />
                )}
            </figure>
            <section className="section_buttons">
                {!foto ? (
                    <button onClick={tirarFoto} className="button_camera"><CameraIcon className="icon" /> Tirar foto</button>
                ) : (
                    <button onClick={reiniciar} className="button_camera"><TbCameraPlus className="icon" /> Nova foto</button>
                )}
                
                <button className="button_limpar" onClick={limparGaleria}><BrushCleaning />Limpar galeria</button>
            </section>
            <canvas
                ref={canvaRef}
                style={{ display: "none" }}
            ></canvas>
        </section>
    )
}