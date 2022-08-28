// JavaScript object notation (JSON)
const user = { id: 1, name: 'Artugrul Gazi', job: 'actor' }
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Ferdous',
    address: {
        street: 'Dhanmondi Bhooter Goli',
        city: 'Rajshahi',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);