var app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
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
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
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
                visible: true,
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
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        sent: false
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
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
                visible: true,
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
        activeConversation: 0
    },
    methods: {
        showConversation(index) {
            // TEST
            this.contacts[this.activeConversation].scrolled = document.getElementById('conv').scrollTop
            this.activeConversation = index;
            setTimeout(() => {
                document.getElementById('conv').scrollTop =this.contacts[this.activeConversation].scrolled || 999999
            })
        }
    },
    created() {
        // TEST
        setTimeout(() => {
            document.getElementById('conv').scrollTop = 999999
        })
    }
})

// alert(dayjs().format())
/*
 * function (detailed!) description
 *
 * @param  || description
 * @param  || description
 *
 * @return || description
*/

