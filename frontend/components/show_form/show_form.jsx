import React from 'react';
import { withRouter } from 'react-router';

import Calendar from 'react-calendar';

class ShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng };

        this.state = {
            movie_id: '',
            time: '10:00:00',
            date: new Date(),
            desc: '',
            lat: this.coords.lat,
            lng: this.coords.lng
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
        this.getAddress();
    }


    getAddress() {
        const { lat, lng } = this.props;
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${window.googleAPIKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ address: data.results[0].formatted_address });
            })
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
        });
    }

    hoursOptions() {
        let arr = [];

        for (let i = 1; i < 13; i++) {
            arr.push(`${i}`);
        }

        return arr;
    }

    minutesOptions() {
        let arr = [];

        for (let i = 0; i < 60; i++) {
            if (i < 10) {
                arr.push(`0${i}`);
            } else {
                arr.push(`${i}`);
            }
        }

        return arr;
    }

    updateTime(field) {
        const { time } = this.state;
        let timeArr = time.split(':');

        console.log(time);

        return e => {
            if (field === 'hours') {
                timeArr[0] = e.target.value;
            } else if (field === 'minutes') {
                timeArr[1] = e.target.value;
            } else if (field === "ap") {
                if (e.target.value === "am" && timeArr[0] > 12) {
                    timeArr[0] = parseInt(timeArr[0]) - 12;
                }

                if (e.target.value === "pm" && timeArr[0] < 12) {
                    timeArr[0] = parseInt(timeArr[0]) + 12;
                }
            }

            this.setState({
                time: timeArr.join(':')
            });
        }
    }

    updateDate(date) {
        this.setState({date});
    }


    updateMovie(e) {
        this.setState({ movie_id: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.createShow(this.state)
            .then(this.navigateToSearch);
    }

    
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="errors">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        const { date, desc, time}  = this.state;
        const { movies, openModal } = this.props;

        const hours = this.hoursOptions();
        const minutes = this.minutesOptions();


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
                        <label className="show-time">
                            Time
                            <br/>

                            <div className="show-time-input">
                                <select onChange={this.updateTime('hours')} defaultValue="10">
                                    {
                                        hours.map(h => (
                                            <option value={h} key={h}>{h}</option>
                                        ))
                                    }
                                </select>

                            :

                            <select onChange={this.updateTime('minutes')}>
                                    {
                                        minutes.map(m => (
                                            <option value={m} key={m}>{m}</option>
                                        ))
                                    }
                                </select>

                                <select onChange={this.updateTime('ap')}>
                                    <option value="am" defaultValue >AM</option>
                                    <option value="pm">PM</option>
                                </select>
                            </div>
                        </label>

                        <div className="show-form-movie-container">
                            <label>Select A Movie</label>
                            
                                <div className="show-form-movie">
                                    <select onChange={(e) => this.updateMovie(e)} required>
                                        <option value="" disabled selected={true}>Select A Movie</option>
                                        {movies.map((movie, idx) => (
                                            <option value={movie.id} key={idx}>{movie.title}</option>
                                        ))}
                                    </select>

                                    <p>Or</p>

                                    <button onClick={() => openModal()}>Add A New Movie</button>
                                </div>
                        </div>

                    </div>

                    <div className="show-form-right">
                        <label className="show-field">
                            Additional Venue Details
                            <br />
                            <textarea
                                type="textfield"
                                value={desc}
                                onChange={this.update('desc')}
                                className="show-field"
                                cols="30"
                                rows="16"
                            />
                        </label>

                    </div>

                </form>

                {this.renderErrors()}

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