function revelar(){
    var revelaçao = document.querySelectorAll(".revelar");
    
    revelaçao.forEach((revelar) => {
        var windowHeigth = window.innerHeight;
        var elementTop = revelar.getBoundingClientRect().top;
        var elementVisible = 100;
    
        if(elementTop < windowHeigth - elementVisible) {
            revelar.classList.add("ativar");
        } else {
            revelar.classList.remove("ativar");
        }
    });
    }
    
    window.addEventListener("scroll", revelar);