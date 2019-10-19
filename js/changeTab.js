function toggleTab(className,elmnt,color) {
    var i, content, tablinks;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].classList.remove("btn--active");
    }
    document.getElementsByClassName(className)[0].style.display = "block";
    elmnt.classList.add("btn--active");
  }
