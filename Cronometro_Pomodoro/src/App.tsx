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
import { PlayCircle, StopCircle } from "lucide-react"

export function App() {
  return (
    <>
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
           <DefaultInput labelText="Task" id="meuInput" type="text" placeholder="Estudar"/>
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
              <DefaultButtonExercicio icon={<PlayCircle/>} color="green" />
            <DefaultButtonExercicio icon={<PlayCircle/>} color="red" />
            <DefaultButtonExercicio icon={<PlayCircle/>} color="yellow" />
            <DefaultButtonExercicio icon={<PlayCircle/>} color="blue" />
            <DefaultButtonExercicio icon={<PlayCircle/>} color="ghost" />

            </div>
            
          </div>

        </form>
      </Container>      
    </>
  )
}

