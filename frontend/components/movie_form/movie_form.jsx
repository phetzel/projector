import React from 'react';

const GENRES = [
    'Action',
    'Comedy',
    'Documentary',
    'Horror'
]

class MovieForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            run_time: '0:00',
            desc: '',
            genre: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    updateGenre(e) {
        this.setState({ genre: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMovie(this.state)
            .then(this.props.closeModal);
    }

    updateTime(field) {
        const { run_time } = this.state;
        let timeArr = run_time.split(':');


        return e => {
            if (field === 'hours') {
                timeArr[0] = e.target.value;
            } else if (field === 'minutes') {
                timeArr[1] = e.target.value;
            } 

            this.setState({
                run_time: timeArr.join(':')
            });
        }
    }

    hoursOptions() {
        let arr = [];

        for (let i = 0; i < 13; i++) {
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

    render() {
        const hours = this.hoursOptions();
        const minutes = this.minutesOptions();

        return (
            <div className="movie-form-container">
                <form className="movie-form" onSubmit={this.handleSubmit}>
                    <h1>Create Movie</h1>

                    <label>Title
                        <input type="text"
                            className="movie-input"
                            onChange={this.update('title')}
                        />
                    </label>

                    <div className="movie-form-mid">
                        <label>Run Time

                            <div className="movie-time">
                                <select onChange={this.updateTime('hours')}>
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
                            </div>

                        </label>    

                        <label>Genre
                            <select onChange={(e) => this.updateGenre(e)}>
                                <option value="" disabled selected={true}>Select A Genre</option>
                                {
                                    GENRES.map((genre, idx) => (
                                        <option value={genre} key={idx}>{genre}</option>
                                    ))
                                }
                            </select>
                        </label>                    
                    </div>

                    <label>Movie Description
                        <br/>
                        <textarea
                            onChange={this.update('desc')}
                            row="10" col="60"
                        />
                    </label>

                    <br/>

                    {this.renderErrors()}

                    <input type="submit" className="movie-submit" value="Create Movie"/>
                </form>

            </div>
        )
    }
}

export default MovieForm;