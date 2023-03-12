import React from "react";

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <h1>My Footer</h1>
                {this.props.paragraf()}
            </div>
        )
    }
}

export default Footer;