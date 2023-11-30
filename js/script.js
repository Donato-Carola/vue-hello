//!Descrizione:
/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

 const {createApp} = Vue 

createApp({
  data() {
    return {
      message:'CIAO',
      imagine:'https://m.media-amazon.com/images/I/91M9VaZWxOL._AC_UF1000,1000_QL80_.jpg',
    }
  }
}).mount('#app')