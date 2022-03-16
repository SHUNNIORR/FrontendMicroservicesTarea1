import axios from "axios"

export const serviceGetCryptos = async()=>{
    try{
        const response =  await axios.get(
            "https://api.nomics.com/v1/currencies/ticker?key=1e781756993904566d69091b11a9c3119e7b942d&ids=BTC,ETH,USDT&interval=1d,30d&convert=EUR&per-page=100&page=1")
         
          console.log('cryptoservices', response)
          return(response.data)
    }catch (error){
        console.log('error servicio', error)
    }
}