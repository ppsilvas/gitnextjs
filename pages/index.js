import { SpeedInsights } from "@vercel/speed-insights/next";

import { useState } from 'react';

export { useState } from 'react';

function Home() {
    return<div>
       <h1>Home</h1>
       <Contador />
    </div>

}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador+1);
    }
    function subtrairContador(){
        setContador(contador-1);
    }

    return(
        <div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
        <p>-------------</p>
        <button onClick={subtrairContador}>Remover</button>
        </div>
    )
        
}

<SpeedInsights/>
export default Home