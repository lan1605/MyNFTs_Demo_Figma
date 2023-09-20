const filterList = document.querySelectorAll(".activities-filter--item"),
  activitiesItem = document.querySelectorAll(".activities-item");
function btnActive(e, list, listItem) {
  list.forEach((item) => item.classList.remove("item-active"));
  e.target.classList.add("item-active");
  listItem.forEach((item) => {
    if (
      e.target.textContent === item.dataset.type ||
      e.target.textContent === "All"
    ) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

filterList.forEach((item) =>
  item.addEventListener("click", function (e) {
    btnActive(e, filterList, activitiesItem);
  })
);
