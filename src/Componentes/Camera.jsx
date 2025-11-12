import { useEffect, useRef, useState } from "react";

export function Camera({ onFotoTirada }) {
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
            <div className="preview">
                {!foto ? (
                    <video 
                        ref={videoRef}
                        autoPlay
                        playsInline
                        aria-label="Fluxo de camera"
                    />
                ) : (
                    <img src={foto} alt="Foto capturada" />
                )}
            </div>
            <div>
                {!foto ? (
                    <button onClick={tirarFoto}>Tirar Foto</button>
                ) : (
                    <button onClick={reiniciar}>Nova Foto</button>
                )}
            </div>
            <canvas
                ref={canvaRef}
                style={{ display: "none" }}
            ></canvas>
        </section>
    )
}