//blog part
const contentArea = document.getElementById("blog-content-area");
contentArea.classList.add("hide-blog");
function updateHero(title, description, content) {
  heroTitle.innerHTML = title.textContent;
  heroDescription.innerHTML = description.textContent;
  if (content) {
    contentArea.innerHTML = "";
    content.forEach((node) => {
      contentArea.appendChild(node.cloneNode(true));
    });
    continueReading.classList.add("hide-blog");
    contentArea.classList.remove("hide-blog");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}
function recentPost(x) {
  let title = x.querySelector("h6");
  let description = x.querySelector("small");
  updateHero(title, description);
  contentArea.innerHTML = "";
  let closeBtn = document.createElement("button");
  closeBtn.classList.add("btn", "close-btn", "collapse-content");
  closeBtn.innerHTML = "Close The Blog...";
  contentArea.appendChild(closeBtn);
}

function updateContent(content) {
  let copiedContent = content.cloneNode(true);
  copiedContent.classList.remove("d-none");
  contentArea.appendChild(copiedContent);
  window.scrollTo(0,0);
}
function Post1() {
  let content = document.querySelector(".recent-content-1");
  updateContent(content);
}

function Post2() {
  let content = document.querySelector(".recent-content-2");
  updateContent(content);
}
function Post3() {
  let content = document.querySelector(".recent-content-3");
  updateContent(content);
}

const parent = document.querySelector(".container-fluid");
const continueReading = document.getElementById("continue-button");
parent.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("collapse-content")) {
    console.log("content collapsed");
    const contentCard = e.target.closest("#blog-content-area");
    contentCard.classList.add("hide-blog");
    continueReading.classList.remove("hide-blog");
  }
  const thisIsIt = e.target.closest(".recent-post");
  if (thisIsIt) {
    if (thisIsIt.id.includes("recent-post-1")) {
      recentPost(thisIsIt);
      Post1();
    } else if (thisIsIt.id.includes("recent-post-2")) {
      recentPost(thisIsIt);
      Post2();
    } else if (thisIsIt.id.includes("recent-post-3")) {
      recentPost(thisIsIt);
      Post3();
    }
  }
});

const readLess = document.querySelectorAll(".collapse-content");
const featuredPosts = document.querySelectorAll('[id^="featured-post-"]');
const heroTitle = document.querySelector(".display-4");
const heroDescription = document.querySelector(".hero-description");
featuredPosts.forEach((featuredPosts) =>
  featuredPosts.addEventListener("click", function () {
    let title = featuredPosts.querySelector("h3");
    let description = featuredPosts.querySelector("p");
    let content = featuredPosts.querySelector(".content");
    let clonedContent = content.cloneNode(true).childNodes;
    updateHero(title, description, clonedContent);
  })
);
// recentPosts.forEach((recentPosts) =>
//   recentPosts.addEventListener("click", function () {
//     let title = recentPosts.querySelector("h6");
//     let description = recentPosts.querySelector(".description");
//     let content = recentPosts.querySelector(".content");
//     let clonedContent = content.cloneNode(true).childNodes;
//     updateHero(title, description, clonedContent);
//   })
// );
continueReading.addEventListener("click", function () {
  contentArea.classList.remove("hide-blog");
  continueReading.classList.add("hide-blog");
});
readLess.forEach((readLess) => {
  readLess.addEventListener("click", function () {
    contentArea.classList.add("hide-blog");
    continueReading.classList.remove("hide-blog");
  });
});
