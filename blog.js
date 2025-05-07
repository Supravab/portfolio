//blog part
function updateHero(title, description, content) {
  heroTitle.innerHTML = title.textContent;
  heroDescription.innerHTML = description.textContent;
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
const contentArea = document.getElementById("blog-content-area");
contentArea.classList.add("hide-blog");
const parent = document.querySelector(".container-fluid");
const continueReading = document.getElementById("continue-button");
parent.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("collapse-content")) {
    console.log("content collapsed");
    const contentCard = e.target.closest("#blog-content-area");
    contentCard.classList.add("hide-blog");
    continueReading.classList.remove("hide-blog");
  }
});
parent.addEventListener("click", function (e) {
  // For collapse content
  if (e.target && e.target.classList.contains("collapse-content")) {
    console.log("content collapsed");
    const contentCard = e.target.closest("#blog-content-area");
    contentCard.classList.add("hide-blog");
    continueReading.classList.remove("hide-blog");
  }

  // For recent posts, ensure proper delegation
  if (e.target && e.target.closest(".recent-post")) {
    const recentPost = e.target.closest(".recent-post");
    let title = recentPost.querySelector("h6");
    let description = recentPost.querySelector(".description");
    let content = recentPost.querySelector(".content");

    if (content) {
      let clonedContent = content.cloneNode(true).childNodes;
      updateHero(title, description, clonedContent);
    }
  }
});

const readLess = document.querySelectorAll(".collapse-content");
const featuredPosts = document.querySelectorAll('[id^="featured-post-"]');
const recentPosts = document.querySelectorAll('[id^="recent-post-"]');
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
function bindListeners() {
  const recentPosts = document.querySelectorAll(".recent-post");
  recentPosts.forEach((post) => {
    post.addEventListener("click", function () {
      let title = post.querySelector("h6");
      let description = post.querySelector(".description");
      let content = post.querySelector(".content");
      let clonedContent = content.cloneNode(true).childNodes;
      updateHero(title, description, clonedContent);
    });
  });
}

// Call this function after dynamically adding content
bindListeners();
