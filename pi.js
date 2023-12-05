function monteCarloPi(iterations) {
  let insideCircle = 0;

  for (let i = 0; i < iterations; i++) {
      const x = Math.random();
      const y = Math.random();

      const distance = x ** 2 + y ** 2;

      if (distance <= 1) {
          insideCircle++;
      }
  }

  const piEstimate = (insideCircle / iterations) * 4;
  return piEstimate;
}

// Número de iteraciones para el método de Monte Carlo
const numIterations = 1000000;

// Estimación de π utilizando el método de Monte Carlo
const piEstimate = monteCarloPi(numIterations);

console.log(`Estimación de π utilizando ${numIterations} iteraciones: ${piEstimate}`);
