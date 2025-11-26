import { Camera } from "../Componentes/Camera";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

/*
    Nesta página de Galeria, foi implementada a funcionalidade de adicionar fotos
    tiradas com o componente Camera à galeria. As fotos são armazenadas no localStorage
    para persistência entre sessões. Também foi adicionada a funcionalidade de limpar
    a galeria, removendo todas as fotos tanto do estado local quanto do localStorage.
*/ 

export default function Galeria() {
    const [fotos, setFoto] = useState(() => {
        const salvas = localStorage.getItem("fotos");
        return salvas ? JSON.parse(salvas) : [];
    });

    const adicionarFoto = (novaFoto) => {
        const novasFotos = [...fotos, novaFoto];
        setFoto(novasFotos);
        localStorage.setItem("fotos", JSON.stringify(novasFotos));

        if (novasFotos.length % 3 === 0) {
            toast.success(`Você tirou ${novasFotos.length} fotos!`);
        }
    }

    const limparGaleria = () => {
        if (!confirm("Deseja limpar sua galeria?")) return;
        localStorage.removeItem("fotos");
        setFoto([]);
        toast.success("Galeria limpa com sucesso!");
    }
    

    return (
        <main className="main-galeria">
            <Toaster position="top-right" />
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