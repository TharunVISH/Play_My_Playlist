function createPassword (){
    const numbers= '0123456789'
    const uppercaselettters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseletters='abcdefghijklmnopqrstuvwxyz'
    const specialcharacter='!@#$%^&*()~`,.<>?/'
    let password=''
    let characterList =''
    characterList= characterList + lowercaseletters
    characterList= characterList + uppercaselettters
    characterList= characterList + numbers
    characterList= characterList + specialcharacter
    let passwordLength=9
    const characterListLength= characterList.length
    for(let i=0;i<passwordLength;i++){
    const characterIndex =Math.round(Math.random()*characterListLength)
    password= password + characterList.charAt(characterIndex)
} 
return password
}

function copyToClipboard(password){
  const newTextArea = document.createElement('textarea')
  newTextArea.innerText = password
  document.body.appendChild(newTextArea)
  newTextArea.select()
  document.execCommand('copy')
  newTextArea.remove()
}

export  {createPassword,copyToClipboard};
