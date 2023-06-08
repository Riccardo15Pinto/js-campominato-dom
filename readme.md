# CAMPO MINATO:

    DESCRIZIONE DEL GIOCO
    Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali
    In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare  a cliccare sulle altre celle.
    LA partita termina quando il giocatore clicca su una bomba o quando raggiunger il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
    Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba
    
        - MILESTONE 1
            Prepariamo "Qualcosa" per tenere il punteggio dell'utente.
            Quando l'utente clicca su una cella, incrementiamo il punteggio.
            Se riusciamo, facciamo anche in modo da non poter più 
            cliccare sulla stessa cella
        
        - MILESTONE 2
            Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
            Generiamoli e stampiamo in console per essere certi che siano corretti
    
        - MILESTONE 3
            Quando l'utente clicca su una cella, verrifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe.
            Se si, la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che la patita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
        
        - MILESTONE 4
            Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto l punteggio massimo, perchè in quel caso la partita termina. Raccogliamo quindi il messaggio e scriviamo un messaggio appropriato.
    
        - MILESTONE 5
            Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o seperchè l'utente ha raggiunto il punteggio massimo(ossia ha vinto). Dobbiamo poi in ogni caso stampare lin pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.
    
        - BONUS
            Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà (come le istruzioni di ieri se non già fatto)
    
        - SUPERBONUS
            Colorare tutte le celle bomba quando la partita finisce

---
---
---
## LOGICA ESERCIZIO

- MILESTONE 1:

    - creo un elemento nel DOM che faccia da contatore
    - richiamo l'elemento dal DOM
    - creo un contatore che segni 0
    - al click della singola casella 

        - aumento il contatore

        - lo stampo in pagina

- MILESTONE 2:

    - creo una variabile che determini il numero di bombe
    - recupero il valore massimo dalle caselle 
    - creo un funzione con parametri (quelli sopra elencati)

        - la funzione genererà dei numeri random con i valori indicati
        - inserirà i numeri in un array
        - solo **se** i numeri non saranno doppioni
        - li stampo in console

- MILESTONE 3:

    - al click della cella

        - **se** il numero della cella è uguale a uno dei numeri contenuti nell'array

            - la cella diventa rossa 
        
        - **altrimenti**

            - la cella rimane blu
            - e il punteggio viene incrementato

- MILESTONE 4:

    - creo una variabile che indichi il punteggio massimo

    - **se** il punteggio del giocatore è uguale al punteggio massimo 

        - messaggio di vittoria

    - **altrienti** se l'utente ha cliccato un numere contenete nell'array(bomba)

        - messaggio di sconfitta



