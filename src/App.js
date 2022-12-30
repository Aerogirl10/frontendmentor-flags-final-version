import './styles/main.scss';
import React, {useState} from "react";
import FlagList from "./FlagList";
import ReactDOM from 'react-dom/client';
import FilterRegion from "./FilterRegion";
import InputSearch from "./InputSearch";
import filterRegion from "./FilterRegion";
import Header from "./Header";

let regions = null;
// let flags = null;
// let newFlags = [];
// const domContainer1 = document.querySelector('#flag-list-container');
const domFilterContainer = document.querySelector('#region-filter');


let par;



export default class App extends React.Component {

    // const [selRegion, setRegion] = useState("");


    constructor(props) {


        super(props);
        // console.log(props);

        // this.filterByRegion = this.filterByRegion.bind(this);

        this.state = {
            items: [], // all items
            DataisLoaded: false,
            flags: [], //only after search
            selRegion: null,
            mode: 'dark',

        };

        const main = document.getElementById('main');
        main.className = "";
        // console.log("mode w apie, tu musi być");
        // console.log(mode);

        // main.classList.add("dupa");
        main.classList.add(this.state.mode);

    }

    componentDidMount() {
        fetch(
            "https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((json) => {
                // console.log("ładuje");
                // console.log(json);
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
                // console.log(this.state.flags);
                let regionsNew = json.map(e => e['region'])

                    // store the keys of the unique objects
                    .map((e, i, final) => final.indexOf(e) === i && i)

                    // eliminate the dead keys & store unique objects
                    .filter(e => json[e]).map(e => json[e]['region']);

                regions = regionsNew;
                par = this;
                // this.setState({
                //     regions: regionsNew
                // });
                // console.log("tu powinno być wszystko");
                // console.log(this.state.flags);
                // console.log(this.state.regions);
//
//
//                 const filterRoot = ReactDOM.createRoot(domFilterContainer);



// root.render(<ShoppingList name="Mark"></ShoppingList>);
//                 filterRoot.render(<FilterRegion regions={regions}/>);

            })
    }


    //  setFlags = (newFlags) => {
    //     return par.setState({flags: newFlags});
    // }




    selRegion(region) {
        console.log('UPDATE COŚ TU');
        console.log(region);

        let newFlags = [];
        console.log(par);

        const search = document.getElementById("search");
        search.value = "";
        // console.log(par.state.flags);
        if (region === "all") {
            newFlags = par.state.items;
            par.setState({
                selRegion: null
            })
        } else {
            par.setState({
                selRegion: region
            })

            const newFilter = Object.keys(par.state.items).reduce((result, key) => {

                // console.log(flags[key]['region']);
                if (par.state.items[key]['region'] === region) {
                    // result.push(flags[key]);
                    newFlags.push(par.state.items[key]);
                }
                ;
                // return result;

            }, []);
        }
        // this.setFlags(newFlags);
        console.log(newFlags);
        par.setState({flags: newFlags});
        //refreshFlags = res => this.setState({flags: newFlags});

        // this.flags = newFlags;
        // return new FlagList(newFlags);
        // this.setState({
        //         items: newFlags
        //     }
        // )

    }

    filterByInput = (val) =>
    {
        const results = par.state.items.filter(country => {
            // if (val === "") return par.state.flags
            // console.log(country);
            console.log(par.state.selRegion);

            if (par.state.selRegion == null || country.region === par.state.selRegion) {
                console.log("region się zgadza");

                if (country.name['common'].toLowerCase().includes(val.toLowerCase()) || country.name['official'].toLowerCase().includes(val.toLowerCase())) {
                    console.log(country);
                    return country;
                }
            }

        })
        this.setState({
            query: val,
            flags: results
        })
    }

    changeMode = (mode) => {


        console.log("Zmień mode");
        const main = document.getElementById('main');
        main.className = "";
        // console.log("mode w apie, tu musi być");
        console.log(mode);

        // main.classList.add("dupa");
        main.classList.add(mode);

        // par.setState({
        //     mode: mode,
        //
        // })
    }

    render() {

        return (
            <div className="App" className={`App ${this.state.mode}`}>
                <Header handleModeChange={this.changeMode}></Header>
                <div className="flex">

                    <InputSearch onInputType={this.filterByInput}></InputSearch>


                    <div className="dropdown" id="region-filter">
                        <FilterRegion regions={regions} onSelectRegion={this.selRegion}></FilterRegion>

                    </div>
                </div>

                {/*<div id="flag-list-container"></div>*/}
                <FlagList flags={this.state.flags}/>

            </div>
        );
    }
}

//TODO:
// 1. Input search
// 2. Color mode change