async function getBTCPrice() {
    try {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
      const data = await response.json();
      const price = parseFloat(data.price);
      document.getElementById('btc-price').textContent = price.toLocaleString();
    } catch (error) {
      document.getElementById('btc-price').textContent = "Erreur";
      console.error(error);
    }
  }

  getBTCPrice();
  setInterval(getBTCPrice, 1000); 

  async function getXRPPrice() {
    try {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT');
      const data = await response.json();
      const price = parseFloat(data.price);
      document.getElementById('xrp-price').textContent = price.toLocaleString();
    } catch (error) {
      document.getElementById('xrp-price').textContent = "Erreur";
      console.error(error);
    }
  }

  getXRPPrice();
  setInterval(getXRPPrice, 1000); 

  
  async function getETHPrice() {
    try {
      const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
      const data = await response.json();
      const price = parseFloat(data.price);
      document.getElementById('eth-price').textContent = price.toLocaleString();
    } catch (error) {
      document.getElementById('eth-price').textContent = "Erreur";
      console.error(error);
    }
  }

  getETHPrice();
  setInterval(getETHPrice, 1000); 
