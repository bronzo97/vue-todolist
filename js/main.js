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
        newText: '',
        // addItem: {
        //     newText: '',
        //     done: false,
        // },
},
    methods: {
        pushItem: function() {
            this.listItems.push(
                {
                    text: this.newText,
                    done: false,
                },
            );
        },
        delateItem: function(item) {
            this.listItems.splice(item, 1);
        },
}
});