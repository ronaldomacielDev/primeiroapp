import React , { useContext } from "react";
import './stylesHeader.css'
import { UserContext } from "../../contexts/userContext";
import { Link, useNavigate } from "react-router-dom";
import  PropTypes  from "prop-types";

function Header({ nome }){

    const {login, setLogin} = useContext(UserContext)
    const navigate = useNavigate();

    return(
        <div>
                <nav>
                        <ul>
                            <Link to='/'>
                                <li>Home</li>
                            </Link>

                            <Link to='/fotos'>
                                <li>Fotos</li>
                            </Link>

                            <Link to='contato' >
                                <li>Contato</li>
                            </Link>
    
                            <li onClick={() => navigate('contato')}>Login</li>
                            <li>{nome}</li>
                           


                        </ul>
                </nav>
        </div>
    )
}

Header.propTypes = {
    nome: PropTypes.string.isRequired
}



export default Header;