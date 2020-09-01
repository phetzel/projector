import { connect } from 'react-redux';

import UserShow from './user_show';

const mSTP = (state) => ({
    user: state.entities.users[state.session.id]
});

export default connect(
    mSTP
)(UserShow);

