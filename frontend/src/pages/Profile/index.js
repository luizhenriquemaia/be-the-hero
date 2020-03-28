import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
// External Services
import api from '../../services/api'
// Styles
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { FiPower, FiTrash2 } from 'react-icons/fi'

function Profile() {
    const [incidents, setIncidents] = useState([])
    const history = useHistory()
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName')
    // useEffect serve para disparar uma função em um determinado momento, exemplo: Quando o elemento é mostrado em tela
    // esse array é um array de dependências ou seja toda vez que os elemtnos dele mudarem a função será executada de novo
    // então se deixar esse array vazio ele vai executar uma única vez, ou nesse caso colocar um ongId para ficar mais correto
    useEffect(() => {
        async function fetchProfile() {
            const response = await api.get('profile', { 
                headers: { Autorization: ongId, }})
            setIncidents(response.data)
        }
        fetchProfile()
    }, [ongId])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                // passing the authorization to our header for security
                headers: { Autorization: ongId, }})
            // delete element from template
            setIncidents(incidents.filter(incident => incident.id !== id))
        }
        catch (err) {
            alert('Erro ao deletar o caso, tente novamente.')
        }
    }

    function handleLogout () {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="/incidents/new" >Cadastrar novo caso</Link>
                <button  onClick={handleLogout} type="button">
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
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}                
            </ul>
        </div>
    )
}


export default Profile