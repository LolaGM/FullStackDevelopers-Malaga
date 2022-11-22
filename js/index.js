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

        //console.log(femCoders.coders[index].nombre);
    }

})