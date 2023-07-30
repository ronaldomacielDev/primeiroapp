import React, { lazy } from "react";
import Header from '../../components/header/header';
import Profile from '../../components/profile/profile';
import { Link } from "react-router-dom";


function Home(){
     {/* const produtos = [
            {nome: 'Batedeira', id: 20},
            {nome: 'Ventilador', id: 22},
            {nome: 'Computador', id: 30},
      ]*/}

      return(
            <div>
                  <Header nome="Ronaldo" age={44} active={true} />
                  {/* {produtos.map((produto, index) => (

                        <Link key={index} to={`detalhes/${produto.id}`}>
                              <span style={{ display: 'block'}}>{produto.nome} </span>
                        </Link>
                  ))} */}
                
            </div>
      )
}

export default Home;