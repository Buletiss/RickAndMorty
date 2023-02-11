import React, { useEffect, useState } from "react";
import Logo from "../../assets/logosemfundo.png";
import api from "../../services/index";

import "./styless.css";

export default function Menu() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get("./");

      setPersonagens(response.data);
    }
    load();
  }, []);

  console.log(personagens);
  return (
    <>
      <body>
        <header>
          <nav className="Nav">
            <img src={Logo} alt="Logo" />

            <ul className="Menu">
              <li>Docs</li>
              <li>About</li>
              <p>Help US</p>
            </ul>
          </nav>

          <div className="Text">
            <h1>Rick and Morty</h1>
          </div>
        </header>
        <main className="main">
          <div className="div">
            {personagens.map((personagem) => (
              <div className="info">
                <img src={personagem.image} alt="imagem de um personagem" />
                <div className="box">
                  <h1>{personagem.name}</h1>
                  <span style={{ display: "flex" }}>
                    {personagem.isAlive === 0 ? (
                      <>
                        <span className="green"></span>
                        {personagem.status} - {personagem.species}
                      </>
                    ) : personagem.isAlive === 1 ? (
                      <>
                        <span className="red"></span>
                        {personagem.status} - {personagem.species}
                      </>
                    ) : (
                      <>
                        <span className="grey"></span>
                        {personagem.status} - {personagem.species}
                      </>
                    )}
                  </span>
                  <p>{personagem.gender}</p>
                  <p>{personagem.origin.name}</p>
                  <p></p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </body>
    </>
  );
}
