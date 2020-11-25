import "./styles.css";
import "./styles.css";
import { rootReducer } from "./redux/rootReducer";
import { createStore } from "./createStore";

const counter = document.getElementById("counter");
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const themeBtn = document.getElementById("theme");

const store = createStore(rootReducer, 0);

addBtn.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
subBtn.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
});

store.dispatch({ type: "INIT_APPLICATION" });

asyncBtn.addEventListener("click", () => {});

themeBtn.addEventListener("click", () => {});

// render();