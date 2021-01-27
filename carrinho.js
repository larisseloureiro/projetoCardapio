var total = 0;

function add(content, valor) {
  console.log(valor + valor);
  document.getElementById(content).style.backgroundColor = 'green';
  document.getElementById(content).value = 'Adicionado';

  total += valor
  document.getElementById('preco').textContent = total;
}

function limpar() {
  total = 0;
  document.getElementById('preco').textContent = total;

  document.getElementById('btn1').value = 'Adicionar'
  document.getElementById('btn1').style.backgroundColor = "#007BFF";
  document.getElementById('btn2').value = 'Adicionar'
  document.getElementById('btn2').style.backgroundColor = "#007BFF";
  document.getElementById('btn3').value = 'Adicionar'
  document.getElementById('btn3').style.backgroundColor = "#007BFF";
  document.getElementById('btn4').value = 'Adicionar'
  document.getElementById('btn4').style.backgroundColor = "#007BFF";
  document.getElementById('btn5').value = 'Adicionar'
  document.getElementById('btn5').style.backgroundColor = "#007BFF";
  document.getElementById('btn6').value = 'Adicionar'
  document.getElementById('btn6').style.backgroundColor = "#007BFF";
  document.getElementById('btn7').value = 'Adicionar'
  document.getElementById('btn7').style.backgroundColor = "#007BFF";
  document.getElementById('btn8').value = 'Adicionar'
  document.getElementById('btn8').style.backgroundColor = "#007BFF";
  document.getElementById('btn9').value = 'Adicionar'
  document.getElementById('btn9').style.backgroundColor = "#007BFF";
}


