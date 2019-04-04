const shoppingCart = [{ title: 'into to functions', type: 'books', amount: 20 }, { title: 'jeans', type: 'clothing', amount: 30 }, { title: 'iphone', type: 'electronics', amount: 20 }, { title: 'dive into react', type: 'books', amount: 30 }];


const byBooks = (item) => item.type === 'books';
const getAmount = (item) => item.amount;
const sumAmount = (total, amount) => total + amount;

const getTotal = (list) => {
    return list.filter(byBooks).map(getAmount).reduce(sumAmount, 0);

};

console.log(getTotal(shoppingCart));
