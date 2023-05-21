// 3 - Import
import MyFirstComponent from "./components/MyFirstComponent";
// 4 - Props
import PropsComponent from "./components/PropsComponent";
// 5 - useState
import State from "./components/State";
// 6 - Import Enum
import { Category } from "./components/PropsComponent";
import { createContext } from "react";
// - import Context component
import Context from "./components/Context";

// 7 - type
type textOrNull = string | null;

// 8 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variaveis
  const name: string = "Hélio";
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`;
  };

  const myText: textOrNull = "Tem algo aqui!";
  let myNull: textOrNull = null;

  const tags: string[] = ["Praia", "Mar", "Areia", "Ferias"];

  // 8 - Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1> TypeScript com React!</h1>
        <h2>Nome: {name}</h2>
        {isWorking ? <h2>Está trabalhando</h2> : <h2>Não está trabalhando</h2>}
        <h2>{userGreeting("João")}</h2>
        <MyFirstComponent></MyFirstComponent>
        <PropsComponent
          name="Hélio"
          age={30}
          tags={tags}
          category={Category.UR}
        />
        <State></State>
        {!myNull && <p>{myText}</p>}
      </div>
      <Context></Context>
    </AppContext.Provider>
  );
}

export default App;
