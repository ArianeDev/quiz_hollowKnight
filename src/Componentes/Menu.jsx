import missao from '../assets/missao_tratado.png';
import mapa from '../assets/mapa_tratado.png';
import bau from '../assets/bau_tratado.png';
import camera from '../assets/camera_tratado.png';
import { Link } from 'react-router-dom'
export function Menu() {
    return (
        <div className='menu'>
            <ul>
                <Link to = 'missao'>
                <li>
                    <figure>
                        <img src={missao} alt="Missões" />
                        <figcaption>Missões</figcaption>
                    </figure>
                </li>
                </Link>
                
                <li>
                    <figure>
                        <img src={bau} alt="Inventário" />
                        <figcaption>Inventário</figcaption>
                    </figure>
                    
                </li>
                <li>
                    <figure>
                        <img src={mapa} alt="GeoLocalização" />
                        <figcaption>GeoLocalização</figcaption>
                    </figure>
                </li>
                 <li>
                    
                    <figure>
                        <img src={camera} alt="camera" />
                        <figcaption>Camera</figcaption>
                    </figure>
                    
                </li>
            </ul>
        </div>
    )
}