// Feat(js):Criação Função que fará a conversão e interação após conversão
async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const result = document.getElementById("result");

  result.classList.add("loading");
  result.textContent = "Convertendo...";

  // Feat(JS): Conexão com a API e processo de conversão
  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${from}`
    );
    const data = await response.json();

    const rate = data.rates[to];
    const convertedAmount = (amount * rate).toFixed(2);

    result.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
  } catch (error) {
    result.textContent = "Erro na conversão. Tente novamente.";
  } finally {
    result.classList.remove("loading");
  }
}
// Feat(JS): Converter automaticamente quando a página carregar
window.onload = convertCurrency;