import './scss/app.scss';
import Header from "./components/Header";
import React, {useState} from "react";
import Home from "./pages/home";
import {Link, Route, Routes} from "react-router-dom";
import Card from "./pages/card";
import Test from "./pages/test";


export const SearchContext = React.createContext('')

function App() {

    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue}}>
                <Header/>
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path='/'
                                   element={<Home/>}
                            />
                            <Route path='/card' element={<Card/>}/>
                            <Route path='/test' element={<Test/>}/>
                            <Route path='*' element={<Link to='/'>Page not found, back to home page</Link>}/>
                        </Routes>
                    </div>
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
