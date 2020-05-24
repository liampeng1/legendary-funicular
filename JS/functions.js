function updatePage(event) {
    console.log(event);
    const button = event.target;
    const pageName = button.dataset.pageName;
    updateContent(pageName);
    updateNavBar(button);
};

function updateNavBar(button) {
    console.log("updating nav_bar");
    const curPage = document.querySelector(".curPage");
    curPage.classList.remove("curPage");
    button.classList.add("curPage");
};

function updateContent(pageName) {
    const contentDiv = document.querySelector("#content");
    fetch(pageName)
        .then(response => {
            console.log(response);
            return response.text();
        })
        .then(text => {
                const content = text;
                console.log(content);
                contentDiv.innerHTML = content;
            }
        );
};

function onPageLoaded() {
    console.log("called onPageLoaded");
    document.querySelectorAll('.nav_button').forEach(btn => {
        btn.addEventListener('click', updatePage);
    });
    document.addEventListener('DOMContentLoaded', onPageLoaded);
    updateContent("home.html");
};

onPageLoaded();
console.log("helllo");