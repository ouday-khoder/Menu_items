import image1 from '../Assets/istockphoto-1439437315-1024x1024.jpg';
import image2 from '../Assets/istockphoto-1441196959-1024x1024.jpg';
import image3 from '../Assets/istockphoto-1551381085-1024x1024.jpg';
import image4 from '../Assets/istockphoto-96430985-1024x1024.jpg';

const randomDescriptions = [
    "I'm a baby woke mlkshk wolf bitter live edge blue bottle",
    "Freshly brewed coffee on a rainy day, with bitter chocolate vibes",
    "A warm breeze on a sandy beach, and life feels light and sweet",
    "An electric pulse through the city streets, vibrant and uncontained",
    "Soft waves lapping at the shore, as a cool mist hangs in the air",
    "Crisp autumn air, fallen leaves crunch underfoot, bittersweet nostalgia",
    "A whirlwind of flavors, tangy and sweet, wrapped in golden moments",
    "Dreams of lavender fields and honey skies, gently soothing the soul"
];

const getRandomDescription = () => {
    const randomIndex = Math.floor(Math.random() * randomDescriptions.length);
    return randomDescriptions[randomIndex];
};

const Items = [
    {
        id: 1,
        title: 'ButterMilk Pancakes',
        category: 'breakfast',
        price: 15.99,
        image: image2,
        desc: getRandomDescription(),
    },
    {
        id: 2,
        title: 'Godzilla Milkshake',
        category: 'launch',
        price: 7.99,
        image: image1,
        desc: getRandomDescription(),
    },
    {
        id: 3,
        title: 'Dinner Double',
        category: 'dessert',
        price: 13.99,
        image: image3,
        desc: getRandomDescription(),
    },
    {
        id: 4,
        title: 'Country Delight',
        category: 'birthday',
        price: 20.99,
        image: image4,
        desc: getRandomDescription(),
    },
    {
        id: 5,
        title: 'Delight',
        category: 'Delight',
        price: 30.99,
        image: image4,
        desc: getRandomDescription(),
    },
    {
        id: 6,
        title: 'Product6',
        category: 'product6',
        price: 40.99,
        image: image4,
        desc: getRandomDescription(),
    },
];

export default Items;
