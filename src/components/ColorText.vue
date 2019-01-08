<template>
    <div>
        <span v-for="(letter, index) in textAsArray" :class="getColorClassForIndex(index)">
            {{letter}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "ColorText",
        computed: {
            textAsArray: function () {
                return this.text.split("");
            }
        },
        methods: {
            getColorClassForIndex: function (index) {
                return this.colors[
                index % this.colors.length
                    ];
            }
        },
        data: function () {
            return {
                colors: [
                    "purple--text",
                    "yellow--text",
                    "orange--text",
                    "light-blue--text",
                    "red--text",
                    "blue--text"
                ]
            }
        },
        props: ['text']
    }
</script>

<style scoped>

</style>
