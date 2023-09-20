const verifiedArtistList = document.querySelector(".verified-artist--list"),
  verifiedArtistBtns = document.querySelectorAll(".autions-top--arrow"),
  firstCardArtist = document.querySelector(".verified-artist--list :where(.topartist-item)").offsetWidth,
  childrenVerifiedArtist = [...verifiedArtistList.children],
  verifiedArtistItems = document.querySelector(".verified-artist--items");
slideItem(verifiedArtistList, verifiedArtistBtns, firstCardArtist, childrenVerifiedArtist, verifiedArtistItems, "left");