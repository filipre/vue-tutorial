Vue.component('task', {
    template: `
        <li><slot></slot></li>
    `
});

Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks" :key="task.task">{{ task.task }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: true},
                { task: 'Go to the farm', complete: false}
            ]
        };
    }
});

new Vue({
    el: '#root'
});
