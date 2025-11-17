function add() {
      const a = parseFloat(document.getElementById('num1').value);
      const b = parseFloat(document.getElementById('num2').value);
      document.getElementById('result').innerText = "Result: " + (a + b);
    }

    function subtract() {
      const a = parseFloat(document.getElementById('num1').value);
      const b = parseFloat(document.getElementById('num2').value);
      document.getElementById('result').innerText = "Result: " + (a - b);
    }

    function multiply() {
      const a = parseFloat(document.getElementById('num1').value);
      const b = parseFloat(document.getElementById('num2').value);
      document.getElementById('result').innerText = "Result: " + (a * b);
    }

    function divide() {
      const a = parseFloat(document.getElementById('num1').value);
      const b = parseFloat(document.getElementById('num2').value);
      if (b === 0) {
        document.getElementById('result').innerText = "Result: Cannot divide by zero!";
      } else {
        document.getElementById('result').innerText = "Result: " + (a / b).toFixed(2);
      }
    }
    document.getElementById('content').classList.add('light-mode');

    function toggleMode() {
    const content = document.getElementById('content');
    content.classList.toggle('light-mode');
    content.classList.toggle('dark-mode');
    }
