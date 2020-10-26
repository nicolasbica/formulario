import React, { useState } from 'react'

function PegaDoLocalStorage(chave) {
    const valorDoLocalStorage = localStorage.getItem(chave)
    return JSON.parse(valorDoLocalStorage) || {}
}

function ColocaNoLocalStorage(chave, valor) {
    const valorComoString = JSON.stringify(valor)
    localStorage.setItem(chave, valorComoString)
}

function Formulario() {

    const usuario = PegaDoLocalStorage('usuario')
    const editando = usuario != null

    const [pessoa, alteraPessoa] = useState(usuario)

    function onChangeSupremo(event) {
        const valor = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const copia = { ...pessoa }
        copia[event.target.name] = valor
        alteraPessoa(copia)
    }

    function salvaPessoa() {
        ColocaNoLocalStorage('usuario', pessoa)
    }



    return <form>
        <input onChange={onChangeSupremo} type="text" placeholder='digite seu nome' name="nome" id="a1" />
        <input onChange={onChangeSupremo} type="number" placeholder='digite sua idade' name="idade" id="a2" />
        <input onChange={onChangeSupremo} type="tel" placeholder='digite seu telefone' name="telefone" id="a3" />
        <input onChange={onChangeSupremo} type="text" placeholder='digite o nome de sua cidade' name="cidade" id="a4" />
        <input onChange={onChangeSupremo} type="email" placeholder='digite seu email' name="email" id="a5" />
        <input onChange={onChangeSupremo} type="checkbox" name="emprego" id="a6" />
        <input onChange={onChangeSupremo} type="date" placeholder='digite sua data de nascimento' name="dataNascimento" id="a7" />

        <p>{editando}</p>

        <p>Meu Nome é: {pessoa.nome}</p>
        <p>Idade : {pessoa.idade}</p>
        <p>Telefone : {pessoa.telefone}</p>
        <p>Cidade : {pessoa.cidade}</p>
        <p>Email : {pessoa.email}</p>
        <p>Nasci em : {pessoa.dataNascimento}</p>


        <button type="button" onClick={salvaPessoa}>Salvar dados</button>


        <div>
            <p>{pessoa.nome} esta atualmente {pessoa.emprego ? 'trabalhando' : 'procurando trabalho'}</p>
        </div>
    </form>
}

export default Formulario
