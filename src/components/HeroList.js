import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions/index';

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {
            this.props.heros.map(hero => {
             return (
              <li key={hero.id} className="list-group-item">
                <div className="list-item">
                  {hero.name}
                </div>
                <div className="right-button" onClick={() => {
                  this.props.removeCharacterById(hero.id)
                }}>
                  x
                </div>
              </li>
             )
            })
          }
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    heros: state.heros
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ removeCharacterById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);