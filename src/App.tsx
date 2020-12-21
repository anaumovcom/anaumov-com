import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Welcome from "./pages/resume/welcome.component";
import Header from "./components/header/header.component";
import RoutingContext from "./contexts/routing.context";
import {PageRoute} from "./pages/pages.types";
import Footer from "./components/footer/footer.component";

function App() {

    const [routingContext, setRoutingContext] = useState<any>({
        activePage: PageRoute.WELCOME,
        setActivePage: (page: PageRoute) => {
            setRoutingContext({
                ...routingContext,
                activePage: page,
            });

        },
    });


    return (
        <div className="App">
            <RoutingContext.Provider value={routingContext}>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path={"/"} component={Welcome}/>
                        <Route path={"/resume"} component={Welcome}/>
                        <Route path={"/portfolio"} component={Welcome}/>
                        <Route path={"/about"} component={Welcome}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </RoutingContext.Provider>
        </div>
    );
}

export default App;
