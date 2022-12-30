import React, {useState} from "react";

class InputSearch extends React.Component {

    constructor(props) {
        super(props);
        console.log("proooooooooops");
        console.log(props);

        this.state = {
            query: ""
        };
    }


    handleSearch = (e) =>
    {
        console.log(e.target.value);
        let inputVal = e.target.value;
        this.props.onInputType(inputVal);
        this.setState({
            query: inputVal
        })
    }
    render() {
        return(
            <div className="input-group">
                <i className="fa-solid fa-search"></i>
                <input id="search" type="text" placeholder="Search for a country" onChange={this.handleSearch}/>
            </div>
        )
    }
}

export default InputSearch;

