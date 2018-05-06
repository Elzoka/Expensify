import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter.js";
import configureStore from "./store/configureStore";
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

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter("water"));
const state = store.getState();
const visibelExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibelExpenses);
ReactDOM.render(<AppRouter />, document.getElementById("app"));
