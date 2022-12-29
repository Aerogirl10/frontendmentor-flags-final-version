import './styles/main.scss';
import React, {useState} from "react";
import FlagList from "./FlagList";
import ReactDOM from 'react-dom/client';
import FilterRegion from "./FilterRegion";

// let regions = null;
// let flags = null;
// let newFlags = [];
// const domContainer1 = document.querySelector('#flag-list-container');
const domFilterContainer = document.querySelector('#region-filter');


export default class App extends React.Component {

    // const [selRegion, setRegion] = useState("");


    constructor(props) {

        super(props);
        console.log(props);


        this.state = {
            items: [], // all items
            DataisLoaded: false,
            flags: [], //only after search
            regions: []
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

                //todo: kraje niepotrzebne
                /*this.regions = json.reduce((countries, {continents}) => {
                    if (!countries[continents]) countries[continents] = [];
                    // countries[continents].push(continents);
                    return countries;
                }, {});
                console.log(this.regions);*/

                if (this.state.flags.length === 0) {
                    console.log("nie ma flag");
                    this.setState({
                        flags: json,
                    })
                }
                let regionsNew = json.map(e => e['region'])

                    // store the keys of the unique objects
                    .map((e, i, final) => final.indexOf(e) === i && i)

                    // eliminate the dead keys & store unique objects
                    .filter(e => json[e]).map(e => json[e]['region']);

                this.setState({
                    regions: regionsNew
                });
                console.log(this.state.flags);
                console.log(this.state.regions);
//
//
//                 const filterRoot = ReactDOM.createRoot(domFilterContainer);

// root.render(<ShoppingList name="Mark"></ShoppingList>);
//                 filterRoot.render(<FilterRegion regions={regions}/>);
            })
    }


    setFlags(newFlags) {
        this.setState({flags: newFlags});
    }

    selRegion(allItems, region) {
        console.log('UPDATE COŚ TU');
        console.log(region);

        let newFlags = [];
        console.log(allItems);
        // console.log(items);
        const newFilter = Object.keys(this.state.items).reduce((result, key) => {

            // console.log(flags[key]['region']);
            if (this.state.items[key]['region'] === region) {
                // result.push(flags[key]);
                newFlags.push(this.state.items[key]);
            }
            ;
            // return result;

        }, []);

        return this.setFlags(newFlags);
        console.log(newFlags);
        //refreshFlags = res => this.setState({flags: newFlags});

        // this.flags = newFlags;
        // return new FlagList(newFlags);
        // this.setState({
        //         items: newFlags
        //     }
        // )

    }

    connect() {

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
                        <FilterRegion regions={this.state.regions} onSelectRegion={this.selRegion} items={this.state.items}></FilterRegion>

                    </div>
                </div>

                {/*<div id="flag-list-container"></div>*/}
                <FlagList flags={this.state.flags}/>

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