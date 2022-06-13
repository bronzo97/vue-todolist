const listElements = [
{
    text: 'Fare la spesa',
    done: true,
},
{
    text: "Fare l'esercizio di oggi",
    done: false,
},

]



const mainVue = new Vue({
    el: "#app",

    data: {
        listItems: listElements,
},
    methods: {
        delate: function(item) {
            this.listItems.splice(item, 1);
        },
}
});