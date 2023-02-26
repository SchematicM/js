const div = document.createElement('div');
div.classList.add('sessions');
const ul = document.createElement('ul');
ul.innerText ='You have visited us: ';
const sessions = JSON.parse(localStorage.getItem('sessions'));
for (const session of sessions) {
    const li = document.createElement('li');
    li.innerText = session;
    ul.appendChild(li);
}
div.appendChild(ul);
document.body.append(div);