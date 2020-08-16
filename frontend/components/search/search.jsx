import React from 'react';

import ShowMap from './show_map';
import FilterForm from './filter_form';
import Directions from './directions';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pane: 1
        }
    }

    setPane(num) {
        this.setState({pane: num});
        console.log(num);
    }

    render() {
        const { shows, updateFilter, fetchMovies, userId } = this.props;

        const paneDisplay = this.state.pane === 1 ? (
            <Directions />
        ) : <FilterForm updateFilter={updateFilter} />;

        const active = this.state.pane === 1 ? ["active", "not-active"] : ["not-active", "active"];

        return (
            <div className="search">

                <ShowMap
                    shows={shows}
                    updateFilter={updateFilter}
                    single={false}
                    fetchMovies={fetchMovies} 
                    userId={userId}/>

                <div className="search-panes">
                    <ul className="search-panes-headers">
                        <li 
                            onClick={() => this.setPane(1)} 
                            className="directions-tab"
                            id={active[0]}>
                            Directions
                        </li>

                        <li 
                            onClick={() => this.setPane(2)} 
                            className="filters-tab"
                            id={active[1]}>
                            Filters
                        </li>
                    </ul>
                    <div className="search-panes-content">
                        {paneDisplay}
                    </div>
                </div>

            </div>
        )
    }
};


export default Search;