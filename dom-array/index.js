users = [
    {
        name: 'Ridham',
        wealth: Math.floor(Math.random() * 1000000),

    },
    {
        name: 'Rohan',
        wealth:  Math.floor(Math.random() * 1000000),

    },
    {
        name: 'Rahul',
        wealth:  Math.floor(Math.random() * 1000000),

    },
    {
        name: 'Rajat',
        wealth:  Math.floor(Math.random() * 1000000),

    }
]

const show = document.getElementById('list-of-users');

document.addEventListener('DOMContentLoaded', showUsers);

function showUsers() {
    show.innerHTML = users.map(user => `<li class="font-semibold">${user.name}: ${user.wealth} $</li>`).join('');
}
document.getElementById('add').addEventListener('click', addUser);

function addUser() {
    user = [
        {
            name: 'Dhiraj',
            wealth: Math.floor(Math.random() * 1000000),
    
        },
        {
            name: 'Piyush',
            wealth: Math.floor(Math.random() * 1000000),
    
        },
        {
            name: 'Pandu',
            wealth: Math.floor(Math.random() * 1000000),
    
        },
        {
            name: 'Ankit',
            wealth: Math.floor(Math.random() * 1000000),
    
        }
    ]
    users.push(user[Math.floor(Math.random() * user.length)]);
    showUsers();


}

document.getElementById('double').addEventListener('click', doubleMoney);

function doubleMoney() {
    users = users.map(user => {
        return { ...user, wealth: user.wealth * 2 }
    });
    showUsers();
}

document.getElementById('sort').addEventListener('click', sortMoney);

function sortMoney() {
    users = users.sort((a, b) => b.wealth - a.wealth);
    showUsers();
}

const total = document.getElementById('total');


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('wealth').addEventListener('click', calculateTotal);
});

function calculateTotal() {
    const totalWealth = users.reduce((acc, user) => acc + user.wealth, 0);
    total.innerHTML = `<h3 class="font-semibold">Total Wealth: ${totalWealth} $</h3>`;
}
