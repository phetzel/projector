import React from 'react';
import Calendar from 'react-calendar';

const GENRES = [
    'Action',
    'Comedy',
    'Documentary',
    'Horror'
]

const TIMES = [
    'Morning',
    'Afternoon',
    'Night'
]

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            genre: null,
            time: null
        }
    }

    updateDate(date) {
        this.setState({date});
        this.props.updateFilter('date', date);
    }

    updateGenre(e) {
        this.setState({ genre: e.currentTarget.value });
        this.props.updateFilter('genre', e.currentTarget.value);
    }

    updateTime(e) {
        this.setState({ time: e.currentTarget.value });
        this.props.updateFilter('time', e.currentTarget.value);
    }



    render() {
        return (
            <div className="filter-form">
                <div className="filter-form-calendar">
                    <h6>Date</h6>
                    <Calendar
                        value={this.state.date}
                        className={'react-calendar'}
                        onChange={(value, event) => this.updateDate(value)} />
                </div>
                <div className="filter-form-dropdown">
                    <div className="filter-form-dropdown-genre">
                        <h6>Genre</h6>
                        <select onChange={(e) => this.updateGenre(e)}>
                            <option value="">Any</option>
                            {
                                GENRES.map((genre, idx) => (
                                    <option value={genre} key={idx}>{genre}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="filter-form-dropdown-time">
                        <h6>Time</h6>
                        <select onChange={(e) => this.updateTime(e)}>
                            <option value="">Any</option>
                            {
                                TIMES.map((time, idx) => (
                                    <option value={time} key={idx}>{time}</option>
                                ))
                            }
                        </select>
                    </div>

                </div>
            </div>
        )
    }
}
    
export default FilterForm;
