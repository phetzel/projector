import React from 'react';

import ShowIndex from './show_index';
import ShowMap from './show_map';

const Search = ({ shows, fetchShows }) => (
    <div className="search">
        <ShowMap shows={shows} />
        <ShowIndex shows={shows} fetchShows={fetchShows} />
    </div>
);

export default Search;