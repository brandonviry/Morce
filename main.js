var morce = {
    "A":
        "# ###",
    "B":
        "### # # #",
    "C":
        "### # ### #",
    "D":
        "### # #",
    "E":
        "#",
    "F": "# ## ### #",
    "G": "### ### #",
    "H": "# # # #",
    "I": "# #",
    "J": "# ### #####",
    "K": "### # ###",
    "L": "# ### # #",
    "M": "### ###",
    "N": "### #",
    "O": "### ### ###",
    "P": "# ### ### #",
    "Q": "### ### # ###",
    "R": "# ####",
    "S": "# # #",
    "T": "###",
    "U": "# # ###",
    "v": "# # # ###",
    "w": "# ### ###",
    "X": "### # # ###",
    "Y": "### # ### ###",
    "Z": "### ### # #",

    "1": "# ### ### ### ###",
    "2": "# # ### ### ###",
    "3": "# # # ### ###",
    "4": "# # # # ###",
    "5": "# # # # #",
    "6": "### # # # #",
    "7": "### ### # # #",
    "8": "### ### ### # #",
    "9": "### ### ### ### #",
    "0": "### ### ### ### ###",
    " ": "       "
}

let choix;
let etat = (type) => {
    choix = type;
    switch(choix){
        case 1 :
            document.getElementById("titre").innerHTML = "MorseToTexte";
            break;
        case 0 :
            document.getElementById("titre").innerHTML = "TexteToMorse";
            break;
    }
    
    document.getElementById("diag").style.display = "None";
}

let execution = () => {

    let input = document.getElementById("input").value;
    input = input.toUpperCase();
    let txt = "";
    if (choix == 0) {
      
        for (let index = 0; index < input.length; index++) {
            txt += morce[input[index]] + "   ";
        }
    }
    if (choix == 1) {
        
        
        let temp = input.split("       ");
        for (let index = 0; index < temp.length; index++) {
            temp[index] = temp[index].split("   ");
        }
        for (let key in morce) {
            for (let pos = 0; pos < temp.length; pos++) {
                for (let nb = 0; nb < temp[pos].length; nb++) {
                    if (temp[pos][nb] === morce[key]) {
                        temp[pos][nb] = key;
                    }
                }
            }
        }
        
        for (let pos2 = 0; pos2 < temp.length; pos2++) {
            for (let index = 0; index < temp[pos2].length; index++) {
                txt += temp[pos2][index];
            }
            txt += " "
        }
        txt = txt.replace("UNDEFINED","")
        txt = txt.replace("undefined","")
    }
    document.getElementById("output").innerHTML = txt
}

let reset =()=>{
    document.getElementById("diag").style.display = "Block";
}