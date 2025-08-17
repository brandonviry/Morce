(()=>{
    let  morce = {
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
    
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    let btnExec = document.getElementById("btnexec");
    let btnReset = document.getElementById("inversion");
    
    let titre = document.getElementById("titre");
    
    let choix= true;
    
    // Fonction pour convertir du Morse vers du Texte
    let MorseToTexte = (input) => {
        let txt = "";
        input = input.toUpperCase();
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
        return txt;
    }
    
    // Fonction pour convertir du Texte vers du Morse
    let TexteToMorse = (input) => {
        input = input.toUpperCase();
        let txt = "";
        
        for (let index = 0; index < input.length; index++) {
            txt += morce[input[index]] + "   ";
        }
        
        return txt;
    }
    
    // Fonction pour inverser le choix
    let inversion = (choix) => {
        return !choix;
    }
    
    // Initialiser le titre
    switch (choix) {
        case true:
            titre.innerText = "TexteToMorse";
            break;
        case false:
            titre.innerText = "MorseToTexte";
            break;
    }
    
    // Event listener pour le bouton d'exécution
    btnExec.addEventListener("click", () => {
        switch (choix) {
            case true:
                titre.innerText = "TexteToMorse";
                output.value = TexteToMorse(input.value);
                break;
            case false:
                titre.innerText = "MorseToTexte";
                output.value = MorseToTexte(input.value);
                break;
        }
    });
    
    // Event listener pour le bouton de reset/changement de mode
    btnReset.addEventListener("click", () => {
        choix = inversion(choix);
        let temp = input.value;
        switch (choix) {
            case true:
                titre.innerText = "TexteToMorse";
                input.value = output.value;
                output.value = temp;
                break;
            case false:
                titre.innerText = "MorseToTexte";
                input.value = output.value;
                output.value = temp;
                break;
        }
    });

})()
