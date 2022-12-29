import ReactDOM from "react-dom/client";
import React, {useState} from "react";
import FilterRegion from "./FilterRegion";
import {findAllByDisplayValue} from "@testing-library/react";

let regions = null;


class FlagList extends React.Component {

    constructor(props) {

        super(props);
        console.log(props);
        console.log("props.flags");
        console.log(props.flags);


        this.state = {
            items: this.props.flags,
            DataisLoaded: false,
            // region: this.props.region
        };
    }


    // ComponentDidMount is used to
    // execute the code
/*    componentDidMount() {
        fetch(
            "https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((json) => {
                console.log("ładuje");
                console.log(json);
                this.setState({
                    items: json,
                    DataisLoaded: true,

                });


                //todo: kraje niepotrzebne
                /!*this.regions = json.reduce((countries, {continents}) => {
                    if (!countries[continents]) countries[continents] = [];
                    // countries[continents].push(continents);
                    return countries;
                }, {});
                console.log(this.regions);*!/

                regions = json.map(e => e['region'])

                    // store the keys of the unique objects
                    .map((e, i, final) => final.indexOf(e) === i && i)

                    // eliminate the dead keys & store unique objects
                    .filter(e => json[e]).map(e => json[e]['region']);

                console.log("this.regions teeest");
                console.log(regions);

                const domContainer1 = document.querySelector('#region-filter');
//
                const root1 = ReactDOM.createRoot(domContainer1);
// root.render(<ShoppingList name="Mark"></ShoppingList>);
                root1.render(<FilterRegion regions={regions}/>);
            })


    }*/

    componentDidMount() {

        console.log("odpal liste");
        // this.setState({
        //     items: this.props.flags,
        //     DataisLoaded: true,
        // });

    }

    render() {
        if (!this.props.flags) {
            return <div> <h1> Loading Flags.... </h1></div>
        }

        // const {DataisLoaded, items} = this.state;
        // if (!DataisLoaded) return <div>
        //     <h1> Loading Flags.... </h1></div>;

        return (
            <div id="flag-list">
                {
                    this.props.flags.map((item, index) => (
                        <div id={item.cca2} className="flag-item" key={index}>
                            <div className="flag">
                                <picture>
                                    <img src={item.flags.png} alt=""/>
                                </picture>
                                <div className="info">
                                    <h3>{item.name.common}</h3>

                                    <p><span><b>Population</b></span>: {item.population}</p>
                                    <p><span><b>Region</b></span>: {item.region}</p>
                                    <p><span><b>Capital</b></span>: {item.capital}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }



}

export default FlagList;