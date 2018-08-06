import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import BuyTickets from "./BuyTickets";

class Films extends React.Component {
  static propTypes = {
    films: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  };
  state = {
    films: this.props.films,
    filmNameArr: []
  };

  render() {
    var filmsCode = this.state.films.map(film => {
      this.state.filmNameArr.push(film.name);
      return (
        <div className="home_film" key={film.code}>
          <div className="film_title">
            <h5>{film.name}</h5>
          </div>
          <img className="home__img" src={film.url} alt={film.name} />
          <div>
            <button className="home__button">Treiler</button>
            <Link to="/buy-tickets">
              <button className="home__button">Tickets</button>
            </Link>
          </div>
          <Route path="/buy-tickets" component={BuyTickets} />
        </div>
      );
    });
    return <div className="home">{filmsCode}</div>;
  }
}
export default Films;