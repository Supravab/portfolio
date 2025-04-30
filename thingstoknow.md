The CLI project...
Made by Supravab Bikram Parajuli

This is a Pre-Portfolio website, or a portfolio placeholder for the main portfolio website that i will host in my domain...

A terminal window view that will welcome the users, at first and then the users will start the flow of the website,
i will firstly render in the help thing for the user, i will render in the "to get started, type "?help"
then when the user types help, i will give the users a list of commands that they can type in to use the software, i will give the users this
" This is a CLI terminal for PrePortfolio website, there are a list of commands that you need to type to navigate through this terminal"
" To see the list of commands type ?Commands"
" Typing commands is boring and a lot of work, you can navigate through this site easily by toggling on the shortcuts. PLAY A GAME TO TOGGLE ON THE
SHORTCUTS TO NAVIGATE EASILY, Type ?Shortcuts"

<if there is a error after the ? in the terminal, like capitalizatinon, we can give the error did you mean ?help... for all errors>
if the user types ?help
The list of commands to navigate through the terminal, remember you need to use "sudo" before every command to navigate
If you don't want this hassle, play the game to add yourself as a sudo user...
The Game:::
<in the game, the first part should be adding the user as a sudo user by themselves, the user has to find the missing .sh file from the contact
output from the terminal output when they get the command terminal where i will give a "hint" in the bottom, the user should click in that hint and copy the hint, the copied thing will be a .sh executable file but the "hint" is in .txt, so the user needs to copy that text, and go to the terminal and do sudo create file sudo.sh(or any other name), then the user needs to paste that file there, and then add the file to the $PATH, using the terminal, and make the command of that path executable, by using chmod>
.
<in the game, after making the .sh file and adding that to the $PATH, the user can now execute that file using sudo (name).sh, now all the commands will not require the sudo command before them...>
.
<now the user can now do "sudo" "nano" "/etc/shortcuts.config", then they will need to toggle on the enable shortcuts, in that file, when that is toggled on, the user can now do "shortcuts" and then get the list of shortcuts that can help them navigate the CLI along with the text
"congrats! you got the shortcuts">

<if there is an normal error after anything like not typing the sudo infront of the command we can display "permission-denied" else we can type "syntax-error">

if the use types ?Commands
TO know what these pages are about you can do "sudo man $about/($other-commands)" to know about the command and the page 1. About Page: sudo about 2. Contact Page: sudo contact 3. Timer: sudo timer 4. Site Description Page: sudo this-site
Donot forget to add the "sudo" before the commands like shown.
Solve the puzzle game to unlock the eastereggs...

man descriptions:
cool easteregg, 1if one decides to do {sudo man man}, or {man man}, the site shows error.

    the main descriptions will give descriptions about the actual commands and pages.
    it will tell about
    -sudo man about:
                    TLDR; this command brings you to the about page where you will get to know me, know about my skills, experience, programming projects, coding journey and learning journey,
                    you can get my github, facebook, linkedIn contacts in this page...
                    If you want to hire me, or know about my skillset, visit this profile
                    {you can do add the "-photo" option in that to get my photo}
    -sudo man contact:
                    TLDR; Through this page, you can directly contact me, write a message, select a option for subject/reason such as hiring, scouting, stalking, disturbing, and write the message so that it will be uploaded and somehow reach me...
    -sudo man timer:
                    TLDR; this page is an unofficial placeholder portfolio, the actual portfolio is under development and will require a bit more time for development and deployment, this timer will give you the exact date that my other portfolio will release.
    -sudo man this-site:
                    TLDR; my official page is under development, i will be using react, webGL, three.js and other many resources to make the new portfolio a lot more professional, visually appealing, UX friendly, well designed and thoughtout, This site is a placeholder in place of the main website to get knowledge about my site deployment...
                        This page will basically explain the reasoning of this website, and additional links to my user accounts in the end and a contact me portal at the end
                    {you can check when this site was finalized and when this timer started using "sudo this-site origin timer"}

command results:

-sudo about:
get information about me, my links, all given already in the man section...
-sudo contact:
a portal to contact me, the message should reach me somehow, create that
-sudo timer:
a reverse ticking timer for 5 months time in hours,
-sudo this-site:
a lot of information about this site as told in the man command, and a way to contact me,
the easteregg commands are inside the {} and are hidden in the man command results, this should not be anywhere else and can be only found using the man commands.

for the game, when the terminal is refreshed the game can reset, the ticked page of the nano shortcuts should be unticked, unchecked, then the shortcuts should not be accessable, the copied .sh should not be included in the $PATH, the .sh file should not have been made, it should be reset...

blog post design
/blog
├── index.html or index.jsx
├── /components
│ ├── BlogCard.js
│ ├── BlogViewer.js
│ ├── RightSidebar.js
│ └── SearchFilter.js
├── /data
│ ├── js.json
│ ├── python.json
│ └── life.json
├── /assets
│ ├── logos/js.svg
│ ├── logos/python.svg
│ └── ...

blog post modular design theme

The blog page, there will be a lot of sections like the coding section, the life section, the productivity section, the course section and inside these sections, i can design the blocks and cards of blog topics for each day and keep them there, above i can keep a search bar, that can search blogs by topics for each section and create a time filter for that blog page, then, i can create something like a modular design, first, for each type of blog inside the section like for js, in the blog itself i can make a unique thing like a logo in the top left of js for javascript learning blog, i can create one for python and all of that and in this blog page as well where there will be lots of different cards with different blog records, i can create a modular design where if i open one blog post, it takes up around 80% of the screen and the other blogs are shifted to the right, and the user can view the blog and comment on the blog or something, then in the right where there will be a modular blog list, if the viewer opens the blog list, it will take half the page like a tiling theme and the other blogs will be in the right side like before, so the user can view and read multiple blogs but of inside the same section, and the blog posts on the right might be hard to manage you might be thinking but, as i mentioned having the picture of js and python of the specific theme of blog cards, well be can collapse the heading and keep the block of the picture with slight detail on the right, the navbar on the right should expand when hovered over and give me the blog view,how is this idea
