// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
const allElements = document.getElementsByTagName('*');

for (let i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('click', function(event) {
        const tag = this.tagName.toLowerCase();
        const classes = this.classList;
        const id = this.id;
        const height = this.offsetHeight;
        const width = this.offsetWidth;
        console.log(`Tag: ${tag}, Classes: ${classes}, ID: ${id}, Size: ${height}*${width}`);
        event.stopPropagation();
    });
}

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


const popup = document.createElement('div');
popup.classList.add('popup');
document.body.appendChild(popup);
popup.addEventListener('click', function() {
    popup.style.display = 'none';
});

for (let i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('click', function(event) {
        const tag = this.tagName.toLowerCase();
        const classes = this.classList;
        const id = this.id;
        const height = this.offsetHeight;
        const width = this.offsetWidth;
        popup.innerHTML = `<p>Tag: ${tag}</p><p>Classes: ${classes}</p><p>ID: ${id}</p><p>Size: ${height}*${width}</p>`;
        popup.style.display = 'block';
        event.stopPropagation();
    });
}

popup.addEventListener('click', function(event) {
    popup.style.display = 'none';
});