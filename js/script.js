//!Descrizione:
/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/


const {createApp} = Vue 

createApp({
  data() {
    return {
      message:'Ciao sono un panda adorabile',
      imagine:'img/panda.jpg',
      messageTwo:'Finalmente è riucito a stampare l\'immagine, OLE\''
      
    }
  }
}).mount('#app')