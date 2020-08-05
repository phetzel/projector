import React from 'react';
import Calendar from 'react-calendar';

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    update(date) {
        this.setState({date});
        this.props.updateFilter('date', date);
    }

    render() {
        return (
            <div className="filter-form">
                <h1>Filters</h1>

                <h6>Date</h6>
                <Calendar 
                    value={this.state.date} 
                    className={'react-calendar'}
                    onChange={(value, event) => this.update(value)} />
                    
            </div>
        )
    }
}
    
export default FilterForm;
