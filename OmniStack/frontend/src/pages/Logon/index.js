import React, { useState } from 'react';
import './style.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import {FiLogIn} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

function Logon() {
    const history = useHistory();
    const [id,setId] = useState('');
    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session',{id});
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);
            history.push('/profile');
        } catch (err){alert('Erro no Login, tente novamente');}
    }
    return (
        <div className="logon-container">

            <section className="form">

                <img src={logoImg} alt="Be The Hero!"/>

                <form onSubmit={handleLogin}>
                    <h1> Faça seu logon </h1>
                    <input
                     placeholder="Seu id"
                    value={id}
                        onChange={e=>setId(e.target.value)}/>
                    <button typy="submit" className="button"> Entrar </button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        não tenho cadastro
                    </Link>

                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>

        </div>
    );
}
export default Logon;

