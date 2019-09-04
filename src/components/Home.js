import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
// import M from 'materializecss'

class Home extends Component {
  state = {
    list: [],
    randomShow: []
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=69c1a45744d9a7753c8d244cd65b2c65&language=en-US&page=1"
      )
      .then(res => {
        this.setState({
          list: res.data.results,
          randomShow:
            res.data.results[
              Math.ceil(Math.random() * res.data.results.length - 1)
            ]
        })
        // console.log(this.state.randomShow)
      })
  }

  render() {
    return (
      <div>
        <h1 className='title'>Movie API Thing</h1>
        <hr></hr>
        <div class='random-show-container'>
          <h3 className='title'>Random TV-Show</h3>
          <div className='card-container card top-show'>
            <img
              className='card-image top-show-image'
              src={`https://image.tmdb.org/t/p/w500/${this.state.randomShow.poster_path}`}
            />
            <h3 className='card-title'>{this.state.randomShow.name}</h3>
          </div>
        </div>
        <hr></hr>

        <ul className='card-container'>
          {this.state.list.map((movie, i) => {
            return (
              <li className=' card text-decoration rows' key={i}>
                <Link to={`/shows/${movie.id}`}>
                  <img
                    className='image-container card-image'
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <h3 className='card-title'>{movie.name}</h3>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Home
