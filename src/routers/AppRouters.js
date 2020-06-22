import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HelpExpensePage from '../components/HelpExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path = "/" component = {ExpenseDashBoardPage} exact = {true} />
                <Route path = "/create" component = {AddExpensePage} />
                <Route path = "/edit" component = {EditExpensePage} />
                <Route path = "/help" component = {HelpExpensePage} />
                <Route component = {NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
    );
    export default AppRouter;

