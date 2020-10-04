import React from 'react';

class UserPhotoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoFile: null,
            photoUrl: null
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { updateUser, user, closeModal } = this.props;

        
        const formData = new FormData();
        formData.append('user[photo]', this.state.photoFile);

        updateUser(formData, user.id)
            .then(closeModal());
    }

    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

        return (
            <div className="user-photo-form-container">
                <h1>Change Avatar Image</h1>
                {preview}

                <form className="user-photo-form"
                    onSubmit={this.handleSubmit}>
                    <input type="file"
                        onChange={this.handleFile}/>
                    <input className="user-photo-form-submit" type="submit"/>
                </form>
            </div>
        )
    }
}

export default UserPhotoForm;
