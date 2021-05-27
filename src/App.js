import React, { Component } from 'react'

import Img from './assets/crono.jpeg'
import './estilo.css'

class App extends Component {
    constructor (props) {
      super(props)
      this.state = {
        numero: 0,
        botaotxt: 'VAI'
      }
      this.timer = null
      this.vai = this.vai.bind(this)
      this.limpar = this.limpar.bind(this)
    }

    vai() {
//para acessar a state botaotxt
      let state = this.state
//se o timer for diferente de null, se tiver algo dentro do timer
      if(this.timer !== null) {
//entao pausa o timer(clear), e colocar pra vai
        clearInterval(this.timer)
        this.timer = null
        state.botaotxt = 'VAI'
//senao
      } else {
      this.timer = setInterval(() => {
        let state = this.state
        //
        state.numero += 0.1
        this.setState(state)
      }, 100)
      state.botaotxt = 'PAUSAR'
    }
      this.setState(state)


    }
    limpar() {
      if(this.timer !== null) {
        clearInterval(this.timer)
        this.timer = null
    }
    let state = this.state
    state.numero = 0
    state.botao = 'VAI'
    this.setState(state)
  }
    

    render() {
    return (
      <div className="container">
        <img src={Img} className="imgg" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <di className="areaBtn">
          <a className="botao" onClick={this.vai}>{this.state.botaotxt} </a>
          <a className="botao" onClick={this.limpar}>LIMPAR</a>
        </di>
        </div>
    )
  }
}

export default App