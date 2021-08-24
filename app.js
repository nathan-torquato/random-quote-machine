const quoteBoxElement = document.querySelector('#quote-box')
const newQuoteButton = document.querySelector('#new-quote')
newQuoteButton.addEventListener('click', handleNewQuoteClick)

async function handleNewQuoteClick() {
  toggleLoading()
  const quoteObject = await fetchRandomQuote()
  renderQuote(quoteObject)
  renderAuthor(quoteObject)
  toggleLoading()
}

function toggleLoading() {
  quoteBoxElement.classList.toggle('loading')
}

async function fetchRandomQuote() {
  const response = await fetch('https://api.quotable.io/random')
  const quoteObject = await response.json()
  return quoteObject
}

function renderQuote(quoteObject) {
  const textElement = document.querySelector('#text')
  textElement.textContent = quoteObject.content
}

function renderAuthor(quoteObject) {
  const textElement = document.querySelector('#author')
  textElement.textContent = `- ${quoteObject.author}`
}
