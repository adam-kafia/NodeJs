const name = "adam";
const userAge = 23;

const user = {
    name,
    userAge,
    location: "Ariana",
};

console.log(user);

const products = {
    label: "red wine",
    price: 13,
    stock: 69,
    salePrice: undefined,
};
const { label, price, stock } = products;

console.log(label + "\n" + price + "\n" + stock);
