const tweakWishlist = [
    {
        name: 'Scribble',
        image: 'https://repo.packix.com/api/Packages/5cc5f4121fd91c001c731a82/screenshots/5cc7afa7774b0b0018f38638/download?size=medium',
        price: '1.49',
        ios: '11'
    },
    {
        name: 'ModernPower',
        image: 'https://repo.conorthedev.com/img/modernpower-screenshot-2.png',
        price: '0.99',
        ios: '11'
    },
    {
        name: 'Bubbles',
        image: 'https://creaturecoding.com/content/projects/bubbles/screenshots/screen_8.png',
        price: '0.99',
        ios: '11-12'
    },
    {
        name: 'NudeKeys',
        image: 'https://i.imgur.com/xjYKUHF.jpg',
        price: '1.99',
        ios: '12'
    }
]

const getWishlist = (req, res) => {
    res.json(tweakWishlist);
}

module.exports = {
    getWishlist
}