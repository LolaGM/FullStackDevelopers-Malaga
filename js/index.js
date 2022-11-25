const requestURL ="../json/coders.json";

async function fetchCodersJson(){
    const response = await fetch(requestURL);
    const femCoders = await response.json();
    return femCoders;
}

fetchCodersJson().then(femCoders =>{
    for (let index = 0; index < femCoders.coders.length; index++)
    {
        const sectionCoder = document.getElementById('coderSection');

        let id = femCoders.coders[index].id;
        let avatar = femCoders.coders[index].foto;
        let name = femCoders.coders[index].nombre;
        let surname = femCoders.coders[index].apellido;
        let socialMediaLinkedin = femCoders.coders[index].linkedin;
        let socialMediaInstagram =femCoders.coders[index].instagram;
        let githubRepository =femCoders.coders[index].github;
        
        sectionCoder.innerHTML += `
            
            <div class="cardCoders">
                <div class="bg-white rounded-2xl items-center lg:rounded content-center flex justify-center p-1 shadow-lg items-center"> 
                    <div class="mb-8 content-center text-center">  
                        <div class="text-purple font-bold mb-2"><h5 class="card-title">${name} ${surname}</h5>
                        </div>
                        <div>
                        <img class="w-40 h-15 rounded-full text-center items-center" src="${avatar}" alt="${name} ${surname}"> 
                        </div>
                        <div>    
                        <p class="text-rebeccapurple-100">Frontend & BackEnd Developer</p>
                        <br>
                        </div> 
                        <div class="cardCoders">
                        <a href="${socialMediaLinkedin}" target="_blank"><img class="w-10 h-10 rounded-full" src="./images/linkedin.png" alt="${socialMediaLinkedin}"></a>
                        <a href="${socialMediaInstagram}" target="_blank"><img class="w-10 h-10 rounded-full" src="./images/instagram.png" alt="${socialMediaInstagram}"></a>
                        <a href="${githubRepository}" target="_blank"><img class="w-10 h-10 rounded-full" src="./images/github.png" alt="${githubRepository}"></a 
                    </div>
                </div>
            </div>
            `
        
    };

})