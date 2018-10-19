import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import uuidv4 from 'uuid/v4';

class Jokes extends React.Component {
  state = {
    jokes: []
  }
  componentDidMount() {
    axios.get('http://localhost:9000/api/jokes', {
      headers: {
        authorization: Cookies.get('token')
      }
    })
    .then(resp => {
      console.log(resp.data);
      this.setState({jokes: resp.data})
    })
    .catch(error => this.setState({error}));
  }
  render() {
    return (
      <div>
        {
          this.state.jokes.map(joke => {
            return (
              <div style={{border: '1px solid black', padding: '20px'}} key={uuidv4()}>
                <p>Type: {joke.type}</p>
                <p>Setup: {joke.setup}</p>
                <p>Punchline: {joke.punchline}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Jokes;