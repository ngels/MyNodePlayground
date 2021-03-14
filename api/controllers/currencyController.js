//currencyController.js
const axios = require('axios');
module.exports = {
    async getExchangeRate(req, res) {

    const base= req.params.currcode ||'USD';
        try {
            let exchangeInfo = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base.toUpperCase()}`)
            return res.send(exchangeInfo.data);
        } 
        catch (error) {
            console.log(" - -error - -",error)
            return res.send(`${error.message} : ${base} is not supported`);
        }
    }
};