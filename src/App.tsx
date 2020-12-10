import React from 'react';
import {Provider} from "react-redux";
import store from "./store";
import {Transfers} from "./components";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Transfers/>
            </div>
        </Provider>
    );
}

export default App;
