const currentTweaks = [
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

const getCurrentTweaks = (req, res) => {
    res.json(currentTweaks)
}

module.exports = {
    getCurrentTweaks
}