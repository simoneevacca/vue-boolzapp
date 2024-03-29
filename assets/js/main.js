const { createApp } = Vue

var DateTime = luxon.DateTime;
createApp({
    data() {
        return {
            actualContactIndex: 0,
            actualContactImg: './assets/img/avatar_1.jpg',
            actualContactName: 'Michele',
            lastAcces: 'Ultimo accesso oggi alle 12:00',
            newMessage: '',
            searchChat: '',
            time: DateTime.now(),



            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            text: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            text: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            text: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            text: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            text: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51',
                            text: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            text: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            text: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            text: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50',
                            text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51',
                            text: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },

    methods: {

        /**
         * after clicking on a contact in the contact list show the correct chat
         * @param {number} index 
         */
        chooseContact(index) {
            this.actualContactImg = this.contacts[index].avatar
            this.actualContactName = this.contacts[index].name
            this.lastAcces = 'Ultimo accesso oggi alle 16:26'
            this.actualContactIndex = index,
                console.log(this.actualContactIndex);
        },

        /**
         * after sendig a message save it like sended in the message list
         */
        sendMessage() {
            if (this.newMessage.length > 0) {

                this.contacts[this.actualContactIndex].messages.push(
                    {
                        date: `${this.time.toLocaleString(DateTime.DATE_SHORT)} ${this.time.toLocaleString(DateTime.TIME_24_SIMPLE)}`,
                        text: this.newMessage,
                        status: 'sent'
                    })

                this.newMessage = ''

                /**
                 * after a second print 'Ok' in the message list
                 */
                setTimeout(() => {
                    this.contacts[this.actualContactIndex].messages.push(
                        {
                            date: `${this.time.toLocaleString(DateTime.DATE_SHORT)} ${this.time.toLocaleString(DateTime.TIME_24_SIMPLE)}`,
                            text: 'Ok',
                            status: 'received'
                        })
                }, 1000)
            }
        },

        /**
         * tranform first letter in uppercase and chek if is includes in a one of conacts name
         */
        digit() {
            this.searchChat = this.searchChat.charAt(0).toUpperCase() + this.searchChat.slice(1)
            this.contacts.forEach(element => {
                if (element.name.includes(this.searchChat)) {
                    element.visible = true
                } else if (!element.name.includes(this.searchChat)) {
                    element.visible = false
                }
            })

        },

        /**
         * remove message from message list
         * @param {number} index 
         */
        deleteMessage(index) {
            this.contacts[this.actualContactIndex].messages.splice(index, 1)
        }
    },

    mounted() {
        console.log(DateTime.now()),
        console.log(this.time.toLocaleString(DateTime.TIME_24_SIMPLE));
    }

}).mount('#app')
