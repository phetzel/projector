import React from 'react';

class ShowDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { show } = this.props;

        const showList = show ? (
            <ul className="show-detail-list">
                <li>Description: {show.desc}</li>
                <li>Description: {show.date}</li>
            </ul>
        ) : null;

        return (
            <div>
                {showList}
            </div>
        )
    }
}

export default ShowDetail;