const transactionUl = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')

const dummyTransaction = [
    {id: 1, name: 'salario', amount: 500},
    {id: 2, name: 'tv', amount: -150},
    {id: 3, name: 'violao', amount: -200},
    {id: 4, name: 'mesa', amount: -200},
]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')
    li.classList.add(CSSClass)
    li.innerHTML = `
     ${transaction.name} <span> ${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `
    transactionUl.append(li)
}

const updateBalanceValues = () => {
  const transactionsAmounts = dummyTransaction
    .map( transaction => transaction.amount)

  const total = transactionsAmounts
    .reduce((accumulator, number) => accumulator + number, 0)
    .toFixed(2)

  const income = transactionsAmounts
    .filter( value => value > 0)
    .reduce(( accumulator, value) => accumulator + value, 0)
    .toFixed(2)

  const expense = Math.abs(transactionsAmounts
    .filter(value => value < 0)
    .reduce((accumulator, value) => accumulator + value, 0))
    .toFixed(2)

  incomeDisplay.textContent = `R$ ${income}`
  expenseDisplay.textContent = `R$ ${expense}`
  balanceDisplay.textContent = `R$ ${total}`
  
}

const init = () => { 
  dummyTransaction.forEach(addTransactionIntoDom)
  updateBalanceValues()
}


init()


