const quoteBoxElement = document.querySelector('#quote-box')
const newQuoteButton = document.querySelector('#new-quote')
newQuoteButton.addEventListener('click', handleNewQuoteClick)

async function handleNewQuoteClick() {
  hiddenNewQuote()
  toggleLoading()
  const quoteObject = await fetchRandomQuote()
  renderQuote(quoteObject)
  renderAuthor(quoteObject)
  toggleLoadingRemove()
  visibleNewQuote()
}

function hiddenNewQuote() {
  document.getElementById('new-quote').style.display = 'none'
}

function visibleNewQuote() {
  document.getElementById('new-quote').style.display = 'inline'
}

function toggleLoadingRemove() {
  quoteBoxElement.classList.remove('loading')
}

function toggleLoading() {
  quoteBoxElement.classList.add('loading')
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
