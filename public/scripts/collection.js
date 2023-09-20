const tabLinkCollections = document.querySelectorAll(".navtab-item"),
  tabContentCollections = document.querySelectorAll(".section-tabcontent");
const changeTab = (tabLink, tabContent, className) => {
  tabLink.forEach(item => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      tabLink.forEach(x => x.classList.remove(className));
      tabContent.forEach(item => {
        if (e.target.dataset.link === item.id) {
          tabContent.forEach(event => event.style.display = "none");
          item.style.display = "block";
          e.target.classList.add(className);
        }
      });
    });
  });
};
changeTab(tabLinkCollections, tabContentCollections, "navtab-active");