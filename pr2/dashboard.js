var a = document.querySelector(".navicons2").addEventListener("click", function () {

    var click = document.querySelector(".dropdown")
    if (click.style.display === "none") {
        click.style.display = "block";
    } else {
        click.style.display = "none";
    }
})

document.addEventListener("click", function (event) {
    var click = document.querySelector(".dropdown");
    var navicon = document.querySelector(".navicons2");

    // Check if the click is outside the dropdown and navicon
    if (!click.contains(event.target) && !navicon.contains(event.target)) {
        click.style.display = "none";
    }
}, true);




document.querySelector("#mngli").addEventListener("click", function () {
    var Asidedropdown = document.querySelector(".Aside-dropdown");

    // Toggle 'show' class
    Asidedropdown.classList.toggle("show");
});



const openBtn = document.querySelectorAll("#eyesicon")
for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener("click", function () {
        var popup = document.querySelector(".showcontainer");
        popup.classList.toggle("open")

        document.querySelector('.closebtn').addEventListener("click", function () {
            popup.classList.remove("open")
        })
    })
}



let asideMenuBtn = document.querySelector("#menubar-Icon").addEventListener("click", function () {
    // alert("kamal")
    let Sidebar = document.querySelector(" .main-Sidebar ")
    Sidebar.classList.toggle("main-SidebarActive")

    let mainHeader = document.querySelector(".main-Header")
    mainHeader.classList.toggle("main-HeaderActive")
    let contentWrapper = document.querySelector(".content-Wrapper")
    contentWrapper.classList.toggle("contentwrapperActive")


})


