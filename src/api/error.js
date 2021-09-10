export default (msg, bgColor) => {
  const myContainer = document.querySelector('.top-title');
  const error = document.createElement('div');
  error.textContent = msg;
  error.classList.add(bgColor);
  setTimeout(() => {
    error.classList.add('alert');
  }, 500);
  myContainer.appendChild(error);
  setTimeout(() => {
    myContainer.removeChild(error);
  }, 3500);
};