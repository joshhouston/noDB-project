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
    }
    
]



const getWishlist = (req, res) => {
    res.json(tweakWishlist);
}

const addWish = (req, res) => {
    tweakWishlist.push(req.body);
    res.json(wishes)
}

module.exports = {
    getWishlist,
    addWish,
}