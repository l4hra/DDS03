import { useEffect, useState} from 'react'
import AbreviaData from './AbreviaData'
import AbreviaInstrutor from './AbreviaInstrutor'
import AbreviarUndCurricular from './AbreviarUndCurricular'
import AbreviaAmbiente from './AbreviaAmbiente'

function TabelaAulas() {
    const [aulas, setAulas] = useState([])

    useEffect(()=>{
        carregarAulas()
    }, [])

    function carregarAulas() {
        setAulas([
            {
                "id": 1300,
                "data": "2024-08-29T03:00:00.000Z",
                "data_hora_inicio": "2024-08-29T21:00:00.000Z",
                "data_hora_fim": "2024-08-30T01:00:00.000Z",
                "turma": "EMP-NBM-03",
                "instrutor": "JOEL HERBERT BARBOSA SILVA",
                "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
                "ambiente": "VTRIA-3-SALA-3004",
                "chave": null
            },
            {
                "id": 1280,
                "data": "2024-08-29T03:00:00.000Z",
                "data_hora_inicio": "2024-08-29T21:00:00.000Z",
                "data_hora_fim": "2024-08-30T01:00:00.000Z",
                "turma": "UMO-MBMM-03",
                "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
                "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
                "ambiente": "VTRIA-EXTER-EXTERNO",
                "chave": null
            },
            {
                "id": 1326,
                "data": "2024-08-29T03:00:00.000Z",
                "data_hora_inicio": "2024-08-29T21:30:00.000Z",
                "data_hora_fim": "2024-08-30T01:00:00.000Z",
                "turma": "HTC-MEC-4-92",
                "instrutor": "AFONSO DE JESUS CORDEIRO",
                "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
                "ambiente": "VTRIA-3-LAB-3003",
                "chave": null
            }
        ])
        console.log(aulas)
    }

    return (
    <div>
      <table>
        <thead>
            <tr>
                <td>Inicio</td>
                <td>Fim</td>
                <td>Turma</td>
                <td>Instrutor</td>
                <td>Unidade Curricular</td>
                <td>Ambiente</td>
            </tr>
        </thead>
        <tbody>
            {aulas.map((aula)=>(
                <tr>
                    <td>{<AbreviaData data={aula.data_hora_inicio}/>}</td>
                    <td>{<AbreviaData data={aula.data_hora_fim}/>}</td>
                    <td>{aula.turma}</td>
                    <td>{<AbreviaInstrutor instrutor={aula.instrutor}/>}</td>
                    <td>{<AbreviarUndCurricular unidadeCurricular={aula.unidade_curricular}/>}</td>
                    <td>{<AbreviaAmbiente ambiente={aula.ambiente}/>}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TabelaAulas
