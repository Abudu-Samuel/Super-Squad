import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterList extends Component {
  render() {
    console.log("**********", this.props)
    return(
      <div>
        <h4>Characters</h4>
        <ul>
          {
            this.props.characters.map(character => {
              return(
              <li key={character.id}>
                {character.name}
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
    characters: state.characters
  }
}

export default connect(mapStateToProps, null) (CharacterList);