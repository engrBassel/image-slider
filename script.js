const slideNumber = document.getElementById("slide-number"),
  images = Array.from(document.querySelectorAll(".image")),
  imagesCount = images.length,
  prevBtn = document.getElementById("prev"),
  pagesContainer = document.getElementById("indicators"),
  nextBtn = document.getElementById("next"),
  pagesUl = document.createElement("ul");

let currentSlide = 1;

prevBtn.addEventListener("click", () => {
  if (currentSlide == 1) {
    currentSlide = imagesCount;
  } else {
    currentSlide--;
  }
  theChecker();
});

pagesUl.setAttribute("id", "pages-ul");

for (let i = 1; i <= imagesCount; i++) {
  const pageNum = document.createElement("li"),
    pageNumText = document.createTextNode(i);

  pageNum.setAttribute("data-num", i);

  pageNum.appendChild(pageNumText);

  pagesUl.appendChild(pageNum);
}

pagesContainer.appendChild(pagesUl);

const createdUl = document.getElementById("pages-ul"),
  pageNums = Array.from(document.querySelectorAll("#pages-ul li")),
  pageNumsCount = pageNums.length;

for (let i = 0; i < pageNumsCount; i++) {
  pageNums[i].onclick = function () {
    currentSlide = +this.getAttribute("data-num");
    theChecker();
  };
}

nextBtn.addEventListener("click", () => {
  if (currentSlide == imagesCount) {
    currentSlide = 1;
  } else {
    currentSlide++;
  }
  theChecker();
});

theChecker();

function theChecker() {
  slideNumber.textContent = `Slide # ${currentSlide} of ${imagesCount}`;

  images.forEach((image) => {
    image.classList.remove("active");
  });

  pageNums.forEach((page) => {
    page.classList.remove("active");
  });

  images[currentSlide - 1].classList.add("active");

  createdUl.children[currentSlide - 1].classList.add("active");
}
