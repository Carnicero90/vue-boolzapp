

var app = new Vue({
    el: '#root',
    data: {
        contacts: [{
            name: 'Manuele Volponi',
            avatar: '_4',
            scrolled: 0,
            messages: [
                {
                    date: '23/04/2021 15:30:55',
                    text: 'Dovrei farti una statua per quanto il tuo snippet sulle scrollbar mi ha semplificato la vita.',
                    sent: true
                },
                {
                    date: '23/04/2021 15:50:00',
                    text: 'Ok.',
                    sent: false
                }
            ],
        }, {
            name: 'Alessandro Scolozzi',
            avatar: '_5',
            scrolled: 0,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Metti i commenti!',
                    sent: false
                },
                {
                    date: '12/01/2020 15:50:00',
                    text: 'No.',
                    sent: true
                }
            ],
        }, {
            name: 'Donato Riccio',
            avatar: '_7',
            scrolled: 0,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Attieniti alle consegne!',
                    sent: false
                },
                {
                    date: '12/01/2020 15:50:00',
                    text: 'No.',
                    sent: true
                }
            ],
        }, {
            name: 'Simone Taccori',
            avatar: '_2',
            scrolled: 0,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Scrivi bel codice!',
                    sent: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'No.',
                    sent: true
                }
            ],
        },
        {
            name: 'Michele',
            avatar: '_1',
            scrolled: 0,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    sent: true
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    sent: true
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'sfamato!',
                    sent: false
                },

            ],
        },
        {
            name: 'Fabio',
            avatar: '_6',
            scrolled: 0,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    sent: true
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    sent: false
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    sent: true
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            scrolled: 0,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    sent: false
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    sent: true
                },
                {
                    date: '30/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    sent: false
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
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    sent: true
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    sent: true
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, cupiditate veniam quos animi necessitatibus, ab, non rerum voluptas labore natus officiis illo sunt quidem adipisci ut? Temporibus voluptas iste et.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, cupiditate veniam quos animi necessitatibus, ab, non rerum voluptas labore natus officiis illo sunt quidem adipisci ut? Temporibus voluptas iste et.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, cupiditate veniam quos animi necessitatibus, ab, non rerum voluptas labore natus officiis illo sunt quidem adipisci ut? Temporibus voluptas iste et.'.repeat(5),
                    sent: false
                },

            ],
        },

        ],
        newMessage: '',
        activeConversation: 1,
        activeDate: '',
        time: -1,
        disp: false,
        showOverflow: false,
        filter: '',
        param: 0,
        activeConvDates: [],
        dateIndex: 0,
    },
    methods: {
        showConversation(index) {
            this.dateIndex = 0
            this.showOverflow = false;
            this.disp = false;
            this.contacts[this.activeConversation].scrolled = document.getElementById('conv').scrollTop
            this.activeConversation = index;
            this.activeDate = this.activeConvDates[0]
            this.$nextTick(() => document.getElementById('conv').scrollTop = this.contacts[this.activeConversation].scrolled || 999999);
        },
        sendMessage(message) {
            const newMessage = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: message,
                sent: true
            };
            newMessage.dateFormatted = this.formatDate(newMessage.date)
            this.contacts[this.activeConversation].messages.push(newMessage);
            this.newMessage = '';
            setTimeout(() => {
                const autoMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'ok',
                    sent: false
                };
                autoMessage.dateFormatted = this.formatDate(autoMessage.date)
                this.contacts[this.activeConversation].messages.push(autoMessage);
                this.activeConvDates = Array.from(document.getElementsByClassName('mess-date')).reverse();
                this.$nextTick(() => document.getElementById('conv').scrollTop = 999999);
            }, 1000);
            this.$nextTick(() => document.getElementById('conv').scrollTop = 999999);

        },

        filterContacts(filter) {
            return this.contacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
        },
        compareDate(index) {
            // TEST
            if (!index) { return true }
            const d = this.contacts[this.activeConversation].messages[index];
            const e = this.contacts[this.activeConversation].messages[index - 1];
            return d.date.slice(0, 10) != e.date.slice(0, 10)
        },

        // SUPERTEST, PORCATE BONUS
        check() {
            if (document.getElementById('conv').scrollHeight <= document.getElementById('conv').clientHeight) {
                return
                //tolgo sto early exit nella versione finale, però in itinere lascio così perchè è piu chiaro
            }
            clearTimeout(this.time);

            if (!this.disp) {
                this.showOverflow = true;
                this.disp = true;
            }
            const d = this.activeConvDates[this.dateIndex];
            this.activeDate = d.innerHTML;
            if (this.activeConvDates[this.dateIndex].getBoundingClientRect().y > this.param) {
                this.dateIndex++
            }
            if (this.dateIndex > 0) {
                if (this.activeConvDates[this.dateIndex - 1].getBoundingClientRect().y < this.param) {
                    this.dateIndex--
                }
            }
            // for (item of this.activeConvDates) {
            //     if (item.getClientRects()[0].y < this.param) {

            //         break
            //     }
            // }
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
        this.contacts.forEach((item) => {
            item.messages.forEach((message) => {
                message.dateFormatted = this.formatDate(message.date)
            })
        }),

            this.$nextTick(() => this.param = document.getElementsByClassName('mess-date')[0].offsetTop + document.getElementsByClassName('mess-date')[0].clientHeight),
            this.$nextTick(() => document.getElementById('conv').scrollTop = 999999),
            this.$nextTick(() => this.activeConvDates = Array.from(document.getElementsByClassName('mess-date')).reverse())

    }
})

/*
 * function (detailed!) description
 *
 * @param  || description
 * @param  || description
 *
 * @return || description
*/

