import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter.js";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
    setStartDate,
    setTextFilter,
    setEndDate,
    sortByAmount,
    sortByDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
console.log(store.getState());

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("water"));
const state = store.getState();
const visibelExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibelExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
