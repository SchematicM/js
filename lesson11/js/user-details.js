const currentURL = new URL(location.href);
const id = currentURL.searchParams.get('id');
function createUserObj(user, div) {
    for (const userKey in user) {
        if (typeof user[userKey] !== 'object') {
            div.innerHTML += `${userKey} : ${user[userKey]}<br/>`
        } else {
            div.innerHTML += `${userKey} :<br/> `;
            createUserObj(user[userKey], div);
        }
    }
}
fetch('https://jsonplaceholder.typicode.com/users/'.concat(id))
.then(value => value.json())
.then(user => {
    const div = document.createElement('div');
    div.classList.add('user');
    createUserObj(user,div);
    document.body.appendChild(div);
})