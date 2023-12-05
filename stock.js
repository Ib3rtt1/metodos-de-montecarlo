// Importar bibliotecas
const math = require('mathjs');
const axios = require('axios');
const { plot } = require('nodeplotlib');
const seedrandom = require('seedrandom');

// Configurar la semilla para reproducibilidad
const rng = seedrandom('hello.');

// Definir el símbolo de la acción y obtener datos históricos
const ticker = 'AMZN';
const startDate = '2018-01-01';
const endDate = new Date().toISOString().split('T')[0]; // Fecha actual
const url = `https://query1.finance.yahoo.com/v7/finance/chart/${ticker}?period1=${new Date(startDate).getTime() / 1000}&period2=${new Date(endDate).getTime() / 1000}&interval=1d&events=history&includeAdjustedClose=true`;

axios.get(url)
    .then(response => {
        const data = response.data.chart.result[0].indicators.adjclose[0].adjclose;

        // Calcular los retornos logarítmicos diarios
        const logReturns = math.log(math.dotDivide(data.slice(1), data.slice(0, -1)));

        // Calcular parámetros estadísticos
        const u = math.mean(logReturns);
        const variances = math.var(logReturns);
        const drift = math.subtract(u, math.multiply(0.5, variances));
        const stdev = math.std(logReturns);

        // Simulación Monte Carlo
        const days = 100;
        const trials = 10000;
        const Z = math.transpose([Array.from({ length: days }, () => normInv(rng()))]);

        const dailyReturns = math.exp(math.add(drift, math.multiply(stdev, Z)));
        const pricePath = [data[data.length - 1]];

        for (let t = 1; t < days; t++) {
            pricePath.push(math.multiply(pricePath[t - 1], dailyReturns[t]));
        }

        // Visualización
        plot([{
            x: Array.from({ length: days }, (_, i) => i),
            y: pricePath,
            type: 'line',
            name: `Simulación ${ticker} (${days} días)`
        }]);

        const finalPrices = pricePath.map(path => path[0]);
        plot([{
            x: finalPrices,
            type: 'histogram',
            name: `Distribución de Precios (${days} días)`
        }]);
    })
    .catch(error => {
        console.error('Error al obtener datos históricos:', error);
    });

// Función para invertir la función de distribución acumulativa normal
function normInv(p) {
    return Math.sqrt(2) * math.erfinv(2 * p - 1);
}
