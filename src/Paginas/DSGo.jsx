import { Outlet } from 'react-router-dom';
import { Menu } from '../Componentes/Menu';

// Componente de layout principal para o jogo DSGo

export function DSGo(){
    return(
        <main className="corpo">
            <Outlet/>
            <Menu/>            
        </main>

    )
}