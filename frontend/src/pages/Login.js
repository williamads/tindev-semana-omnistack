import React, { useState } from 'react';
import './Login.css';

import logo from '../assets/logo.svg';
import api from '../services/api';

export default function Login({ history }){
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault(); // bloqueia o evento padrão (redirecionamento para outra página)

        const response = await api.post('/devs', {
            username, // username: username (short sintaxe)
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input 
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}