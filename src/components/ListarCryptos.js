import axios from "axios";
import React, { useEffect, useState } from "react";
import { serviceGetCryptos } from "../services/cryptos";

const ListarCryptos = () => {
  const [cryptos, setCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getCryptos = async() => {
    setIsLoading(true);
    setCryptos(await serviceGetCryptos())
    setIsLoading(false)
  };

  useEffect(() => {
    getCryptos()
  }, [])
  

  return (
    <div className="notificacioneslist_container">
      <div className="noti_header">
        <h2>Listado de Cryptos</h2>
        <button
          className="button-refresh"
          onClick={() => {
            getCryptos();
          }}
        >
          <img
            width="20"
            height="20"
            src="https://icon-library.com/images/refresh-icon-white/refresh-icon-white-1.jpg"
          />
        </button>
      </div>
      {isLoading ? <div class="spinner"></div> : null}

{cryptos.map((moneda, index) => (
  <div key={index} className="crypto_container">
    <div className="crypto_info_container">
        <img width="50" height="50" src={moneda.logo_url}/>
        <div className="cryptoname_container" >
            <p className="cryptoname">{moneda.name}</p>
            <p className="cryptocurrency">{moneda.currency}</p>
        </div>
    </div>
    <div className="crypto_values_container">
      <p className="cryptoprice">${Number(moneda.price).toFixed(3)}</p>
      <p className="cryptoprice">Rank: {moneda.rank}</p>
    </div>
  </div>
))}
    </div>
  );
};

export default ListarCryptos;
