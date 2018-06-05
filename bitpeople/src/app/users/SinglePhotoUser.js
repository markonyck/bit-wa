import React from "react"

const SinglePhotoUser = (props) => {
    // const { name, email, dob, photoSrc } = props.myUser;
    const name = props.myUser.name;
    const email = props.myUser.hideEmail()
    const dob = props.myUser.formatDate();
    const photoSrc = props.myUser.photoLarge;

    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={photoSrc} alt="pic of user"/>
                    <span className="card-title">{name}</span>
                </div>
                <div className="card-content">
                    <p>{email}</p>
                    <p>Birth date: {dob}</p>
                </div>
            </div>
        </div>
    )
}

export { SinglePhotoUser }



