import { Camera } from "../Componentes/Camera";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from "react";

export default function Galeria() {
    const [fotos, setFoto] = useState(() => {
        const salvas = localStorage.getItem("fotos");
        return salvas ? JSON.parse(salvas) : [];
    });

    const adicionarFoto = (novaFoto) => {
        const novasFotos = [...fotos, novaFoto];
        setFoto(novasFotos);
        localStorage.setItem("fotos", JSON.stringify(novasFotos));
    }

    const limparGaleria = () => {
        if (!confirm("Deseja limpar sua galeria?")) return;
        localStorage.removeItem("fotos");
        setFoto([]);
    }
    

    return (
        <main className="main-galeria">
            {/* Câmera */}
            <Camera onFotoTirada={adicionarFoto} limparGaleria={limparGaleria}/> 
            {/* Galeria de fotos */}
            <h1>Galeria de Fotos</h1>
            {fotos.legth === 0 ? (
                <p>Nenhuma foto foi tirada!</p>
            ) : (
                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} className="galeria">
                    {fotos.map((item, index) => (
                        <ImageListItem key={index}>
                        <img
                            src={item}
                            alt={`Foto ${index + 1}`}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
            )}
        </main>
    );
}