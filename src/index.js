import store from "./store";
import * as actions from './actions'
import { bindActionCreators } from "redux";


const {dispatch, getState, subscribe} = store;
const {plus, minus} = bindActionCreators(actions, dispatch )



const counter = document.getElementById('count');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');



plusBtn.addEventListener('click', plus)
minusBtn.addEventListener('click', minus)

subscribe(() => counter.value = getState())