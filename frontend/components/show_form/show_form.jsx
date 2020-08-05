import React from 'react';
import { withRouter } from 'react-router';

import Calendar from 'react-calendar';

class ShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng };

        this.state = {
            movie_id: "1",
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

        return (
            <div className="show-form-container">
                <h1>Create a Show</h1>

                <p>{this.state.address}</p>
                
                <form className="show-form">
                    

                    <label className="show-field">
                        Date
                        <Calendar 
                            value={this.state.date}
                            className={'react-calendar'}
                            onChange={(value, event) => this.updateDate(value)}
                        />
                    </label>

                    <div className="show-form-right">
                        <label className="show-field">
                            Time
                            <br/>
                        <input
                                type="text"
                                value={time}
                                onChange={this.update('time')}
                                className="show-field"
                            />
                        </label>

                        <br />

                        <label className="show-field">
                            Description
                            <br/>
                            <textarea
                                type="textfield"
                                value={desc}
                                onChange={this.update('desc')}
                                className="show-field"
                            />
                        </label>
                    </div>

                    {/* <label className="show-field">
                        Lat
                        <input
                            type="text"
                            value={lat}
                            onChange={this.update('lat')}
                            className="show-field"
                        />
                    </label>

                    <br/>

                    <label className="show-field">
                        Lng
                        <input
                            type="text"
                            value={lng}
                            onChange={this.update('lng')}
                            className="show-field"
                        />
                    </label> */}

                </form>

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
        )
    }
}

export default withRouter(ShowForm);