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

//creo una funzione che imposti il messaggio di vittoria/sconfitta
function response(point , condition){
    const messagge = condition ? `PIVELLO !!! Sei riuscito a totalizzare solo ${point} punti` : `ESTREMAMENTE FORTUNATO !!! Hai totalizzato ${point} punti`;
    alert(messagge);
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
    
    // creo una variabile che segni il massimo dei punti ottenibile
    const totalscore = total - bombNumber;
    
    //creo un ciclo
    for(let i = 1; i <= total;  i++){
        
        //genero le celle 
        const cell = createcell(gameSelect , i);
        
        //metto in ascolto le celle
        cell.addEventListener('click' , () => {
            
            //creo una funzione che riveli tutte le caselle
            function revealcells(){
                const cells = document.querySelectorAll('section > *');
                for(let i = 0; i < cells.length; i++){
                    const cell = cells[i];
                    cell.classList.add('b-gblue');
                    if(bombs.includes(parseInt(cell.innerText))){
                        cell.classList.add('b-gred');
                    } 
                }
            }

            // se clicchi non aggiungie il punteggio
            if(cell.classList.contains('b-gblue')) return;
            
            //aggiungo la classe b-gblue
            cell.classList.add('b-gblue');
            
            //effettuo un controllo se il numero è una bomba
            const itsBomb = bombs.includes(parseInt(cell.innerText));
            
            //se è una bomba
            if(itsBomb){
                cell.classList.add('b-gred');
                response(userPoint, itsBomb);
                revealcells();
                
            }else{ //altrimenti
                scoreElement.innerText = ++userPoint;
                
                if(userPoint === 1){
                    response(userPoint, itsBomb);
                    revealcells();

                }
            }
            
        });
        
        //stampo gli elementi in pagina
        containerElement.appendChild(cell);
        
    }
});

