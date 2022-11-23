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
    

        //console.log(femCoders.coders[index].foto);
        
        sectionCoder.innerHTML += `
            
            <div class="card" style="width: 10rem;">            
                <div class="card-body container">
                    <h6 class="card-title">${name} ${surname}</h6>
                    <img src="${avatar}" class="card-img-top" alt="${name} ${surname}"><br>
                    <p class="card-text">Frontend & BackEnd Developer</p>
                    <a href="${socialMediaLinkedin}" class="btn btn-primary">LinkedIn</a>
                    <a href="${socialMediaLinkedin}" class="btn btn-primary">Instagram</a>
                    <a href="${githubRepository}" class="btn btn-primary">GitHub</a>
                </div>
                <div>
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>
        `
    };

})