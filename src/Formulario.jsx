import React, { useState } from 'react'

function Formulario() {
    const [pessoa, alteraPessoa] = useState({})

    function onChangeUm(event) {
        alteraPessoa({
            ...pessoa,
            nome: event.target.value
        })
    }

    function onChangeDois(event) {
        alteraPessoa({
            ...pessoa,
            idade: event.target.value
        })
    }

    function onChangeTres(event) {
        alteraPessoa({
            ...pessoa,
            telefone: event.target.value
        })
    }

    function onChangeQuatro(event){
        alteraPessoa({
       ...pessoa,
            cidade: event.target.value
        })
    }

    function onChangeCinco(event){
        alteraPessoa({
            ...pessoa,
            email: event.target.value
        })
    }

    function onChangeSeis(event){
        alteraPessoa({
            emprego: event.target.checked,
        })
    }

    function onChangeSete(event){
        alteraPessoa({
            ...pessoa,
            dataNascimento: event.target.value
        })
    }

    return <form> 
        <input onChange={onChangeUm} type="text" placeholder='digite seu nome' name="nome" id="1" />
            <input onChange={onChangeDois} type="number" placeholder='digite sua idade' name="idade" id="2" />
                <input onChange={onChangeTres} type="tel" placeholder='digite seu telefone' name="telefone" id="3" />
                    <input onChange={onChangeQuatro} type="text" placeholder='digite o nome de sua cidade' name="cidade" id="4" />
                        <input onChange={onChangeCinco} type="email" placeholder='digite seu email' name="email" id="5" />
                            <input onChange={onChangeSeis} type="checkbox" name="emprego" id="6" />
                                <input onChange={onChangeSete} type="text" placeholder='digite sua data de nascimento' name="dataNascimento" id="7" />


        <p>Nome {pessoa.nome}</p>
            <p>Idade {pessoa.idade}</p>
                <p>Telefone {pessoa.telefone}</p>
                    <p>Cidade {pessoa.cidade}</p>
                        <p>Email {pessoa.email}</p>
                            <p>Nasci {pessoa.dataNascimento}</p>

    </form>
}

export default Formulario
