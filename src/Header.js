import React from "react";

let par;
export default class Header extends React.Component {

    constructor(props) {
        super(props);
        console.log("proooooooooops");
        console.log(props);

        this.state = {
            mode: 'dark'
        };

        par = this;
    }


    handleModeChange(e) {
        // const main = document.getElementById('main');
        // main.className = "";
        let mode = e.target.dataset.mode;


        console.log("mode");
        console.log(mode);
        // if (mode === 1) {
        //
        // }

        par.setState({
            mode: mode === "dark" ? 'light' : 'dark',
        });


        par.props.handleModeChange(mode === "dark" ? 'light' : 'dark');

        // console.log(par.state.mode);

        // e.target.dataset.mode = par.state.isDark;
        // main.classList.add(mode ? 'dark' : 'light');

    }

    render() {
        return (
            <>
                <header>

                    <span>Where in the world?</span>

                    <button onClick={this.handleModeChange} data-mode={par.state.mode}><i
                        className="fa-solid fa-moon"></i>Dark mode
                    </button>
                </header>
            </>
        )
    }
};