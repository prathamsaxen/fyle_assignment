const slider = (input) => {
  const buttons = document.querySelectorAll(".button");
  buttons.forEach((item) => {
    item.classList.remove("active_button");
  });

  buttons[input].classList.add("active_button");
  document
    .getElementById(input)
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

// onclick="slider_project(0)"
const slider_project = (input) => {
  const items = document.querySelectorAll(".content_item_slider");
  items.forEach((item) => {
    item.classList.remove("active_slider_project");
  });

  items[input].classList.add("active_slider_project");
  document
    .getElementById(`${input}_image`)
    .scrollIntoView({ behavior: "smooth", block: "center" });
};

$(document).ready(function(){
  $("#openModalBtn").click(function(){
      $("#myModal").modal({
          backdrop: true,
          keyboard: false
      });
  });
});