<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: {
            name: {
                type: String,
                required: true,
                default: 'Joe'
            },
            userAge: Number
        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.name = 'Max';
                this.$emit('nameWasReset', this.name);
            }
        },
        created: function() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
