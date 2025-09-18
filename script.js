function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}

function render() {
  const assetsList = document.getElementById('assets-list');
  const txList = document.getElementById('transactions-list');

  assetsList.innerHTML = `
    <li>現金: ${localStorage.getItem('cash') || 50000} 元</li>
    <li>股票: ${localStorage.getItem('stocks') || 200000} 元</li>
  `;

  const txData = JSON.parse(localStorage.getItem('transactions') || '[]');
  txList.innerHTML = txData.map(
    tx => `<li>${tx.date} - ${tx.category}: ${tx.amount} 元 (${tx.note})</li>`
  ).join('');
}

document.getElementById('add-transaction-form').addEventListener('submit', e => {
  e.preventDefault();
  const date = document.getElementById('date').value;
  const category = document.getElementById('category').value;
  const amount = parseInt(document.getElementById('amount').value);
  const note = document.getElementById('note').value;

  const txData = JSON.parse(localStorage.getItem('transactions') || '[]');
  txData.push({ date, category, amount, note });
  localStorage.setItem('transactions', JSON.stringify(txData));

  render();
  e.target.reset();
});

render();
