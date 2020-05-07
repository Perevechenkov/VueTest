Vue.component('message', {
    props: [
        'header', 'body'
    ],
    data() {
        return {
            isVisible: true
        };
    },
    template:
        `<article class="message" v-show="isVisible">
            <div class="message-header">
                <p>{{header}}</p>
                <button class="delete" aria-label="delete" @click="isVisible = false"></button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>`,
    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

Vue.component('task-list', {
    template: `<div><task v-for="task in tasks">{{task.description}}</task></div>`,
    data() {
        return {
            tasks: [
                {description: 'Eat', completed: true},
                {description: 'Sleep', completed: false},
                {description: 'Watch Gumball', completed: false}
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});