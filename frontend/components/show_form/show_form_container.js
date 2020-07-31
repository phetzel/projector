import { connect } from 'react-redux';

import { createShow } from '../../actions/show_actions';
import ShowForm from './show_form';

const mSTP = (state, { location }) => ({
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng')
});

const mDTP = dispatch => ({
    createShow: show => dispatch(createShow(show))
});

export default connect(
    mSTP,
    mDTP
)(ShowForm);