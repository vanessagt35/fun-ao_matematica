// Função para criar uma situação matemática
function situacaoMatematica() {
    // Declarar as variáveis para armazenar os números informados pelo usuário
    var num1, num2, num3;
    // Declarar a variável para armazenar o resultado da situação matemática
    var resultado;
    // Declarar a variável para armazenar a mensagem da exceção
    var mensagem;
  
    // Usar o método try() para tentar executar o código que pode gerar uma exceção
    try {
      // Usar o método prompt() para pedir ao usuário que digite os números
      num1 = prompt("Digite o primeiro número:");
      num2 = prompt("Digite o segundo número:");
      num3 = prompt("Digite o terceiro número:");
  
      // Converter os números de string para number usando o método Number()
      num1 = Number(num1);
      num2 = Number(num2);
      num3 = Number(num3);
  
      // Verificar se os números são válidos usando a função isNaN()
      if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        // Lançar uma exceção usando a palavra-chave throw
        throw "Os números devem ser válidos.";
      }
  
      // Verificar se o terceiro número é diferente de zero usando o operador !=
      if (num3 != 0) {
        // Calcular o resultado da situação matemática usando os operadores aritméticos
        // A situação matemática é: (num1 + num2) / num3
        resultado = (num1 + num2) / num3;
        // Mostrar o resultado usando o método alert()
        alert("O resultado da situação matemática é: " + resultado);
      } else {
        // Lançar uma exceção usando a palavra-chave throw
        throw "O terceiro número não pode ser zero.";
      }
    }
    // Usar o método catch() para capturar e tratar a exceção
    catch (erro) {
      // Atribuir o valor do erro à variável mensagem
      mensagem = erro;
      // Mostrar a mensagem de erro usando o método alert()
      alert("Ocorreu uma exceção: " + mensagem);
    }
    // Usar o método finally() para executar o código que sempre deve ser executado
    finally {
      // Mostrar uma mensagem de agradecimento usando o método alert()
      alert("Obrigado por usar o programa.");
    }
  }
  
  // Chamar a função situacaoMatematica()
  situacaoMatematica();
  