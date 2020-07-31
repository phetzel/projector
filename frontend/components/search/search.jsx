import React from 'react';

import ShowIndex from './show_index';
import ShowMap from './show_map';
import FilterForm from './filter_form';

const Search = ({ shows, updateFilter }) => (
    <div className="search">
        <ShowMap shows={shows} updateFilter={updateFilter} single={false}/>
        <FilterForm updateFilter={updateFilter} />
        <ShowIndex shows={shows} />
    </div>
);

export default Search;