const availability = [
    {
        month: "SET",
        day: 18,
        period: "10:00 às 14:00"
    },
    {
        month: "SET",
        day: 19,
        period: "10:00 às 14:00"
    },
    {
        month: "SET",
        day: 20,
        period: "10:00 às 14:00"
    },


    {
        month: "OUT",
        day: 9,
        period: "10:00 às 14:00"
    },
    {
        month: "OUT",
        day: 10,
        period: "10:00 às 14:00"
    },
    {
        month: "OUT",
        day: 11,
        period: "10:00 às 14:00"
    },

    {
        month: "NOV",
        day: 9,
        period: "10:00 às 14:00"
    },
    {
        month: "NOV",
        day: 10,
        period: "10:00 às 14:00"
    },

];

const candies = [
    {
        id: 1,
        title: 'Pudim de melado',
        sinopse: '',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        city: {
            id: 1,
            name: 'Santa Rita do Sapucaí',
            state: 'Minas Gerais'
        },
        price: "R$ 99,00 por pessoa",
        thumb: '',
        recorrence: 10,
        category: {
            name: 'doces',
            image: ''
        },
        availability
    },
    {
        id: 2,
        title: 'Pé de moleque da Neuzinha',
        sinopse: '',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        city: {
            id: 1,
            name: 'Juazeiro',
            state: 'Pernambuco'
        },
        price: "R$ 23,00 por pessoa",
        thumb: '',
        recorrence: 1,
        category: {
            name: 'doces',
            image: ''
        },
        availability
    },
    {
        id: 3,
        title: 'Bala delícia da Nani',
        sinopse: '',
        image: '',
        description: 'Oportunidade incrível de conhecer a fábrica de doces de leites junto de uma pessoa local.',
        city: {
            id: 1,
            name: 'Onde: São Sebastião das Águas Claras',
            state: 'Minas Gerais'
        },
        price: "R$ 15,00 por pessoa",
        thumb: '',
        recorrence: 5,
        category: {
            name: 'doces',
            image: ''
        },
        availability
    }
];

const drinks = [
    {
        id: 4,
        title: 'Alambique',
        sinopse: '',
        image: '',
        description: 'Oportunidade incrível de conhecer o alambique reponsável pela fabricação da cachaçá pitú.',
        city: {
            id: 1,
            name: 'Poços de Caúda',
            state: 'Minas Gerais'
        },
        price: "R$ 150 por pessoa",
        thumb: '',
        recorrence: 1,
        category: {
            name: 'drinks',
            image: ''
        }
    }
];

//mock experiences.
const experiences = [
    ...candies,
    ...drinks
];

module.exports = experiences;