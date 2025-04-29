const palavras = [
    { palavra: "JAVASCRIPT", dica: "Linguagem de programação" },
    { palavra: "BANANA", dica: "Fruta amarela" },
    { palavra: "BRASIL", dica: "País da América do Sul" },
    { palavra: "COMPUTADOR", dica: "Máquina eletrônica" }
  ];
  
  let palavraSelecionada = "";
  let dicaSelecionada = "";
  let letrasCorretas = [];
  let tentativasRestantes = 6;
  
  function iniciarJogo() {
    const escolha = palavras[Math.floor(Math.random() * palavras.length)];
    palavraSelecionada = escolha.palavra;
    dicaSelecionada = escolha.dica;
    letrasCorretas = [];
    tentativasRestantes = 6;
  
    document.getElementById("dica").textContent = `Dica: ${dicaSelecionada}`;
    document.getElementById("tentativas").textContent = tentativasRestantes;
    document.getElementById("mensagem").textContent = "";
    mostrarPalavra();
    criarBotoes();
  }
  
  function mostrarPalavra() {
    const display = palavraSelecionada
      .split("")
      .map(letra => letrasCorretas.includes(letra) ? letra : "_")
      .join(" ");
    document.getElementById("palavra").textContent = display;
  }
  
  function criarBotoes() {
    const letrasDiv = document.getElementById("letras");
    letrasDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
      const letra = String.fromCharCode(i);
      const btn = document.createElement("button");
      btn.textContent = letra;
      btn.onclick = () => verificarLetra(letra, btn);
      letrasDiv.appendChild(btn);
    }
  }
  
  function verificarLetra(letra, btn) {
    btn.disabled = true;
    if (palavraSelecionada.includes(letra)) {
      letrasCorretas.push(letra);
    } else {
      tentativasRestantes--;
      document.getElementById("tentativas").textContent = tentativasRestantes;
    }
  
    mostrarPalavra();
    verificarFimDeJogo();
  }
  
  function verificarFimDeJogo() {
    if (tentativasRestantes <= 0) {
      document.getElementById("mensagem").textContent = `Você perdeu! A palavra era ${palavraSelecionada}`;
      desativarBotoes();
    } else if (palavraSelecionada.split("").every(letra => letrasCorretas.includes(letra))) {
      document.getElementById("mensagem").textContent = "Parabéns! Você venceu!";
      desativarBotoes();
    }
  }
  
  function desativarBotoes() {
    const botoes = document.querySelectorAll("#letras button");
    botoes.forEach(btn => btn.disabled = true);
  }
  
  function reiniciarJogo() {
    iniciarJogo();
  }
  
  iniciarJogo();
  