import React from 'react';
import { withRouter } from 'react-router';

class ShowForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng };

        this.state = {
            movie_id: "1",
            date: '',
            desc: '',
            lat: this.coords.lat,
            lng: this.coords.lng
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
    }

    navigateToSearch() {
        this.props.history.push('/');
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createShow(this.state);
        this.navigateToSearch();
    }

    render() {
        const { date, desc, lat, lng } = this.state;

        return (
            <div className="show-form-container">
                
                <form className="show-form" onSubmit={this.handleSubmit}>
                    

                    <label className="show-field">
                        Date
                        <input 
                            type="text" 
                            value={date}
                            onChange={this.update('date')}
                            className="show-field" 
                        />
                    </label>

                    <br/>

                    <label className="show-field">
                        Description
                        <input
                            type="text"
                            value={desc}
                            onChange={this.update('desc')}
                            className="show-field"
                        />
                    </label>

                    <br/>

                    <label className="show-field">
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
                    </label>

                    <br/>

                    <input 
                        type="submit"
                        className="create-show"
                        value="Create a show" 
                    />
                </form>

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