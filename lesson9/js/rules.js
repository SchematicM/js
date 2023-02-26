// --------
//     за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт,
//     всі заголовки покласти в (масив)характеристику headings,
//     всі параграфи покласти в характеристику (масив)
//     paragraphs
//
// ------
let collection = {
    headings: [],
    paragraphs: []
};

function explorer(htmlTag) {
    let children = htmlTag.children;
    if (children.length !== 0) {
        for (const child of children) {
            explorer(child);
        }
    } else {
        if (['H1','H2','H3','H4','H5','H6'].includes(htmlTag.tagName)){
            collection.headings.push(htmlTag.outerText);
        }else if(htmlTag.tagName === 'P'){
            collection.paragraphs.push(htmlTag.outerText);
        }
    }
}
//implementation without recursion
// function mapperDivsAndParagraphs(htmlElement, collection) {
//     let ps = document.getElementsByTagName('p');
//     let heads = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
//     Array.prototype.forEach.call(heads, heading => collection.headings.push(heading.outerText));
//     Array.prototype.forEach.call(ps, p => collection.paragraphs.push(p.outerText));
//     return collection;
// }

//collection = mapperDivsAndParagraphs(document.body, collection);
 explorer(document.body);

console.log('Headings:');
collection.headings.forEach(element => console.log(element));
//console.log(collection.divBlocks.length);//191 div (19div на одного юзера + загальний div)
console.log('Paragraphs:');
collection.paragraphs.forEach(element => console.log(element));

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки,
//     та робить в блоці з id=content з них список(ul>li), який буде змістом того,
//     що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
let div = document.getElementById('content');

let ul = document.createElement('ul');

for (const item of collection.headings) {
    let li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
}
div.appendChild(ul);
document.body.appendChild(div);