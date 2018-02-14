new Vue({
    el: '#app',

    data: {
        posts: []
    },

    created() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.posts = response.data);
    }
});
