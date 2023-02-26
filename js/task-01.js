const categoriesEl = document.querySelector('#categories');
// console.log(categoriesEl);

const itemCategoryEl = document.querySelectorAll('.item');
console.log('Number of categories: ', itemCategoryEl.length);


itemCategoryEl.forEach( el => {
    console.log("Category: ", el.firstElementChild.textContent);
    console.log("Elements: ", el.lastElementChild.children.length);
});

