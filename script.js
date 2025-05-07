const terminal = document.getElementById("terminal-input"); //input field
const output = document.getElementById("terminal-output"); //dynamic output
const form = document.getElementById("terminal-form"); // input container, for dynamic loading
const timerArea = document.getElementById("timerPopup"); //popup container for timemr
const countDown = document.getElementById("countdown"); //countdown timer
let allowEnter = true; //allows the terminal to accept the enter key (required for cases where enter key is disabled, command shouldnot register)

//manual object, this has the manual for all the commands, it is called below
const manuals = {
  "?help":
    "TLDR: help command will help the user navigate through the webpage clearly. This command is a simple start to the navigation journey of this terminal. <b>Usage: ?help</b>",
  clear:
    "TLDR: clear command clears the commands on the screen of the current terminal. <b>Usage: clear</b>",
  exit: "TLDR: exit command will take you back to google out of this site.<b>Usage: exit</b>",
  man: "TLDR: man command will give detailed informatino about the commands listed in <br>?commands. <b>Usage: man (command)</b>",
  ls: "list the files and directories in the system",
  "?timer":
    "TLDR: this is a temporary portfolio site, this timer counts down the time left for the release of our actual portfolio site. <b>Usage: ?timer</b>",
  "?shortcuts":
    "TLDR: navigating through this site is hard with all the commands, you can play a fun game to unlock the shortcut based navigation property of this site. <b>Usage: ?shortcuts</b>",
  "?about":
    "TLDR: this command will give you information about me, about this website, about my skills, knowledge and qualifications <b>Usage: ?about</b>",
  "?contact":
    "TLDR: you can get access to the contact portal through this command, where you can contact me, get my contact details, based location, social media <b>Usage: ?contact</b>",
};

//make the terminal focused at all times
document.addEventListener("click", function () {
  terminal.focus();
});

//starter line
document.addEventListener("DOMContentLoaded", function () {
  let ptag = document.createElement("p");
  ptag.textContent = "to get more information, type ?help";
  output.appendChild(ptag);
  output.appendChild(form);
  terminal.focus();
});

//main command chain
terminal.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && allowEnter) {
    e.preventDefault();
    let commandEntered = e.target.value.trim();

    let commandLine = document.createElement("div");
    commandLine.textContent = `guest@user1:~$ ${commandEntered}`;
    output.appendChild(commandLine);

    let result = document.createElement("p");
    if (commandEntered === "?help") {
      result.innerHTML = `<strong>To see the list of commands type ?commands</strong></br></br>PLAY A GAME TO TOGGLE ON THE SHORTCUTS TO NAVIGATE EASILY, Type ?shortcuts
      `;
    } else if (commandEntered === "clear") {
      location.reload();
    } else if (commandEntered === "exit") {
      window.location.href = "https://www.google.com";
    } else if (
      commandEntered === "?commands" ||
      commandEntered === "?command"
    ) {
      result.innerHTML = `List of Commands: 
      <ul><li>?help: start navigating the terminal.</li><li>?commands: list of commands on terminal.</li><li>clear: clears the terminal. </li><li>exit: exits the terminal</li><li>?shortcuts: play the mini-game</li><li>?about: the about page.</li><li>?contact: the contact page</li><li>?timer: the timer function</li></ul><b>type man before any command to get detailed information about that command</b>
      `;
    } else if (commandEntered.startsWith("man ")) {
      let parts = commandEntered.split(" ");
      let part = parts[1];
      if (manuals[part]) {
        result.innerHTML = `<strong>Manual for '${part}':</strong><br>${manuals[part]}`;
      } else {
        result.innerHTML = `No Manual Entry for ${part}, check the command list by typing ?commands`;
      }
    } else if (commandEntered === "?timer") {
      result.innerHTML = "Timer Deployed";
      timer();
    } else if (commandEntered === "ls") {
      result.innerHTML = `guest@user1:~$: commands.docx timer.exe shortcut.sh about.txt contact.txt`;
    } else if (commandEntered.startsWith("cd ")) {
      result.innerHTML = `invalid command, you need root access`;
    } else if (commandEntered.startsWith("sudo ")) {
      if (commandEntered === "sudo nano shortcut.sh") {
        result.innerHTML = `launching nano <shortcut.sh>...`;
        setTimeout(() => {
          result.innerHTML = `nano launched "shortcut.sh" successfully`;
        }, 2000);
        nano();
      } else {
        result.innerHTML = "access denied, contact admin for sudo access";
      }
    } else if (commandEntered === "?shortcuts") {
      result.innerHTML = `Play the mini-game to unlock the shortcuts.`;
      gameScreen();
    } else if (commandEntered === "?about") {
      aboutPage();
      result.innerHTML = "loading about page...";
    } else if (commandEntered === "?contact") {
      contactPage();
      result.innerHTML = "loading contact page...";
    } else if (
      commandEntered.includes("fuck") ||
      commandEntered.includes("shit")
    ) {
      result.innerHTML = `fuck you too`;
    } else if (commandEntered.includes("sorry")) {
      result.innerHTML = `it's okay, 🥰`;
    } else {
      result.innerHTML =
        "Unknown command: type ?help to see a list of available commands.";
    }
    if (result.innerHTML != "") {
      output.appendChild(result);
    }

    terminal.value = "";

    output.appendChild(form);

    output.scrollTop = output.scrollHeight;
    terminal.focus();
  }
});

