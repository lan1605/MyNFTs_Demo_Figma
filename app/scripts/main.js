window.addEventListener("load", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  toggle && toggle.addEventListener("click", handleToggleMenu);
  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }
  document.addEventListener("click", handleClickOutside);
  function handleClickOutside(e) {
    if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
      return;
    menu && menu.classList.remove("is-show");
  }
});
// Menu active
const menuList = document.querySelectorAll(".header-menu--item");
const hrefMenu = window.location.href;
window.addEventListener("DOMContentLoaded", function () {
  menuList.forEach((item) => {
    if (hrefMenu.includes(item.getAttribute("href"))) {
      menuList.forEach((e) => e.classList.remove("menu-active"));
      item.classList.add("menu-active");
    }
  });
});
function slideItem(
  carousel,
  arrowBtns,
  firstCardWidth,
  childrenCarousel,
  wrapper,
  gap,
  idLeft,
  idRight = ""
) {
  let cardPreview = Math.round(carousel.offsetWidth / firstCardWidth),
    timeOutId;
  childrenCarousel
    .slice(-cardPreview)
    .reverse()
    .forEach((item) => {
      carousel.insertAdjacentHTML("afterbegin", item.outerHTML);
    });
  childrenCarousel.slice(0, cardPreview).forEach((item) => {
    carousel.insertAdjacentHTML("beforeend", item.outerHTML);
  });

  const autoPlay = () => {
    if (window.innerWidth < 800) return;
    timeOutId = setTimeout(
      () => (carousel.scrollLeft += firstCardWidth + 24),
      2500
    );
  };
  autoPlay();
  const infiniteScroll = () => {
    if (carousel.scrollLeft === 0) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
      carousel.classList.remove("no-transition");
    } else if (
      Math.ceil(carousel.scrollLeft) ===
      carousel.scrollWidth - carousel.offsetWidth + 24
    ) {
      carousel.classList.add("no-transition");
      carousel.scrollLeft = cardPreview.offsetWidth + 24;
      carousel.classList.remove("no-transition");
    }
    clearTimeout(timeOutId);
    if (!wrapper.matches(":hover")) autoPlay();
  };
  carousel.addEventListener("scroll", infiniteScroll);
  arrowBtns.forEach((item) => {
    item.addEventListener("click", function () {
      carousel.scrollLeft +=
        item.id === idLeft ? -firstCardWidth - 24 : firstCardWidth + 24;
    });
  });
  // wrapper.addEventListener("mouseenter", () => clearTimeout(timeOutId));
  wrapper.addEventListener("mouseleave", autoPlay);
}

//  slide của Hot Autions
const carousel = document.querySelector(".autions-list"),
  arrowBtns = document.querySelectorAll(".autions-top--arrow"),
  firstCardWidth = document.querySelector(".autions-item").offsetWidth,
  childrenCarousel = [...carousel.children],
  wrapper = document.querySelector(".autions-items");

slideItem(
  carousel,
  arrowBtns,
  firstCardWidth,
  childrenCarousel,
  wrapper,
  "left"
);
// slide của Popular Collection
const popularList = document.querySelector(".popular-list"),
  popularArrowBtns = document.querySelectorAll(".autions-top--arrow"),
  firstCardPopular = document.querySelector(".popular-item").offsetWidth,
  childrenPopular = [...popularList.children],
  popularItems = document.querySelector(".popular-items");
slideItem(
  popularList,
  popularArrowBtns,
  firstCardPopular,
  childrenPopular,
  popularItems,
  "left"
);
// slide của Trending NFTs
const trendingList = document.querySelector(".trending-items"),
  trendingArrowBtns = document.querySelectorAll(".autions-top--arrow"),
  firstCardTrending = document.querySelector(".trending-item").offsetWidth,
  childrenTrending = [...trendingList.children],
  trendingItems = document.querySelector(".trending-list");
slideItem(
  trendingList,
  trendingArrowBtns,
  firstCardTrending,
  childrenTrending,
  trendingItems,
  "left"
);
