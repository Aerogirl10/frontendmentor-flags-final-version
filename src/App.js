import './styles/main.scss';
import React, {useState} from "react";
import FlagList from "./FlagList";
import ReactDOM from 'react-dom/client';
import FilterRegion from "./FilterRegion";

let regions = null;
let flags = null;
// const domContainer1 = document.querySelector('#flag-list-container');
const domFilterContainer = document.querySelector('#region-filter');


export default class App extends React.Component {

    // const [selRegion, setRegion] = useState("");


    constructor(props) {

        super(props);
        console.log(props);


        this.state = {
            items: [],
            DataisLoaded: false,
            // region: this.props.region
        };
    }

    componentDidMount() {

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

//
//                 const root1 = ReactDOM.createRoot(domContainer1);
// // root.render(<ShoppingList name="Mark"></ShoppingList>);
//                 root1.render(<FlagList flags={json}/>);


                //todo: kraje niepotrzebne
                /*this.regions = json.reduce((countries, {continents}) => {
                    if (!countries[continents]) countries[continents] = [];
                    // countries[continents].push(continents);
                    return countries;
                }, {});
                console.log(this.regions);*/

                flags = json;
                regions = json.map(e => e['region'])

                    // store the keys of the unique objects
                    .map((e, i, final) => final.indexOf(e) === i && i)

                    // eliminate the dead keys & store unique objects
                    .filter(e => json[e]).map(e => json[e]['region']);

                console.log(flags);
                console.log(regions);
//
//
//                 const filterRoot = ReactDOM.createRoot(domFilterContainer);

// root.render(<ShoppingList name="Mark"></ShoppingList>);
//                 filterRoot.render(<FilterRegion regions={regions}/>);
            })
    }

    selRegion(region) {
        console.log('UPDATE COŚ TU');
        console.log(region);
    }

    render() {
        return (
            <div className="App">
                <div className="flex">

                    <div className="input-group">
                        <i className="fa-solid fa-search"></i>
                        <input type="text" placeholder="Search for a country"/>
                    </div>


                    <div className="dropdown" id="region-filter">
                    <FilterRegion regions={regions} onSelectRegion={this.selRegion}></FilterRegion>

                    </div>
                </div>

                {/*<div id="flag-list-container"></div>*/}
                <FlagList flags={flags}/>

            </div>
        );
    }
}

// const domContainer = document.querySelector('#dupsko');
// //
// const root = ReactDOM.createRoot(domContainer);
// // root.render(<ShoppingList name="Mark"></ShoppingList>);
// root.render(<FlagWrapper/>);
// // export default App;