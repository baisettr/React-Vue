Vue.component('invoice-list', {
    props: ['item'],
    template: '<input v-model="item.name" placeholder="Product Name"><input v-model="item.price" placeholder="Product Name">',
    computed: {
        fullName: function () {
            return `${this.person.fn} : ${this.person.ln}`;
        },
        greet: function () {
            return `Hello from ${this.person.fn}`;
        }
    },
    methods: {
        handleGreet: function () {
            this.$emit('greet', this.greet);
        }
    }
})