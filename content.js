console.log("This is a content script");

document.addEventListener("copy", async () => {
    console.log("Copy event triggered");
   newText= await readText();
   console.log(newText)
    let url =`https://api.dictionaryapi.dev/api/v2/entries/en/${newText}`
    fetch(url)
    .then(data=>data.json())
    .then((Data)=>{
       let mean= Data[0].meanings[0].definitions[0].definition;
       console.log(mean);
       alert(mean);
    })
});

async function readText() {
    try {
        let text = await navigator.clipboard.readText();
       // console.log(text); 
        return text;
    } catch (error) {
        console.error("Error reading clipboard text: " + error);
    }
}
