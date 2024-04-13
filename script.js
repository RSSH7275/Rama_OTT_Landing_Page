// const chipText=document.getElementById("chipText");
function loadChipsText() {
  // console.log(chipData);

  // Scrollable Crousel Section 

  const ele = document.createElement("div");
  ele.className = "left-arrow";
  ele.id="left-arrow"
  ele.innerHTML = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
`;

  document.getElementById("scrollable-tabs-container").appendChild(ele);
  
  const ulElement=document.createElement("ul");

  chipData.forEach((element, indx) => {
    if (indx==0) {
        ulElement.innerHTML += `
        <li>
        <a href="#" class="active">${element}</a>
        </li>
        `;        
    } else {
        ulElement.innerHTML += `
        <li>
        <a href="#">${element}</a>
        </li>
        `;                
    }
  });

  document.getElementById("scrollable-tabs-container").appendChild(ulElement);

  const arrwEle=document.createElement("div");
  arrwEle.className = "right-arrow active";
  arrwEle.id="right-arrow";
  arrwEle.innerHTML = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M8.25 4.5l7.5 7.5-7.5 7.5"
  />
</svg>
`;

document.getElementById("scrollable-tabs-container").appendChild(arrwEle);


// Carousel Section

const arrLeftCarousel=document.createElement("button");
arrLeftCarousel.className="leftNav";
arrLeftCarousel.innerHTML=`
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              `

document.getElementById("carouselWrapper").appendChild(arrLeftCarousel);

const carouselImage=document.createElement("div");
carouselImage.className="tryOneCarousel";
for(let i=1;i<=5;i++){
  
  carouselImage.innerHTML +=`
  <div class="carouselImgDisp">
  <img src="./assets/Carousel_${i}.avif"/>  
  </div>
  `

}



document.getElementById("carouselWrapper").appendChild(carouselImage);


const arrRightCarousel=document.createElement("button");
arrRightCarousel.className="rightNav";
arrRightCarousel.innerHTML=`
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M8.25 4.5l7.5 7.5-7.5 7.5"
  />
</svg>
`

document.getElementById("carouselWrapper").appendChild(arrRightCarousel);

// Logo -Channel -Section

for(let i=1;i<=10;i++){
  
const logoDivEle=document.createElement("div");
logoDivEle.className="logoIcon";
 
logoDivEle.innerHTML =`
  <img src="./assets/channel_${i}.avif"/>
  `  
  document.getElementById("logo-channel-Box").appendChild(logoDivEle);
}


// Trend Right Now Section

const divTrendSection=document.createElement("div");
divTrendSection.className="trendSection";
divTrendSection.innerHTML=`
<p>Hot Right Now 🔥</p>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  fill=""
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M8.25 4.5l7.5 7.5-7.5 7.5"
  />
</svg>
`

document.getElementById("trendRightNow").appendChild(divTrendSection);



const trendLeftArrwSection = document.createElement("div");
trendLeftArrwSection.className = "left-arrow-trend";
trendLeftArrwSection.id="left-arrow-trend"
trendLeftArrwSection.innerHTML = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
`;

  document.getElementById("trendRightNow").appendChild(trendLeftArrwSection);
  
  const ulElementTrend=document.createElement("ul");
  
  for(let i=1;i<=6;i++){
    ulElementTrend.innerHTML += `
        <li class="trend-cards">
        <a href="#"><img src="./assets/Trend_${i}.avif"/></a>
        </li>
        `;  
  }

  document.getElementById("trendRightNow").appendChild(ulElementTrend);

  const trendRightArrwSection=document.createElement("div");
  trendRightArrwSection.className = "right-arrow-trend activeTrend";
  trendRightArrwSection.id="right-arrow-trend";
  trendRightArrwSection.innerHTML = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M8.25 4.5l7.5 7.5-7.5 7.5"
  />
</svg>
`;

document.getElementById("trendRightNow").appendChild(trendRightArrwSection);





// TATA IPL Section 


const divIplSection=document.createElement("div");
divIplSection.className="iplSection";
divIplSection.innerHTML=`
<p>TATA IPL 2024 Top Performers</p>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  fill=""
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M8.25 4.5l7.5 7.5-7.5 7.5"
  />
</svg>
`

document.getElementById("matchIPL").appendChild(divIplSection);



const iplLeftArrwSection = document.createElement("div");
iplLeftArrwSection.className = "left-arrow-ipl";
iplLeftArrwSection.id="left-arrow-ipl"
iplLeftArrwSection.innerHTML = `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
`;

  document.getElementById("matchIPL").appendChild(iplLeftArrwSection);
  
  const ulElementIpl=document.createElement("ul");
  
  for(let i=1;i<=9;i++){
    ulElementIpl.innerHTML += `
        <li class="cards">
        <a href="#"><img src="./assets/TIPL_${i}.avif"/></a>
        </li>
        `;  
  }

  document.getElementById("matchIPL").appendChild(ulElementIpl);

  const iplRightArrwSection=document.createElement("div");
  iplRightArrwSection.className = "right-arrow-ipl actives";
  iplRightArrwSection.id="right-arrow-ipl";
  iplRightArrwSection.innerHTML = `
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  class="w-6 h-6"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M8.25 4.5l7.5 7.5-7.5 7.5"
  />
</svg>
`;

document.getElementById("matchIPL").appendChild(iplRightArrwSection);


// Footer Section


// Jio Support Section


const divSuppSection=document.createElement("div");
divSuppSection.className="jio-support";

divSuppSection.innerHTML=`


`




}

loadChipsText();
