import React, { useState } from 'react'

function PegaDoLocalStorage(chave) {
    const valorDoLocalStorage = localStorage.getItem(chave)
    return JSON.parse(valorDoLocalStorage)
  }
  
function ColocaNoLocalStorage(chave, valor) {
    const valorComoString = JSON.stringify(valor)
    localStorage.setItem(chave, valorComoString)
  }

  function salvaPessoa() {
    ColocaNoLocalStorage('usuario', pessoa)
}

function curriculo () {

  const usuario = getFromLocalStorage('usuario')
  const [usuario, alteraPessoa] = useState(usuario || {})

<div>
  <h1> Oi </h1>
</div>

export default curriculo