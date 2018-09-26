import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStatus extends Component {
strength() {
  let strength = 0;
  this.props.heros.forEach(item => {
    strength += item.strength;
  });
  return strength;
}

intelligence() {
  let intelligence = 0;
  this.props.heros.forEach(item => {
    intelligence += item.intelligence;
  });
  return intelligence;
}

speed() {
  let speed = 0;
  this.props.heros.forEach(item => {
    speed += item.speed;
  });
  return speed;
}

totalStatus() {
  const totalPoints = this.strength() + this.intelligence() + this.speed();
  return totalPoints;
}

  render() {
    return (
      <div>
        <h4>Squad Status</h4> 
        {
          this.totalStatus() === 0 ? null :
        
        <ul className="list group">
          <li className="list-group-item">
            <strong>
              Overall Strength: 
            </strong>
            {' '}
            {
              this.strength()
            }
          </li>
          <li className="list-group-item">
            <strong>
              Overall Intelligence: 
            </strong>
            {' '}
            {
              this.intelligence()
            }
          </li>
          <li className="list-group-item">
            <strong>
              Overall Speed: 
            </strong>
            {' '}
            {
              this.speed()
            }
          </li>
        </ul>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    heros: state.heros
  }
}

export default connect(mapStateToProps, null) (SquadStatus);