import React from 'react';

import ShowIndex from './show_index';
import ShowMap from './show_map';

const Search = ({ shows, updateFilter }) => (
    <div className="search">
        <ShowMap shows={shows} updateFilter={updateFilter} />
        <ShowIndex shows={shows} />
    </div>
);

export default Search;