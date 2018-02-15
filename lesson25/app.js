Vue.component('coupon', {
    props: ['value'],

    template: `
        <input type="text" :value="value" @input="updateCode($event.target.value)" ref="input">
    `,

    methods: {
        updateCode(code) {
            console.log(code);
            // Validation ...
            if (code === 'ALLFREE') {
                this.$refs.input.value = code = '';
                return;
            }

            this.$emit('input', code);
        }
    }
});

new Vue({
    el: '#app',

    data: {
        coupon: 'FREEBIE'
    }
});
