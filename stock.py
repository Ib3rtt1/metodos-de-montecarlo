import numpy as np
import pandas as pd
from pandas_datareader import data as wb
import matplotlib.pyplot as plt
from scipy.stats import norm
import seaborn as sns
from matplotlib import style

style.use('seaborn')

ticker = 'AMZN'
data = wb.DataReader(ticker, data_source='yahoo', start='2018-1-1')['Adj Close']

log_returns = np.log(1+data.pct_change())

u = log_returns.mean()
var = log_returns.var()
drift = u - (0.5*var)
stdev = log_returns.std()
days = 100
trials = 10000

Z = norm.ppf(np.random.rand(days, trials))
retornos_diarios = np.exp(drift.values + stdev.values * Z)
camino_de_precios = np.zeros_like(retornos_diarios)
camino_de_precios[0] = data.iloc[-1]

for t in range(1, days):
    camino_de_precios[t] = camino_de_precios[t-1]*retornos_diarios[t]

plt.figure(figsize=(15,6))
plt.plot(pd.DataFrame(camino_de_precios))
plt.xlabel("Número de días")
plt.ylabel("Precio de " + ticker)
sns.displot(pd.DataFrame(camino_de_precios).iloc[-1])
plt.xlabel("Precio a " + str(days) + " días")
plt.ylabel("Frecuencia")
plt.show()