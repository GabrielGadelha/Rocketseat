import React, {useState, useEffect} from 'react';
import'./style.css';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

function NewIncident(){

const history = useHistory();
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [value, setValue] = useState('');
const ongId = localStorage.getItem('ongId')
    async function handleNewIncident(e){
        e.preventDefault();

        const data = {title,
              description,
              value,};
     try{
         await api.post('incidents',data,{
             headers:{
                 authorization: ongId,
             }
         });

        history.push('/profile');

    } catch (err){alert('Erro no cadastro, tente novamente');}
    }


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro Novo Caso</h1>
                    <p> Descreva o caso detalhamente. </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                       Voltar
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    type="text" placeholder="Título do caso"/>
                    <textarea
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    placeholder="Descrição"/>
                    <input
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                    type="text" placeholder="Valor em Reais"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>


        </div>
    );

};

export default NewIncident;

