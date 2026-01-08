import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [aluno, setAluno] = useState("Sem nenhum nome");

  function mostrarAluno() {
    setAluno(nome)
  }

  return (
    <>
      <h1>2026 - POC - React + TS - Hook useState</h1>

      <input
        placeholder="Digitar nome"
        value={ nome }
        onChange={ (e) => setNome(e.target.value) }
      />

      <br />

      <input
        placeholder="Digitar idade"
        value={ idade }
        onChange={ (e) => setIdade(e.target.value) }
      />
      
      <br />

      <button onClick={mostrarAluno}>
        Salvar
      </button>

      <div>
        <h3>Bem-vindo {aluno}</h3>
      </div>
    </>
  )
}
