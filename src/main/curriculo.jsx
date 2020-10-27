import React, { useState } from 'react'

function PegaDoLocalStorage(chave) {
  const valorDoLocalStorage = localStorage.getItem(chave)
  return JSON.parse(valorDoLocalStorage) || {}
}

function ColocaNoLocalStorage(chave, valor) {
  const valorComoString = JSON.stringify(valor)
  localStorage.setItem(chave, valorComoString)
}

function salvaPessoa() {
  ColocaNoLocalStorage('usuario', pessoa)
}

function pessoa() {
    
  alteraPessoa(novoEstado)

}

function  Curriculo () {

  const usuario = PegaDoLocalStorage('usuario')
  const [usuario, alteraPessoa] = useState(usuario || {})
  
  return <div>

  <ul> 
    
    <li>
      <h1>Nicolas Leonardi Bica</h1>
    </li>
      
    <li>
      <h2>Dados Pessoais</h2>
      <p>Nome Completo: Nicolas Leonardi Bica</p>
      <p>Data de Nascimento: 30/09/2005</p>
      <p>Cidade: São Leopoldo</p>
      <p>Estado: RS</p>
      <p>Idade: 15 Anos</p>
    </li>
    
    <li>
      <h2>Formação</h2>
      <p>Cursando Ensino Fundamemntal</p>
    </li>
    
  </ul> 

      <button type="button" onClick={salvaPessoa} >Salvar</button>
      
  </div>
}

export default curriculo