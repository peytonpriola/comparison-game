import React from 'react'
import {connect} from 'react-redux'
import {player1NameAction} from '../actions/actions'
import {Link} from 'react-router-dom'

const NameComponent = (props) => {

  let [player1Name, setPlayer1Name] = React.useState("")
  let [player2Name, setPlayer2Name] = React.useState("")

  const onAddNames = () => {
  setPlayer1Name(document.getElementById("player1name").value)
  setPlayer2Name(document.getElementById("player2name").value)
  }

  return (<div className = "backgroundPicture container-fluid">
    <div className = "titlestrip">
    Sword X Shield X Staff
    <h5> A Rock-Paper-Scissor Game</h5>
    </div>
    <br />
    <h4> Choose player name </h4>
    <input id="player1Name" placeholder="Player 1" onChange={() => player1NameAction(props.name)}/>
    <div className = "space" />
    <input id="player2Name" placeholder="Player2"/>
    <br />
    <Link to="/Player1" type="button" className="btn btn btn-dark">Next</Link>
    <br />
    <div type="button" className="btn btn-dark" data-placement="bottom" title="
    Sword beats Staff || Staff beats Shield || Shield beats Sword">Rules
    </div>
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

export default connect (mapStateToProps, {player1NameAction})(NameComponent)
