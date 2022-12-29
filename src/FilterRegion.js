import React from 'react';
import ReactDOM from 'react-dom/client';


class FilterRegion extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        console.log("proooooooooops");
        console.log(props);

        this.state = {
            items: [],
            DataisLoaded: false,
            regions: this.props.regions
        };
    }

    componentDidMount() {
        console.log("ładuj filtery");
        console.log(this.regions);
        console.log(this.props);
    }

    handleClick = (e) => {
        var region = e.target.dataset.region;
        this.props.onSelectRegion(region);
    }

    render() {
        if (!this.props.regions) {
            return <div> <h5> Checking filters... </h5></div>
        }
        return (
            <>
                <span>Filter by region <i className="fa-solid fa-chevron-down"></i></span>
                <ul className="dropdown-content region-change">
                    {this.props.regions.map((region, index) => (
                        <li onClick={this.handleClick} data-region={region} key={index}>{region}</li>
                    ))
                    }
                </ul>
            </>
        )
    }
}

export default FilterRegion;


/*
const domContainer = document.querySelector('#region-filter');
//
const root = ReactDOM.createRoot(domContainer);
// root.render(<ShoppingList name="Mark"></ShoppingList>);
root.render(<FilterRegion data={"testuje"}/>);*/

// todo: try to remove it from here and trigger directly from index.js
