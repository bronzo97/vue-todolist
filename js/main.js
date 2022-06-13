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
        addItem: function() {
            this.listItems.push({
                text: ``,
                done: false,
            },)
        },
        delateItem: function(item) {
            this.listItems.splice(item, 1);
        },
}
});