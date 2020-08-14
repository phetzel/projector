import React from 'react';
import { withRouter } from 'react-router';

import Calendar from 'react-calendar';

class ShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng };

        this.state = {
            movie_id: '',
            hr: '',
            min: '',
            sec: '',
            date: new Date(),
            desc: '',
            lat: this.coords.lat,
            lng: this.coords.lng
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
        this.getAddress();
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    navigateToSearch() {
        this.props.history.push('/');
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    updateDate(date) {
        this.setState({date});
    }

    updateMovie(e) {
        this.setState({ movie_id: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createShow(this.state);
        this.navigateToSearch();
    }

    getAddress() {
        const { lat, lng } = this.props;
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${window.googleAPIKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({address: data.results[0].formatted_address});
            })
    }

    render() {
        const { time, date, desc, lat, lng } = this.state;
        const { movies, openModal } = this.props;


        return (
            <div className="show-form-container">
                <h1>Create a Show</h1>

                <p>@   {this.state.address}</p>
                
                <form className="show-form">
                    

                    <label className="show-field">
                        Date
                        <br/>
                        <Calendar 
                            value={date}
                            className={'react-calendar'}
                            onChange={(value, event) => this.updateDate(value)}
                        />
                    </label>

                    <div className="show-form-mid">
                        <label className="show-field">
                            Time
                            <br/>
                        <input
                                type="text"
                                value={time}
                                onChange={this.update('time')}
                                className="show-field"
                                required
                            />
                        </label>

                        <br />

                        <label className="show-field">
                            Additional Venue Details
                            <br/>
                            <textarea
                                type="textfield"
                                value={desc}
                                onChange={this.update('desc')}
                                className="show-field"
                                cols="40"
                                rows="10"
                            />
                        </label>
                    </div>

                    <div className="show-form-right">
                        <label>Select A Movie
                            <br/>
                            <select onChange={(e) => this.updateMovie(e)} required>
                                <option value="" disabled selected={true}>Select A Movie</option>
                                {movies.map((movie, idx) => (
                                    <option value={movie.id} key={idx}>{movie.title}</option>
                                ))}
                            </select>
                        </label>

                        <h6>Or
                            <a onClick={() => openModal()}>Add A New Movie</a>
                        </h6>
                    </div>

                </form>

                <div className="show-form-buttons">
                    <button
                        className="create-button"
                        onClick={this.handleSubmit}>
                        Create Show
                    </button>
                    <button
                        className="back-button"
                        onClick={this.navigateToSearch}>
                        Back to Map
                    </button>
                </div>

            </div>
        )
    }
}

export default withRouter(ShowForm);