const slides = document.querySelectorAll(".slide");
const backgroundchanger = document.querySelector('.color-change');
let backgroundimage = [
    'https://media.istockphoto.com/id/475856346/photo/serval.jpg?b=1&s=170667a&w=0&k=20&c=kpfhT5ZlMTjIt8bDPIqmWlpZyZhhvjk7Ad7WHS7HRUE=60',
    'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/475856346/photo/serval.jpg?b=1&s=170667a&w=0&k=20&c=kpfhT5ZlMTjIt8bDPIqmWlpZyZhhvjk7Ad7WHS7HRUE=',
    'https://images.unsplash.com/photo-1527720255604-b27935ade401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UHVtYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
]
for(let slide in slides){
    slides[slide].addEventListener('click',()=>{
        revomeClass()
        slides[slide].classList.add('active')
        
            backgroundchanger.setAttribute('style',`background-image:url(${backgroundimage[slide]})`)
        
        
    })
}

function revomeClass(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}
for(let back of backgroundchanger){
    slide.addEventListener('click',()=>{
        revomeAtribute()
                 backgroundchanger.setAttribute('style',`background-image:url(${backgroundimage[slide]})`)
    })

  
    
}