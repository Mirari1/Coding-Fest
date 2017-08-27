window.onload = function () {

    var imgs = {
        i1: "img/breathe in brathe out.png",
        i2: "img/my opinion about you.png",
        i3: "img/never learned to fly.png",
        i4: "img/miss violence.png",
        i5: "img/Others voises.png",
        i6: "img/coldberry.png"
    }

    function setBackground(evt) {
        var element = evt.target;
        document.body.style.background = "url('" + imgs[element.parentNode.getAttribute('data')] + "')";
    }

    var menuItems = document.getElementsByClassName("menu1");
    for (var e in menuItems) {
        if (menuItems.hasOwnProperty(e)) {
            menuItems[e].firstElementChild.addEventListener("mouseover", setBackground);
        }
    }

    document.body.onmouseout = function () {
        document.body.style.background = "";
    };
    
    var navigation = document.getElementsByClassName("menu2"), current = document.getElementById("main-page");
    for (var n in navigation) {
        if (navigation.hasOwnProperty(n)) {
            navigation[n].addEventListener("click", function(e) {
                if (current.getAttribute("data") == e.target.getAttribute("data")) return;
                current.style.display = "none";
                e.target.style.fontWeight = null;
                current = document.getElementById(e.target.getAttribute("data"));
                current.style.display = "block";
                e.target.style.fontWeight = 900;
            })
        }
    }
    
    
    
};