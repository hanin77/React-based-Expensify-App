import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



  // Store creation
  const store = configureStore();
  store.subscribe(()  => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
  });
  
  const expenseOne = store.dispatch(addExpense({ description: 'Watter Bill', amount: 100, createdAt: -200 }));
  const expenseTwo = store.dispatch(addExpense({ description: 'Gaz Bill', amount: 300, createdAt: -1000 }));
  const expenseThree = store.dispatch(addExpense({ description: 'Coffe Bill', amount: 500, createdAt: -1100 }));
  const jsx = (
    <Provider store ={store}>
        <AppRouter />
    </Provider>);

ReactDOM.render(jsx, document.getElementById('app'));
  

