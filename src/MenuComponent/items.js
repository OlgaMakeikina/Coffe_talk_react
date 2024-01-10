import espresso from './MenuContent/coffeeOne.jpg';
import cappuccino from './MenuContent/coffeeTwo.jpg';
import latte from './MenuContent/coffeeThree.jpg';
import frappe from './MenuContent/coffeeFour.jpg';
import iceCoffe from './MenuContent/coffeeFive.jpg';
import pumpkin from './MenuContent/coffeeSix.jpg';
import cupcake from './MenuContent/bakeryOne.jpg';
import cinnamon from './MenuContent/bakeryTwo.jpg';
import applePie from './MenuContent/bakeryThree.jpg';
import croissant from './MenuContent/bakeryFour.jpg';
import juice from './MenuContent/juice.jpg';
import herbalTea from './MenuContent/teaOne.jpg';
import blackTea from './MenuContent/teaTwo.jpg';
import beans from './MenuContent/beans.jpg';

export const items = [
{
    id: 1,
    name: "Espresso",
    searchTerm: ["coffee", "popular"],
    price: 3,
    image: espresso
},

{
    id: 2,
    name: "Cappuccino",
    searchTerm: ["coffee", "popular"],
    price: 4,
    image: cappuccino
},

{
id: 3,
name: "Latte",
searchTerm: ["coffee", "popular"],
price: 5,
image: latte
},

{
    id: 4,
    name: "Frappe",
    searchTerm: ["coffee"],
    price: 5,
    image: frappe
    },

    {
        id: 5,
        name: "Ice Coffe",
        searchTerm: ["coffee", "ice"],
        price: 5.5,
        image: iceCoffe
        },

 {
    id: 6,
    name: "Pumpkin Coffee",
    searchTerm: ["coffee", "season"],
    price: 7,
    image: pumpkin
    },

    {
        id: 7,
        name: "Cupcake",
        searchTerm: ["bakery"],
        price: 4.5,
        image: cupcake
        },

        {
            id: 8,
            name: "Cinnamon Bun",
            searchTerm: ["bakery", "popular"],
            price: 5,
            image: cinnamon
            },

            {
                id: 9,
                name: "Apple Pie",
                searchTerm: ["bakery", "season"],
                price: 6.5,
                image: applePie
                },

            {
                id: 10,
                name: "Croissant",
                searchTerm: ["bakery", "popular"],
                price: 3.5,
                image: croissant
                },

{
                id: 11,
                name: "Herbal Tea",
                searchTerm: ["other"],
                price: 2.5,
                image: herbalTea
                },

                {
                    id: 12,
                    name: "Black Tea",
                    searchTerm: ["other"],
                    price: 2.5,
                    image: blackTea
                    },

                    {
                        id: 13,
                        name: "Orange Fresh",
                        searchTerm: ["other", "ice"],
                        price: 2.0,
                        image: juice
                        },

                        {
                            id: 14,
                            name: "Arabica Beans 200g",
                            searchTerm: ["beans"],
                            price: 4.0,
                            image: beans
                            },
]