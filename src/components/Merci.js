import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }

    return ComponentWithRouterProp;
}

const Merci = () => {
    let { name } = useParams();
    const [username, setUsername] = useState(name);

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <div className="container">
            <h1 className="text-center my-5">{`Merci ${username} pour votre inscription`}</h1>
            <div className="mb-3">
                <label htmlFor="changeName" className="form-label">
                    <h3>Change name</h3>
                </label>
                <input type="text" className="form-control" id="changeName" value={username} placeholder="" onChange={(event) => handleChange(event)} />
            </div>
        </div>
    );
};

export default withRouter(Merci);
