import allInclusive from './images/allInclusive.jpg';
import bar from './images/bar.jpg';
import executive from './images/executive.jpg';
import indoorPool from './images/indoorPool.jpg';
import juniorSuite from './images/juniorSuite.jpg';
import outdoorPool from './images/bannerBkg.jpg';
import standard from './images/standard.jpg';
import suite from './images/suite.jpg';
import withBalcony from './images/withBalcony.jpg';

const mockData = [
    {
        src: indoorPool,
        title: 'Indoor pool',
        description: '25m long indoor pool with hammocks and sauna'
    },
    {
        src: bar,
        title: 'Cocktail bar',
        description: 'Explendid classic cocktail bar with live music'
    },
    {
        src: standard,
        title: 'Standard room',
        description: '20 sqm rooms with full amenities',
        cat: 'room',
        price: 140,
        stock: 12,
        notAvailableStart: new Date(2023, 4, 10).getTime(),
        notAvailableEnd: new Date(2023, 4, 10).getTime()
    },
    {
        src: outdoorPool,
        title: 'Outdoor pool',
        description: 'Infinity pool with breath taking Ocean views'
    },
    {
        src: executive,
        title: 'Executive room',
        description: 'Our business rooms with lounge access',
        cat: 'room',
        price: 170,
        stock: 9,
        notAvailableStart: new Date(2023, 4, 10).getTime(),
        notAvailableEnd: new Date(2023, 4, 10).getTime()
    },
    {
        src: withBalcony,
        title: 'Rooms with balcony',
        description: 'Rooms with amazing sea views',
        cat: 'room',
        price: 200,
        stock: 15,
        notAvailableStart: new Date(2023, 4, 10).getTime(),
        notAvailableEnd: new Date(2023, 4, 10).getTime()
    },
    {
        src: juniorSuite,
        title: 'Junior suite',
        description: 'Our junior suites are perfect for families',
        cat: 'room',
        price: 250,
        stock: 10,
        notAvailableStart: new Date(2023, 4, 10).getTime(),
        notAvailableEnd: new Date(2023, 4, 10).getTime()
    },
    {
        src: suite,
        title: 'Our corner suite',
        description: 'Discrete and luxurious with butler service',
        cat: 'room',
        price: 300,
        stock: 4,
        notAvailableStart: new Date(2023, 4, 20).getTime(),
        notAvailableEnd: new Date(2023, 4, 25).getTime()
    },
    {
        src: allInclusive,
        title: 'All inclusive hotels',
        description: 'Best hotels with all services and more',
        cat: 'room',
        price: 350,
        stock: 7,
        notAvailableStart: new Date(2023, 6, 15).getTime(),
        notAvailableEnd: new Date(2023, 7, 15).getTime()
    },
];

export const chips = [
    { key: 0, label: 'Cancellation Flexibility' },
    { key: 1, label: 'Standard Rooms' },
    { key: 2, label: 'Executive Rooms' },
    { key: 3, label: 'Access to Lounge' },
    { key: 4, label: 'More Filters' },
];

export default mockData;