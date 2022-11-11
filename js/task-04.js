let counterValue - 0;
const counter - document.querySelector(`#value`);

const incrementBtn = document.querySelector('button[data-action="increment"]);
const decrementBtn = document.querySelector('button[data-action="decrement"]);

const render = () => {
    counter.textContent = counterValue;
};
const incrementClick = () => {
    counterValue += 1;
    render();
};
const decrementClick = () => {
    counterValue -= 1;
    render();
};
render();
incrementBtn.addEventListener('click', incrementClick);
decrementBtn.addEventListener('click', decrementClick);