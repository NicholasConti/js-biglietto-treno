STEPS:

1. Chiedo all' utente quanti km vuole percorrere
2. Chiedo all' utente la sua eta
3. Trasformo entrambi i dati da stringhe a numeri
4. Controllo se l' utente ha inserito numeri o no
    SE eta && km = NaN 
    torno al prompt
5. Creo una variabile prezzo moltiplicando i km x 0.21
6. SE l'eta del cliente < di 18 
    prezzo = prezzo - (prezzo * 20 /100)
   ALTRIMENTI  SE l' eta >= 65
   prezzo = prezzo - (prezzo * 40 /100)
   ALTRIMENTI
   il prezzo da pagare sara pieno e senza sconto
7. stampare il prezzo ottenuto con solo 2 decimali utilizzando toFixed(2)