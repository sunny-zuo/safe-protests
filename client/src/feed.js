import database from "../../server/database.js"
var arr = new fetch('http://localhost:8000/get_protests?page=1')
.then(response => response.json())
.then(data => console.log(data));
const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)
arr.array.forEach(element => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')
    const h1 = document.createElement('h1')
    h1.textCount = element.name
    const p = document.createElement('p')
    p.textContent = '${element.body}...'
    container.appendChild(card)
    card.appendChild(h1)
    card.appendChild(p)
});
request.send();