// the function for counting down the time of portfolio release
function timer() {
  timerArea.classList.remove("hidden");
  terminal.readOnly = true;
  allowEnter = false;

  let Context = document.getElementById("timercontext");
  Context.style.marginTop = "0";
  Context.style.marginBottom = "40px";
  Context.innerHTML =
    "<b>Counting down to the launch of my official portfolio.<br>See you soon!</b>";

  const projectStart = new Date("2025-04-26T00:00:00");
  const targetDate = new Date(projectStart);
  targetDate.setMonth(projectStart.getMonth() + 6);

  const timerInterval = setInterval(function () {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      clearInterval(timerInterval);
      countDown.innerHTML = "Time's up!";
      Context.innerHTML = "<b>Thanks for waiting!<br>See you soon!</b>";
      timerArea.classList.add("hidden");
      terminal.readOnly = false;
      terminal.focus();
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      const format = (n) => n.toString().padStart(2, "0");

      countDown.innerHTML = `
        <span>${format(days)}d</span>:
        <span>${format(hours)}h</span>:
        <span>${format(minutes)}m</span>:
        <span>${format(seconds)}s</span>
      `;
    }
  }, 1000);

  // 4. Allow Ctrl+C to close timer
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "c") {
      if (!timerArea.classList.contains("hidden")) {
        clearInterval(timerInterval);
        timerArea.classList.add("hidden");
        terminal.readOnly = false;
        allowEnter = true;
        terminal.focus();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  });
}

//the function for creating the nano part of the shortcut game
function nano() {
  console.log("nano launched");
}

// the function to create the gameScreen, the game will be shortly played
gameScreen = () => {
  console.log("game launched");
  document.querySelector(".heading").innerHTML = "Terminal Game";
  let gamecomment = document.createElement("p");
  gamecomment.innerHTML = "to quit the game, type <b>clear</b>";
  output.appendChild(gamecomment);
};

// to create the about, contact pages, that is all that is left.

function aboutPage() {
  console.log("the about page is working");
  let aboutMe = document.createElement("p");
  aboutMe.classList.add("page-header");
  aboutMe.innerHTML = "About Page";
  output.appendChild(aboutMe);
  setTimeout(()=>window.location.href="about.html", 530);

}

function contactPage() {
  console.log("the contact page is working");
  let contactMe = document.createElement("p");
  contactMe.innerHTML ="Contact Page";
  contactMe.classList.add("page-header");
  output.appendChild(contactMe);
 setTimeout(() =>window.location.href="contact.html", 530);
} ;

//blog part
const parent = document.querySelector(".container-fluid");
parent.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("collapse-content")) {
    const post = e.target.closest(".content");
  }
});
const continueReading = document.getElementById("continue-button");
const readLess = document.querySelectorAll(".collapse-content");
const contentArea = document.getElementById("blog-content-area");
contentArea.classList.add("hide-blog");
const featuredPosts = document.querySelectorAll('[id^="featured-post-"]');
const recentPosts = document.querySelectorAll('[id^="recent-post-"]');
const heroTitle = document.querySelector(".display-4");
const heroDescription = document.querySelector(".hero-description");
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
featuredPosts.forEach((featuredPosts) =>
  featuredPosts.addEventListener("click", function () {
    let title = featuredPosts.querySelector("h3");
    let description = featuredPosts.querySelector("p");
    let content = featuredPosts.querySelector(".content");
    let clonedContent = content.cloneNode(true).childNodes;
    updateHero(title, description, clonedContent);
  })
);
recentPosts.forEach((recentPosts) =>
  recentPosts.addEventListener("click", function () {
    let title = recentPosts.querySelector("h6");
    let description = recentPosts.querySelector(".description");
    let content = recentPosts.querySelector(".content");
    let clonedContent = content.cloneNode(true).childNodes;
    updateHero(title, description, clonedContent);
  })
);
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
