function aiResponse(response){
    console.log(response.data.answer);

  
    
    
    

    new Typewriter("#ai-output",{
        strings:response.data.answer,
        autoStart:true,
        delay:40,
        cursor:"",
    });
}
function aiGenerator(event){
    event.preventDefault();

    let topic=document.querySelector("#ai-input");
    let instrunctions=document.querySelector("#ai-instructions");
    let context="A user must be able to search anything and you must give feedback as accurate as possible , each sentence must be on a new line.";
    let prompt=`${instrunctions.value}`;
    let apiKey="abod483e2dfa17bb1244b3fbdft2032b";
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let sentence=document.querySelector(".ai-sentence");
    sentence.classList.remove("ai-sentence");
    sentence.innerHTML=`<span class="loading"> generating<span id="hourglass">  ⌛️</span></span>`;

    axios.get(apiUrl).then(aiResponse);
    

}
let button=document.querySelector("#ai-button");
button.addEventListener("click",aiGenerator);