"use client"
import { ChangeEvent ,useRef,useState } from 'react'

export default function Home() {
  const [perguntaAtual, setPerguntaAtual] = useState(0)


 const perguntas = [
  {
    pergunta:'Qual o heroi Morcego?',
    opcoesRespostas:[
      {resposta: 'Superman', correta: false, alternativa: 'A'},
      {resposta: 'Mulher-Maravilha', correta: false, alternativa: 'B'},
      {resposta: 'Aquamen', correta: false, alternativa: 'C'},
      {resposta: 'Batman', correta: true, alternativa: 'D'},
    ]
  },
  {
    pergunta:'Quem é o Homem de Ferro?',
    opcoesRespostas:[
      {resposta: 'Bruce Banner', correta: false, alternativa: 'A'},
      {resposta: 'Tony Stark', correta: true, alternativa: 'B'},
      {resposta: 'Peter Park', correta: false, alternativa: 'C'},
      {resposta: 'Scarlet Jhonson', correta: false, alternativa: 'D'},
    ]
  },
  {
    pergunta:'Quem é o Hulk?',
    opcoesRespostas:[
      {resposta: 'Bruce Banner', correta: true, alternativa: 'A'},
      {resposta: 'Tony Stark', correta: false, alternativa: 'B'},
      {resposta: 'Peter Park', correta: false, alternativa: 'C'},
      {resposta: 'Scarlet Jhonson', correta: false, alternativa: 'D'},
    ]
  },
]



function proximaPergunta() {
  const nextQuestion = perguntaAtual + 1

  if (nextQuestion < perguntas.length){
    setPerguntaAtual(nextQuestion)
  }else{
    alert("Você chegou ao final do quiz")
  }
}

function perguntaAnterior() {
  const nextQuestion = perguntaAtual - 1

  if (nextQuestion < perguntas.length){
    setPerguntaAtual(nextQuestion)
  }else{
    proximaPergunta()
  }
}




  return (
    <main >
      <div className="container">

        <div className="pergunta">{perguntas[perguntaAtual].pergunta}</div>
        <br></br>
        <div className="respostas">

        {perguntas[perguntaAtual].opcoesRespostas.map((opcoesRespostas)=>
        <div className="alternativa">
          <span>{opcoesRespostas.alternativa}</span>
          <button>{opcoesRespostas.resposta}</button>
        </div>
        )}

        </div>

        <div className="contagemPerguntas">
          <span>Pergunta {perguntaAtual + 1}/{perguntas.length}</span>
          <button onClick={perguntaAnterior}>⬅️</button>
          <button onClick={proximaPergunta}>➡️</button>
        </div>

      </div>

    </main>
  )
}
