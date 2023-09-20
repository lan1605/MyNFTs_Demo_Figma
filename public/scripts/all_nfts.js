const gridCustomList = document.querySelectorAll(".filter-listcustom--card"),
  nftsList = document.querySelector(".result-items"),
  nftsItem = document.querySelectorAll(".result-item"),
  filterBtn = document.querySelector(".filter-btn"),
  tabFilter = document.querySelector(".tab-filter");
const styleListChange = (e, img, className, style, img2, widthPC, widthTablet) => {
  e.setAttribute("src", img);
  e.classList.add(className);
  style.setAttribute("src", img2);
  if (window.innerWidth > 1023) {
    nftsItem.forEach(item => item.style.width = widthPC);
  } else if (window.innerWidth < 1023 && window.innerWidth > 767) {
    nftsItem.forEach(item => item.style.width = widthTablet);
  }
};
gridCustomList.forEach(item => {
  item.addEventListener("click", function (e) {
    const style3 = gridCustomList[0].id,
      style4 = gridCustomList[1].id;
    gridCustomList.forEach(item => item.classList.remove("filter-listcustom--active"));
    if (e.target.id === style3) {
      styleListChange(e.target, "./images/icons/grid-2-active.png", "filter-listcustom--active", gridCustomList[1], "./images/icons/grid.png", "calc((100% / 3) - 16px)", "calc((100% / 2) - 15px)");
    }
    if (e.target.id === style4) {
      styleListChange(e.target, "./images/icons/grid-active.png", "filter-listcustom--active", gridCustomList[0], "./images/icons/grid-2.png", "calc((100% / 4) - 18px)", "calc((100% / 3) - 16px)");
    }
  });
});
filterBtn.addEventListener("click", function (e) {
  const filterIcon = filterBtn.querySelector(".filter-btn--icon");
  tabFilter.classList.toggle("show-tab");
  nftsList.classList.toggle("change-style");
  filterBtn.classList.toggle("change-background");
  if (filterBtn.classList.contains("change-background")) {
    filterIcon.src = "./images/icons/chevron-left.png";
  } else {
    filterIcon.src = "./images/icons/sliders.png";
  }
});
const tabStatus = document.querySelector(".tab-top#status"),
  tabStatusContent = document.querySelector(".tab-status--content"),
  tabPrice = document.querySelector(".tab-top#price"),
  tabPriceContent = document.querySelector(".tab-price--content"),
  tabType = document.querySelector(".tab-top#type"),
  tabTypeContent = document.querySelector(".tab-type--content"),
  tabOptions = document.querySelector(".tab-top#options"),
  tabOptionsContent = document.querySelector(".tab-option--content"),
  tabCollections = document.querySelector(".tab-top#collection"),
  tabCollectionsContent = document.querySelector(".tab-collection--content");
const tabProperty1 = document.querySelector("#property_1 :where(.tab-property--top)"),
  tabPropertyContent1 = document.querySelector("#property_1 :where(.tab-property--content)"),
  tabProperty2 = document.querySelector("#property_2 :where(.tab-property--top)"),
  tabPropertyContent2 = document.querySelector("#property_2 :where(.tab-property--content)"),
  tabProperty3 = document.querySelector("#property_3 :where(.tab-property--top)"),
  tabPropertyContent3 = document.querySelector("#property_3 :where(.tab-property--content)"),
  tabProperty4 = document.querySelector("#property_4 :where(.tab-property--top)"),
  tabPropertyContent4 = document.querySelector("#property_4 :where(.tab-property--content)");
const showContentHandle = (tab, tabContent, icon) => {
  if (document.contains(tab)) {
    tab.addEventListener("click", function () {
      tabContent.classList.toggle("tab-show");
      const tabIcon = tab.querySelector(icon);
      tabIcon.classList.toggle("change-icon");
    });
  }
};
showContentHandle(tabStatus, tabStatusContent, ".tab-icon");
showContentHandle(tabPrice, tabPriceContent, ".tab-icon");
showContentHandle(tabType, tabTypeContent, ".tab-icon");
showContentHandle(tabOptions, tabOptionsContent, ".tab-icon");
showContentHandle(tabCollections, tabCollectionsContent, ".tab-icon");
showContentHandle(tabProperty1, tabPropertyContent1, ".tab-property--subicon");
showContentHandle(tabProperty2, tabPropertyContent2, ".tab-property--subicon");
showContentHandle(tabProperty3, tabPropertyContent3, ".tab-property--subicon");
showContentHandle(tabProperty4, tabPropertyContent4, ".tab-property--subicon");