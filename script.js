const slider = (input) => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((item) => {
    item.classList.remove("active_button");
  });

  buttons[input].classList.add("active_button");
  document.getElementById(input).scrollIntoView({ behavior: 'smooth', block: 'center' });

};
