import "./styles/global.css";
import "./styles/theme.css";
import {Container} from "./components/Container";
import {Logo} from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { DefaultButtonExercicio } from "./components/DefaultButtonExercicio";
import { Footer} from "./components/Footer";
import { Heading } from "./components/Heading";
import { Fuel, Ghost, PlayCircle, StopCircle, ShieldCheck, Skull, Zap } from "lucide-react"
import { useState } from "react"

export function App() {
  // let numero = 0;
  const [numero, setNumero] = useState(0);

  function handleClick()
  {
    const span = document.getElementById('numero');

    if(!span) return;

    setNumero(estadoAnterior => estadoAnterior + 1);
    span.innerText = numero.toString();
    console.log(numero, Date.now());
  }
  
  return (
    <>
      <Heading> 
        Numero: <span id='numero'>{numero}</span>
      </Heading>
      <button onClick={ handleClick}> Aumenta</button>

      <Container>
        <Logo/>
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
        
      </Container>

      <Container>
        <form className = 'form' action="">

          <div className="formRow">
           <DefaultInput 
            labelText={numero.toString()} 
            id="meuInput" 
            type="text" 
            placeholder="Estudar"
            />
          </div>

          <div className="formRow">
            <p>Escreva aqui no formulário</p>
          </div>

          <div className="formRow">
            
            <Cycles/>
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircle/>} />
            <DefaultButton icon={<StopCircle/>} color={"red"}/>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>

          
          <div className="formRow">
            <div>
              <DefaultButtonExercicio icon={<Zap/>} color="green" />
              <DefaultButtonExercicio icon={<Skull/>} color="red" />
              <DefaultButtonExercicio icon={<Fuel/>} color="yellow" />
              <DefaultButtonExercicio icon={<ShieldCheck/>} color="blue" />
              <DefaultButtonExercicio icon={<Ghost/>} color="ghost" />

            </div>
            
          </div>

        </form>
      </Container>      
      <Container>
        <Footer/>
      </Container>
    </>
  )
}

