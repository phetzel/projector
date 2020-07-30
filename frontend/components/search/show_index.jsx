import React from 'react';

class ShowIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { shows } = this.props;
        console.log(shows);

        return (
            <div className="show-index">
                <h1>Showings</h1>
                <ul>
                    {shows.map(show => (
                        <li>{show.id}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default(ShowIndex);