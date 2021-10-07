import fetch from 'node-fetch'

class Datasource {
  constructor(datasource) {
    this.datasource = datasource
  }

  async getPrices() {
    let response = await fetch(this.datasource)
    response = await response.json()
    return response.data.prices
  }
}

const DATA_ENDPOINT = 'https://static.ngnrs.io/test/prices'
const ds = new Datasource(DATA_ENDPOINT)


ds.getPrices()
  .then(prices => {
    prices.forEach(price => {
      price.mid = () => {
        return (price.buy + price.sell) / 2
      }

      price.quote = () => {
        return price.pair.slice(-3)
      }
      console.log(`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`)
    })
  }).catch(error => {
    console.err(error)
  })
