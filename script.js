const codigosValidos = [
  "ARSRM001",
  "MGSIL002",
  "JPSPR003",
  "LFMON004",
  // Adiciona aqui os teus códigos válidos
];

function verificarCodigo() {
  const codigo = document.getElementById("codigo").value.trim().toUpperCase();
  const erro = document.getElementById("mensagem-erro");

  if (codigosValidos.includes(codigo)) {
    // Redireciona para a landing page do Canva
    window.location.href = "https://www.canva.com/design/DAGi2LJppJI/PS_MXg4cEReaQl2PyXTxWg/edit?utm_content=DAGi2LJppJI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton";
  } else {
    erro.textContent = "Código inválido, por favor verifique e tente novamente";
  }
}
