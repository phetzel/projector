import React from 'react';

class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleAdd() {
        const { user, befriend, unfriend } = this.props;
            
        befriend(user.id);
    }

    handleRemove() {
        const { user, befriend, unfriend } = this.props;
            
        unfriend(user.id);
    }

    render() {
        const { user, friended } = this.props;
        console.log(friended);
        const friend = friended ? (
            <button onClick={this.handleRemove}>Remove</button>
        ) : (
            <button onClick={this.handleAdd}>Add</button>
        )

        return (
            <li>
                {user.email}
                {friend}
            </li>
        )
    }
};

export default UserIndexItem;