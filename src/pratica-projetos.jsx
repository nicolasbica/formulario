import React, { useState } from 'react';

function Projeto() {

const buscando = localStorage.getItem('projeto')
const projetoComoObjeto = JSON.parse(buscando) || {}

const [projeto, setProjeto] = useState(projetoComoObjeto)

function handleChange(evento) {
    const copia = { ...projeto }
    copia[evento.target.name] = evento.target.value
    setProjeto(copia)
}

function salvarProjeto() {
    const projetoComoTexto = JSON.stringify(projeto)
    localStorage.setItem('projeto', projetoComoTexto)
}

return <form>
    <h1>Cadastro</h1>

    <input onChange={handleChange} type="text" name="nome" placeholder="nome"/>
    <input onChange={handleChange} type="text" name="tecnologia" placeholder="tecnologia"/>
    <input onChange={handleChange} type="text" name="descricao" placeholder="descrição"/>

<p>Nome: {projeto.projeto}</p>
<p>tecnologia: {projeto.tecnologia}</p>
<p>descricao: {projeto.descricao}</p>

<button> type='button' onClick={salvarProjeto}salvar</button>
</form>
}