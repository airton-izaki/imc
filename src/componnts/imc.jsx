import React, { useState} from 'react'
import './imc.css'

const IMC_calculator = () => {
    
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState();
    const [classificacao, setClassificacao] = useState();

    const Calcula_IMC = () =>
    {
      if (peso > 200 && altura > 3.00)
      {
        alert("Por favor, digitar peso em kilograma e altura em metros");
        return;
      }
      const valorIMC = (peso / (altura * altura)).toFixed(2);
      setImc(valorIMC);
      
      switch (true)
      {
        case valorIMC < 18.5:
          setClassificacao ('abaixo do peso');
          break;

        case valorIMC < 24.5:
          setClassificacao ('com peso normal');
          break;

        case valorIMC < 29.5:
          setClassificacao ('com sobrepeso');
          break;

        case valorIMC < 34.5:
          setClassificacao ('com oco oesidade de 1º grau');
          break;

        default:
          setClassificacao ('Obesidade de 2º grau');
         
      }
    }


   
     return (

          
     <div className='father'>
      <h2>Cálculo do IMC</h2>
          
          <div>
            <input
              type="number"
              value={peso}
              required
              onChange = {(e) => setPeso(e.target.value)}
              placeholder = 'Peso(Kg)' />
          </div>
       
          <div>
            <input
              type="number"
              value={altura}
              required
              onChange={(e) => setAltura(e.target.value)}
              placeholder='Altura(m)' />
          </div>

          <button onClick={Calcula_IMC}>Calcular</button>

          <div>
            <p>O seu IMC é de {imc} e está {classificacao}</p>
          </div>
     </div>
     );
   };
   
export default IMC_calculator