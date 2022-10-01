import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Medico1 from './img/medico1.jpg'

const App = () => {

    const style =() => {
        return {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            width: '75vh',
            margin: 'auto',
            marginTop: '20',
            borderRadius: '25',
            padding: '10'
        }
    }

    const medicos = [
        {
            nome: 'Dra. Julia Ferreira',
            imagem: Medico1
        },
        {
            nome: 'Dra. Isabel Fernandes',
            imagem: process.env.PUBLIC_URL + './medico2.jpg'
        },
        {
            nome: 'Dra. Natalia Campos',
            imagem: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

    return(
        <div style={style()}>
            <h1 className='title'>Profissionais da Saude</h1>
            <div style={{backgroundColor: '#ddd', display: 'flex', justifyContent: 'space-around', borderRadius: '25px', padding: '10'}}>

                {medicos.map (medico => {
                    return(
                        <div className="card">
                            <div className="card-img">
                                <img src={medico.imagem} alt="imagemMedico" />
                            </div>
                            <p className='card-title'>{medico.nome}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)