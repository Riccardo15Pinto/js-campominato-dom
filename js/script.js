//check console log
console.log('ok js');

//recupero elementi dal DOM
const selectElement = document.getElementById('select');
const buttonElement = document.getElementById('button');
const deleteElement = document.getElementById('delete');
const containerElement = document.querySelector('.container');
const scoreElement = document.getElementById('score');

//creo una funzione che generi delle celle aventi una classe e del contenuto
function createcell(className , cellText){
    const cell = document.createElement('div')
    cell.classList.add(className);
    cell.innerText = cellText;
    return cell;
}

//creo un funzione che generi tot numero di numeri(bombe)
function createBombs(numberofbombs, maxNumber){
    let bombs = [];
    while(bombs.length < numberofbombs){
        let randomNumbers;
        do{
            randomNumbers = Math.floor(Math.random() * maxNumber) + 1;
        }while(bombs.includes(randomNumbers));
        bombs.push(randomNumbers);
    }
    return bombs;
}


//metto in ascolto il bottone
buttonElement.addEventListener('click' , function(){
    
    
    
    
    // contatore punteggio
    let userPoint = 0;
    
    //creo delle variabili d'appoggio
    const row = 10;
    const cols = 10;
    let total = row * cols;
    let gameSelect = 'easy';
    
    // al click svuoto il container
    containerElement.innerHTML = '';
    
    //recupero valore select
    let userChoice = parseInt(selectElement.value);
    
    //controllo il valore della select e modifico i parametri in base al valoro
    if(userChoice === 2){
        
        total = (row * cols) - 19;
        gameSelect = 'medium';
        
    } else if (userChoice === 3){
        
        total = (row * cols) - 51;
        gameSelect = 'hard';
        
    }
    // numero di bombe
    const bombNumber = 16;
    // creo una lista contenente le bombe
    const bombs = createBombs(bombNumber, total);
    console.log(bombs);
    
    //creo un ciclo
    for(let i = 1; i <= total;  i++){

        //genero le celle 
        const cell = createcell(gameSelect , i);
      
        //metto in ascolto le celle
        cell.addEventListener('click' , () => {

            //al click aggiungo la classe ed effettuo un controllo
            if(!(cell.classList.contains('b-gblue'))){
                
                cell.classList.add('b-gblue');
                console.log(i);
                scoreElement.innerText = ++userPoint;
            }
                
        });

        //stampo gli elementi in pagina
        containerElement.appendChild(cell);

    }
});
