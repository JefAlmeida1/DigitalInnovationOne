import {useState} from 'react';
import Button from '../Components/Botões';
const Card = () => {
    const [valor, setValor] = useState(0)

    function Adicionar (){
        setValor(valor+1)
    }
    function Remover (){
        setValor(valor-1)
    }
    return(
        <div class="card" style="width: 18rem;">
            Meu primeiro card
        <div class="card-body">
           
            <button type="button" 
                class="btn btn-primary"
                onClick={Adicionar}>Adicionar
            </button>
            <button type="button" 
             class="btn btn-primary"
                onClick={Remover}>Remover
            </button>
            <p>0</p>
        </div>
</div>
    )
}
export default Card;