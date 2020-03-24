const $carouselPrev = document.querySelector("#news .prev")
const $carouselNext = document.querySelector("#news .next")
const $carouselThumbnails = document.querySelector("#news .thumbnails")
const $noticiasDiv = document.querySelectorAll("#news .noticias")

let valuesScrollDiv = 0


$carouselPrev.addEventListener("click", (e) => {
    e.preventDefault()


    if((valuesScrollDiv == 8) || valuesScrollDiv == 4 ) {
        valuesScrollDiv -= 4
    }
    
    if($noticiasDiv[valuesScrollDiv]) {
        $carouselThumbnails.scrollTo({
                
            left: $noticiasDiv[valuesScrollDiv].offsetLeft,
            behavior: "smooth"
                
        })
    }

    if(valuesScrollDiv == 0) {
        $carouselPrev.style.display = "none" 
    }

    $carouselNext.style.display = "block"
    clearInterval(scrollAutomatico)

})

$carouselNext.addEventListener("click", (e) => {
    e.preventDefault()
    
    valuesScrollDiv += 4
    $carouselPrev.style.display = "block"

    if($noticiasDiv[valuesScrollDiv]) {
        $carouselThumbnails.scrollTo({
            
            left: $noticiasDiv[valuesScrollDiv].offsetLeft,
            behavior: "smooth",
            
        })
    }

    if(valuesScrollDiv == 8) {
        $carouselNext.style.display = "none"
    }

    clearInterval(scrollAutomatico)
})


let scrollAutomatico = setInterval(function(){ 
    valuesScrollDiv += 4

    if(valuesScrollDiv > 8){
        valuesScrollDiv = 0
    }

    $carouselThumbnails.scrollTo({
            
        left: $noticiasDiv[valuesScrollDiv].offsetLeft,
        behavior: "smooth",
        
    })

    if(valuesScrollDiv == 0){
        $carouselPrev.style.display = "none"
    } else {
        $carouselPrev.style.display = "block"
    }

    if(valuesScrollDiv == 8) {
        $carouselNext.style.display = "none"
    } else {
        $carouselNext.style.display = "block"
    }
}, 5000);