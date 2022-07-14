console.log('js ok',Vue)

/* Oggi cominciamo a costruire la nostra fantastica (e soprattutto innovativa) app di messaggistica!
La consegna finale per questo esercizio è Lunedì 18!
Procediamo per milestone fino a replicare tutto quello che abbiamo visto in classe.
Per quanto riguarda la giornata di oggi, ci aspettiamo il completamento della Milestone 1!
Vi ricordo che i ticket devono essere inerenti alla milestone del giorno e se volete andare avanti dovete cavarvela da soli :occhiolino:
Di seguito riportate tutte le milestone obbligatorie, domani parleremo della milestone opzionale (bonus):
Milestone 1 (DAY 1)
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto */

const root = new Vue({
    name: boolzapp,
    el: '#root',
    data: {
        user: {
        name: 'Nome Utente',
        avatar: '_io'
      },
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
        },
        {
          name: 'Fabio',
          avatar: '_2',
        },
        {
          name: 'Samuele',
          avatar: '_3',
        },
        {
          name: 'Luisa',
          avatar: '_4',
        },
      ]
    }
})