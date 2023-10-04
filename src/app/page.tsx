"use client"
import { ChangeEvent ,useRef,useState } from 'react'

export default function Home() {
  {/* começando pergunta atual com 0  */}
  const [perguntaAtual, setPerguntaAtual] = useState(0)
  {/* começando mostrar pontuação com false  */}
  const [mostrarPontuação, setMostrarPontuação] = useState(false)
  {/* começando pontos com 0 */}
  const [pontos, setPontos] = useState(0)


 const perguntas = [
  {
    pergunta:'Qual o heroi Morcego?',
    opcoesRespostas:[
      {resposta: 'Superman', correta: false, alternativa: 'A)'},
      {resposta: 'Mulher-Maravilha', correta: false, alternativa: 'B)'},
      {resposta: 'Aquamen', correta: false, alternativa: 'C)'},
      {resposta: 'Batman', correta: true, alternativa: 'D)'},
    ]
  },
  {
    pergunta:'Quem é o Homem de Ferro?',
    opcoesRespostas:[
      {resposta: 'Bruce Banner', correta: false, alternativa: 'A)'},
      {resposta: 'Tony Stark', correta: true, alternativa: 'B)'},
      {resposta: 'Peter Park', correta: false, alternativa: 'C)'},
      {resposta: 'Scarlet Jhonson', correta: false, alternativa: 'D)'},
    ]
  },
  {
    pergunta:'Quem é o Hulk?',
    opcoesRespostas:[
      {resposta: 'Bruce Banner', correta: true, alternativa: 'A)'},
      {resposta: 'Tony Stark', correta: false, alternativa: 'B)'},
      {resposta: 'Peter Park', correta: false, alternativa: 'C)'},
      {resposta: 'Scarlet Jhonson', correta: false, alternativa: 'D)'},
    ]
  },
  {
    pergunta:'Quanto é 5 x 5',
    opcoesRespostas:[
      {resposta: '10', correta: false, alternativa: 'A)'},
      {resposta: '120', correta: false, alternativa: 'B)'},
      {resposta: '24', correta: false, alternativa: 'C)'},
      {resposta: '25', correta: true, alternativa: 'D)'},
    ]
  },
  {
    pergunta:'Quanto é 100 x 100',
    opcoesRespostas:[
      {resposta: '10000', correta: true, alternativa: 'A)'},
      {resposta: '1000000', correta: false, alternativa: 'B)'},
      {resposta: '10000000', correta: false, alternativa: 'C)'},
      {resposta: '12300', correta: false, alternativa: 'D)'},
    ]
  },
  {
    pergunta:'Quem fez esse site?',
    opcoesRespostas:[
      {resposta: 'Pedro Sanches', correta: true, alternativa: 'A)'},
      {resposta: 'Luis Sanches', correta: false, alternativa: 'B)'},
      {resposta: 'Bernardo e Regiane', correta: false, alternativa: 'C)'},
      {resposta: 'Pedro com ajuda do google', correta: false, alternativa: 'D)'},
    ]
  },
]


{/* passando pra proxima pergunta */}
function proximaPergunta(correta:boolean) {

  {/* passando a pergunta atual que é 0 mais 1 para uma const */}
  const nextQuestion = perguntaAtual + 1

{/* se estiver true setar pontos que começa em 0 para + 1 */}
  if(correta){
    setPontos(pontos + 1)
  }

  {/* se nextQuestian é menor que tamanho total de perguntas, setar pergunta atual para pergunta atual mais 1 */}
  if (nextQuestion < perguntas.length){
    setPerguntaAtual(nextQuestion)
  }else{
    {/* caso contrario setar mostrar pontuação para true = mostrar pontuação */}
    setMostrarPontuação(true)
  }
}

{/* passando pra pergunta anterior */}
function perguntaAnterior() {

  {/* passando pergunta atual que é 0 - 1 */}
  const nextQuestion = perguntaAtual - 1

  {/* se pergunta atual é menor que tamanho total de perguntas , setar pergunta atual para - 1 */}
  if (nextQuestion < perguntas.length){
    setPerguntaAtual(nextQuestion)
  }
}

{/* reiniciando o quiz com um recarregar a pagina */}
function refreshPage() {
  window.location.reload();
}




  return (
    <main >
      <div className="container">
        <h1>Quiz de Perguntas</h1>
        
        {/* Enquanto mostrar pontuação for false mostrar perguntar caso contrario mostrar respostas  */}
        {mostrarPontuação ? (
        <div className='pontuacao'>
          <span>Sua pontuação é {pontos} de {perguntas.length}</span>
          <button onClick={refreshPage}>restart the quiz</button>
          </div>) : ( 
             <>
        <div className="pergunta">{perguntas[perguntaAtual].pergunta}</div>
        <br></br>
        <div className="respostas">

        {perguntas[perguntaAtual].opcoesRespostas.map((opcoesRespostas)=>
        <div className="alternativa">
          <span>{opcoesRespostas.alternativa}</span>
          <button className='buttonAlternativa' onClick={() => proximaPergunta(opcoesRespostas.correta)}>{opcoesRespostas.resposta}</button>
        </div>
        )}

        </div>
          
        <div className="contagemPerguntas">
          <span>Pergunta {perguntaAtual + 1}/{perguntas.length}</span>
          <button onClick={perguntaAnterior}>voltar</button>
        </div>
        </> 
        )}
        
        <p>Feito por Pedro Sanches</p>
      </div>
       
       
         


    </main>
  );
}
