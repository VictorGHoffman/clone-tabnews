import { useEffect, useState } from "react";
let array = ["Bora bicho cade voce?", "acelera a mobilete", "o topo é seu, ta ligado?", "little chico?", "f no chat", "vacalos me mordam", "no vegans allowed", "ja acabou?"]

function Home() {
  const [mensagem, setMensagem] = useState("");
  useEffect(() => {
    const index = Math.floor(Math.random() * array.length);
    setMensagem(array[index]);
  })

  return (
    <div>
      <h1>{mensagem}</h1>
    </div>
  );
}

export default Home;
