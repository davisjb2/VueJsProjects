new Vue({
    el: '#app',
    data: {
        title: 'The VueJS Instance'
    },
    beforeCreate: function() {
        console.log('beforeCreated');
    },
    created: function() {
        console.log('created');
    },
    beforeMount: function() {
        console.log('beforeMount');
    },
    mounted: function() {
        console.log('mounted');
    },
    beforeUpdate: function() {
        console.log('beforeUpdate');
    },
    updated: function() {
        console.log('update');
    },
    beforeDestroy: function() {
        console.log('beforeDestroy');
    },
    destroyed: function() {
        console.log('destroyed');
    },
    methods: {
        destroy: function() {
            this.$destroy();
        }
    }
})