import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// External Services
import api from '../../services/api'
// Styles
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { FiPower, FiTrash2 } from 'react-icons/fi'

function Profile() {
    const [incidents, setIncidents] = useState([])
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')
    // useEffect serve para disparar uma função em um determinado momento, exemplo: Quando o elemento é mostrado em tela
    // esse array é um array de dependências ou seja toda vez que os elemtnos dele mudarem a função será executada de novo
    // então se deixar esse array vazio ele vai executar uma única vez, ou nesse caso colocar um ongId para ficar mais correto
    /* useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await api.get('profile', {
                    headers:
                        { Autorization: ongId, }
                })
                setIncidents(response.data)
                console.log(useState)
            } catch (err) {
                alert('Putz')
            }
        }
        fetchProfile()
    }, [ongId]) */

    useEffect(() => {
        async function fetchProfile() {
            const response = await api.get('profile', { 
                headers: { Autorization: ongId, }})
            setIncidents(response.data)
            console.log(useState)
        }
        fetchProfile()
    }, [ongId])

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new" >Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{incident.value}</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}                
            </ul>
        </div>
    )
}


export default Profile