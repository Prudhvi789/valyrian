async function tran(){
    let input = document.getElementById('userInput').value
    console.log(input)
    translateUrl = encodeURI('https://api.funtranslations.com/translate/valyrian.json?text='+input)
    let response = await fetch(translateUrl)
    let data = await response.json()
    let output = document.getElementById('output')
    output.innerHTML = data.contents.translated
} 