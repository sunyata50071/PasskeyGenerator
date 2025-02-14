const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", 
    "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
    ":",";","<",">",".","?","/"]

let providePassword = document.getElementById("showPassword")
let passwordButton = document.getElementById("makePassword")

passwordButton.addEventListener("click", function passwordGenerator() {
    for (let i = 0; i < 15; i++) {
        let firstPassword = Math.floor(Math.random() * characters.length )
        let secondPassword = Math.floor(Math.random() * characters.length )
        let thirdPassword = Math.floor(Math.random() * characters.length )
        let forthPassword = Math.floor(Math.random() * characters.length )
        let fifthPassword = Math.floor(Math.random() * characters.length )
        let sixthPassword = Math.floor(Math.random() * characters.length )
        let seventhPassword = Math.floor(Math.random() * characters.length )
        let eighthPassword = Math.floor(Math.random() * characters.length )
        let ninthPassword = Math.floor(Math.random() * characters.length )
        let tenthPassword = Math.floor(Math.random() * characters.length )

        providePassword.textContent = characters[firstPassword] + characters[secondPassword] +
                                      characters[thirdPassword] + characters[forthPassword] +
                                      characters[fifthPassword] + characters[sixthPassword] +
                                      characters[seventhPassword] + characters[eighthPassword] +
                                      characters[ninthPassword] + characters[tenthPassword]
    } 
})
