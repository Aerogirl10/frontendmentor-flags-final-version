// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import FlagList from "./flag_list";
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <FlagList />
//     </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
//
//
//
//
//
// ///////////
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles/main.scss';
//
// // import FilterRegion from './filter.js';
//
// let regions = null;
//
//
//
// class FlagList extends React.Component {
//
//
//     // Constructor
//
//     constructor(props) {
//
//         super(props);
//         console.log(props);
//
//
//         this.state = {
//             items: [],
//             DataisLoaded: false,
//             // region: this.props.region
//         };
//     }
//
//
//     if(region) {
//         console.log("mamy region");
//     }
//
//
//     // ComponentDidMount is used to
//     // execute the code
//     componentDidMount() {
//         fetch(
//             "https://restcountries.com/v3.1/all")
//             .then((res) => res.json())
//             .then((json) => {
//                 console.log("ładuje");
//                 console.log(json);
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true,
//
//                 });
//
//
//                 //todo: kraje niepotrzebne
//                 /*this.regions = json.reduce((countries, {continents}) => {
//                     if (!countries[continents]) countries[continents] = [];
//                     // countries[continents].push(continents);
//                     return countries;
//                 }, {});
//                 console.log(this.regions);*/
//
//                 regions = json.map(e => e['region'])
//
//                     // store the keys of the unique objects
//                     .map((e, i, final) => final.indexOf(e) === i && i)
//
//                     // eliminate the dead keys & store unique objects
//                     .filter(e => json[e]).map(e => json[e]['region']);
//
//                 console.log(this.regions);
//
//                 const domContainer1 = document.querySelector('#region-filter');
// //
//                 const root1 = ReactDOM.createRoot(domContainer1);
// // root.render(<ShoppingList name="Mark"></ShoppingList>);
//                 root1.render(<FilterRegion regions={regions}/>);
//             })
//
//
//     }
//
//
//     render() {
//         const {DataisLoaded, items} = this.state;
//         if (!DataisLoaded) return <div>
//             <h1> Loading Flags.... </h1></div>;
//
//         return (
//             <div id="flag-list">
//                 {
//                     items.map((item) => (
//                         <div id={item.cca2} className="flag-item">
//                             <div className="flag">
//                                 <picture>
//                                     <img src={item.flags.png} alt=""/>
//                                 </picture>
//                                 <div className="info">
//                                     <h3>{item.name.common}</h3>
//
//                                     <p><span><b>Population</b></span>: {item.population}</p>
//                                     <p><span><b>Region</b></span>: {item.region}</p>
//                                     <p><span><b>Capital</b></span>: {item.capital}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         );
//     }
// }
//
//
// class FilterRegion extends React.Component {
//     // Constructor
//     constructor(props) {
//         console.log(props);
//         super(props);
//
//         this.state = {
//             items: [],
//             DataisLoaded: false,
//             // regions: this.props.regions
//
//         };
//
//     }
//
//     handleClick(e) {
//         console.log(e);
//         console.log(e.target);
//         console.log(e.target.getAttribute('data-region'));
//
//         let choosenRegion = e.target.getAttribute('data-region');
//
//         FlagList.region = choosenRegion;
//
//         // new FlagList(FlagList.region = choosenRegion);
//
// // root.render(<ShoppingList name="Mark"></ShoppingList>);
//
//         root.render(<FlagList data-region={choosenRegion}/>);
//
//     }
//
//     test() {
//         console.log("filterrr");
//     }
//
//
//     render() {
//
//         console.log("regions reeeeender");
//         console.log(this.props.regions);
//
//         console.log(regions);
//         regions.map((region) => (
//             console.log(region)
//         ));
//         return (
//             <>
//                 <span>Filter by region <i className="fa-solid fa-chevron-down"></i></span>
//                 <ul className="dropdown-content region-change">
//                     {
//                         regions.map((region) => (
//                             <li onClick={this.handleClick} data-region={region}>{region}</li>
//                         ))
//                     }
//                 </ul>
//             </>
//         )
//     }
// }
//
//
// /*renderRegions() {
//     regions = this.items.reduce((countries, {continents}) => {
//         if (!countries[continents]) countries[continents] = [];
//         countries[continents].push(continents);
//         return countries;
//     }, {});
// }
// renderRegions();*/
//
// // const domContainer = document.querySelector('#flag-container');
// // //
// // const root = ReactDOM.createRoot(domContainer);
// // // root.render(<ShoppingList name="Mark"></ShoppingList>);
// // root.render(<FlagList/>);
//
