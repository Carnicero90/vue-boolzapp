

var app = new Vue({
    el: '#root',
    data: {
        contacts: [
            //     {
            //     name: 'Manuele Volponi',
            //     avatar: '_4',
            //     scrolled: 0,
            //     messages: [
            //         {
            //             date: '23/04/2021 15:30:55',
            //             text: 'Dovrei farti una statua per quanto il tuo snippet sulle scrollbar mi ha semplificato la vita.',
            //             sent: true
            //         },
            //         {
            //             date: '23/04/2021 15:50:00',
            //             text: 'Ok.',
            //             sent: false
            //         }
            //     ],
            // }, 
            {
                name: 'Alessandro Scolozzi',
                avatar: '_5',
                unreads: 0,
                scrolled: 0,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Metti i commenti!',
                        sent: false,
                        clicked: false
                    },
                    {
                        date: '12/01/2020 15:50:00',
                        text: 'No.',
                        sent: true,
                        clicked: false

                    }
                ],
            }, {
                name: 'Donato Riccio',
                avatar: '_7',
                scrolled: 0,
                unreads: 0,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Attieniti alle consegne!',
                        sent: false,
                        clicked: false

                    },
                    {
                        date: '12/01/2020 15:50:00',
                        text: 'No.',
                        sent: true,
                        clicked: false

                    }
                ],
            }, {
                name: 'Simone Taccori',
                avatar: '_2',
                scrolled: 0,
                unreads: 0,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Scrivi bel codice!',
                        sent: false,
                        clicked: false

                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'No.',
                        sent: true,
                        clicked: false

                    }
                ],
            },
            {
                name: 'Michele',
                avatar: '_1',
                scrolled: 0,
                unreads: 0,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        sent: true,
                        clicked: false

                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        sent: true,
                        clicked: false

                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'sfamato!',
                        sent: false,
                        clicked: false

                    },

                ],
            },
            {
                name: 'Fabio',
                avatar: '_6',
                scrolled: 0,
                unreads: 0,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        sent: true,
                        clicked: false

                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        sent: false,
                        clicked: false

                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        sent: true,
                        clicked: false

                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                scrolled: 0,
                unreads: 0,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        sent: false,
                        clicked: false

                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        sent: true,
                        clicked: false

                    },
                    {
                        date: '30/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        sent: false,
                        clicked: false

                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                scrolled: 0,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        sent: true
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        sent: false
                    }
                ],
            },
            {
                name: 'Ian',
                avatar: '_8',
                scrolled: 0,
                unreads: 0,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        sent: true,
                        clicked: false

                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        sent: true,
                        clicked: false

                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, cupiditate veniam quos animi necessitatibus, ab, non rerum voluptas labore natus officiis illo sunt quidem adipisci ut? Temporibus voluptas iste et.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, cupiditate veniam quos animi necessitatibus, ab, non rerum voluptas labore natus officiis illo sunt quidem adipisci ut? Temporibus voluptas iste et.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, cupiditate veniam quos animi necessitatibus, ab, non rerum voluptas labore natus officiis illo sunt quidem adipisci ut? Temporibus voluptas iste et.'.repeat(5),
                        sent: false,
                        clicked: false

                    },

                ],
            },

        ],
        newMessage: '',
        activeConversation: 0,
        activeDate: '',
        disp: false,
        showOverflow: false,
        filter: '',
        dateIndex: 0,
        test_param: 125,
        test_arr: document.getElementsByClassName('mess-date')
    },
    methods: {
        showConversation(index) {
            // hide scrollbar and div.disp
            this.showOverflow = false;
            this.disp = false;
            // store scrollTop value
            this.contacts[this.activeConversation].scrolled = document.getElementById('conv').scrollTop
            // change conversation
            this.activeConversation = index;
            this.contacts[this.activeConversation].unreads = 0;
            this.$nextTick(() => {
                document.getElementById('conv').scrollTop = this.contacts[this.activeConversation].scrolled || 999999;
            })
        },
        automex(content, index, sent=false) {
            const now = dayjs().format('DD/MM/YYYY HH:mm:ss');
            this.contacts[index].messages.push({
                date: now,
                dateFormatted: this.formatDate(now),
                text: content,
                sent: sent,
                clicked: false
            })
            if (!sent) {this.contacts[index].lastAccess = now}
            if (index===this.activeConversation) {
                this.$nextTick(() => document.getElementById('conv').scrollTop = 999999)
            } else {
                this.contacts[index].unreads++
            }
        },
        rmMessage(index) {
            return this.contacts[this.activeConversation].messages.splice(index,1)},
        sendMessage(message) {
            this.automex(message, this.activeConversation, true)
            this.newMessage = '';
            setTimeout(() => {
                this.automex('Ok.', this.activeConversation)
            }, 1000);

        },

        filterContacts(filter) {
            return this.contacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
        },
        compareDate(index) {
            if (!index) { return true }
            const d = this.contacts[this.activeConversation].messages[index];
            const e = this.contacts[this.activeConversation].messages[index - 1];
            return d.dateFormatted != e.dateFormatted
        },
        openDrop(index) {},

        check() {
            const a = console.time()
            if (document.getElementById('conv').scrollHeight <= document.getElementById('conv').clientHeight) {
                return
            }

            clearTimeout(this.time);

            if (!this.disp) {
                this.showOverflow = true;
                this.disp = true;
            }

            for (let i = this.test_arr.length - 1; i >= 0; i--) {
                if (this.test_arr[i].getBoundingClientRect().y < this.test_param) {
                    this.dateIndex = i;
                    break
                }
            }

            console.timeEnd(a)
            this.time = setTimeout(() => {
                this.disp = false
                this.showOverflow = false
            }, 1000);
        },
        formatDate(date) {
            const d = date.slice(0, 10).split('/');
            switch (d[1]) {
                case '01':
                    d[1] = 'GENNAIO';
                    break;
                case '02':
                    d[1] = 'FEBBRAIO';
                    break;
                case '03':
                    d[1] = 'MARZO';
                    break;
                case '04':
                    d[1] = 'APRILE';
                    break;
                case '05':
                    d[1] = 'MAGGIO';
                    break;
                case '06':
                    d[1] = 'GIUGNO';
                    break;
                case '07':
                    d[1] = 'LUGLIO';
                    break;
                case '08':
                    d[1] = 'AGOSTO';
                    break;
                case '09':
                    d[1] = 'SETTEMBRE';
                    break;
                case '10':
                    d[1] = 'OTTOBRE';
                    break;
                case '11':
                    d[1] = 'NOVEMBRE';
                    break;
                case '12':
                    d[1] = 'DICEMBRE';
                    break;
            }
            return d.join(' ')
        }
    },
    created() {
        // preferisco formattarla a monte che calcolarla dinamicamente ogni volta, però forse non è necessario farlo su created: magari meglio all'apertura  
        // di una nuova conversazione, vediamo
        this.contacts.forEach((item) => 
        {   item.lastAccess = item.messages[item.messages.length - 1].date;
            item.messages.forEach((message) => {
                message.dateFormatted = this.formatDate(message.date)
            })
        });

            setTimeout(() => {this.automex("Ragazzi, venite un attimo da me su Zoom?", 0)}, 5000),
            setTimeout(() => {this.automex("La Marianna è tornata dalla campagna.", 5)}, 12000),
            setTimeout(() => {this.automex("Scusa ho sbagliato di nuovo chat", 5)}, 13000)


        this.$nextTick(() => document.getElementById('conv').scrollTop = 999999)


    },


})

/*
 * function (detailed!) description
 *
 * @param  || description
 * @param  || description
 *
 * @return || description
*/

