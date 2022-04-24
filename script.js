
//information utiles

const statut = document.querySelector('h2');
let jeuActif = true;
let joueurActif = 'X';
let etatJeu = ["","","","","","","","", ""];

const consitionsVictoire = [
    [0,3,6], 
    [1,4,7], 
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
]


//Messages

const gagne = () =>  `Le joueur ${joueurActif} a gagné`;
const egalite = () => `Égalité`;
const tourJoueur = () => `C'est au tour du joueur ${joueurActif}`

statut.innerHTML = tourJoueur();


//selectionner chaque cases et permet de cliquer
let cases = document.querySelectorAll(".case");
cases.forEach(cell => cell.addEventListener('click', gestionClickCase));

//permet de cliquer
let btnRecommencer = document.querySelector('#recommencer');
btnRecommencer.addEventListener('click', recommencer);

console.log();

//permet de récupérer un nombre entier lorsque l'on click une case.
function gestionClickCase(){
console.log(this);
const indexCase = parseInt(this.dataset.index);
// console.log(indexCase);


if (etatJeu[indexCase] !==  "" || !jeuActif){
    return
}

etatJeu[indexCase] = joueurActif
this.innerHTML = joueurActif


verifGagne();


}


function verifGagne(){
    let tourGagnant =  false;

    for(let consitionVictoire of consitionsVictoire){
        let val1 = etatJeu[consitionVictoire[0]];
        let val2 = etatJeu[consitionVictoire[1]];
        let val3 = etatJeu[consitionVictoire[2]];
        if(val1 === "" || val2 ==="" || val3 ===""){
            continue
        }
        if(val1 === val2 && val2 === val3){
            tourGagnant = true;
            break
        }
    }
    if(tourGagnant){
        statut.innerHTML = gagne()
        jeuActif = false;
        return
    }

    if(!etatJeu.includes("")){
        statut.innerHTML = egalite();
        jeuActif = false;
        return
    }

    joueurActif = joueurActif === "X" ? "O" : "X"
    statut.innerHTML = tourJoueur();

}


function recommencer(){
joueurActif = "X"
jeuActif = true;
etatJeu = ["","","","","","","","", ""];
statut.innerHTML = tourJoueur()
document.querySelectorAll(".case").forEach(cell => cell.innerHTML = "");
}