const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const rightArrow = document.querySelector(
  ".scrollable-tabs-container .right-arrow svg"
);
const leftArrow = document.querySelector(
  ".scrollable-tabs-container .left-arrow svg"
);
const tabsList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(
  ".scrollable-tabs-container .left-arrow"
);
const rightArrowContainer = document.querySelector(
  ".scrollable-tabs-container .right-arrow"
);


const removeAllActiveClasses = () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
  };
  
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      removeAllActiveClasses();
      tab.classList.add("active");
    });
  });
  
  const manageIcons = () => {
    // console.log(tabsList.scrollLeft);
    if (tabsList.scrollLeft >= 50) {
      leftArrowContainer.classList.add("active");
    } else {
      leftArrowContainer.classList.remove("active");
    }
  
    let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
    // console.log("scroll width: ", tabsList.scrollWidth);
    // console.log("client width: ", tabsList.clientWidth);
  
    if (tabsList.scrollLeft >= maxScrollValue) {
      rightArrowContainer.classList.remove("active");
    } else {
      rightArrowContainer.classList.add("active");
    }
  };
  
  rightArrow.addEventListener("click", () => {
    tabsList.scrollLeft += 200;
    manageIcons();
  });
  
  leftArrow.addEventListener("click", () => {
    tabsList.scrollLeft -= 200;
    manageIcons();
  });