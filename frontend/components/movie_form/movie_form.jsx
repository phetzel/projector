import React from 'react';

class MovieForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            run_time: '',
            desc: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createMovie(this.state)
            .then(this.props.closeModal);
    }

    render() {
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

                    <br/>

                    <label>Run Time
                        <input type="text"
                            className="movie-input"
                            onChange={this.update('run_time')}
                        />
                    </label>

                    <br/>

                    <label>Movie Description
                        <br/>
                        <textarea
                            onChange={this.update('desc')}
                            row="10" col="60"
                        />
                    </label>

                    <br/>

                    <input type="submit" className="movie-submit" value="Create Movie"/>
                </form>

            </div>
        )
    }
}

export default MovieForm;