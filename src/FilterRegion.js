import React from 'react';
import ReactDOM from 'react-dom/client';


class FilterRegion extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        console.log("proooooooooops");
        console.log(props);

        this.state = {
            // items: this.props.items,
            // DataisLoaded: false,
            regions: this.props.regions,
            selRegion: null
        };
    }

    componentDidMount() {
        console.log("ładuj filtery");
        console.log(this.props.regions);
        console.log(this.props);
    }

    handleClick = (e) => {
        var region = e.target.dataset.region;
        console.log("Filter");
        console.log(this.state);
        this.props.onSelectRegion(region);
        this.setState({
            selRegion: region
        })
    }

    render() {
        if (!this.props.regions) {
            return <div> <h5> Checking filters... </h5></div>
        }
        return (
            <>
                <span>Filter by region <i className="fa-solid fa-chevron-down"></i></span>
                <ul className="dropdown-content region-change">
                    <li onClick={this.handleClick} data-region={"all"} key={-100}>All regions</li>
                    {this.props.regions.map((region, index) => (
                        <li onClick={this.handleClick} data-region={region} key={index} className={(this.state.selRegion === region ? "active" : "")} >{region}</li>
                    ))
                    }
                </ul>
            </>
        )
    }
}

export default FilterRegion;


