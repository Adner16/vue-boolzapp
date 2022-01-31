
console.log('js ok', Vue);

Vue.config.devtools = true;

const app = new Vue ({
    el: '#root',
    data:{
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