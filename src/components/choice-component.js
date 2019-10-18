import React from 'react'
import {Link} from 'react-router-dom'


const ChoiceComponent = (props) => {
return <div>
              <h2>{props.player1Name} Pick Your Weapon</h2>
              <div className="card-deck">
              <div className="col-sm-2"></div>
              <div className="col-lg-3">
              <div className="card border-info mb-3">
                <h3 class="card-header">Sword</h3>
                <div className="card-body">
                  <img className="card-img-top" src="https://image.flaticon.com/icons/svg/744/744729.svg" padding="30px"></img>
                  <button type="button" className="btn btn btn-dark" onClick={props.chooseSword}>Use Sword</button>
                </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div className="card border-info mb-3">
                <h3 class="card-header">Shield</h3>
                <div className="card-body">
                  <img className="card-img-top" src="https://image.flaticon.com/icons/svg/1065/1065535.svg"></img>
                  <button type="button" className="btn btn btn-dark" onClick={props.chooseShield}>Use Shield</button>
              </div>
              </div>
              </div>
              <div className="col-lg-3">
              <div class="card border-info mb-3">
              <h3 class="card-header">Staff</h3>
              <div class="card-body">
                <img className="card-img-top" src="https://image.flaticon.com/icons/svg/1067/1067730.svg"></img>
                <button type="button" className="btn btn btn-dark" onClick={props.chooseStaff}>Use Staff</button>
              </div>
              </div>
              </div>
              </div>
              <h4>{props.player1Name} picked {props.weaponChoice}</h4>
            </div>


          }

          export default ChoiceComponent
