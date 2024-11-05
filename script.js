function rollDice() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");

  // Simula una animación de "girado" al cambiar números rápidamente
  let counter = 0;
  const interval = setInterval(() => {
    dice1.textContent = Math.floor(Math.random() * 6) + 1;
    dice2.textContent = Math.floor(Math.random() * 6) + 1;
    counter++;
    if (counter > 20) {
      // Para la animación después de 20 iteraciones
      clearInterval(interval);
    }
  }, 100);
}

// Asocia la función al botón
document.getElementById("rollButton").addEventListener("click", rollDice);
