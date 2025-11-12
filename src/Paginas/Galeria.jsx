import { Camera } from "../Componentes/Camera";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from "react";

export default function Galeria() {
    const [fotos, setFotos] = useState([]);

    const handleCapture = (novaFoto) => {
        setFotos([...fotos, novaFoto])
    }
    console.log(fotos);

    return (
        <main className="main-galeria">
            <Camera onFotoTirada={handleCapture}/>
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} className="galeria">
                {fotos.map((item, index) => (
                    <ImageListItem key={index}>
                    <img
                        src={item}
                        alt={`Foto ${index}`}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        </main>
    );
}