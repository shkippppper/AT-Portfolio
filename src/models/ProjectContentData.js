const echoesOfTheUnderhallsData = {
    title: 'Echoes Of The Underhalls',
    tableData: [
        {
            title: "Description",
            scrollTo: 'description',
            subTitles: []
        },
        {
            title: "Case Study",
            scrollTo: 'caseStudy',
            subTitles: []
        },
        {
            title: "Game Loop",
            scrollTo: 'gameLoop',
            subTitles: [
                {
                    title: "Core Gameplay",
                    scrollTo: 'coreGameplayLoop',
                },
                {
                    title: "Side Gameplay",
                    scrollTo: 'sideGameplayLoop',
                }
            ]
        },
        {
            title: "Quick Features",
            scrollTo: 'quickFeatures',
            subTitles: []
        },
        {
            title: "Play The Game",
            scrollTo: 'playTheGame',
            subTitles: []
        },
    ],
    detailsData: [
        {
            header: "Genres:",
            subItems: ["Roguelike","Singleplayer", "Action Game", "Casual Game"]
        },
        {
            header: "Development Tools:",
            subItems: ["c#" ,"Unity", "Photoshop"]
        },
        {
            header: "Duration:",
            subItems: ["[2 Months]", "25/12/22 - 20/02/23"]
        },
        {
            header: "My Roles:",
            subItems: ["Game Designer", "Game Developer", "Level Designer", "2D Designer"]
        },
    ]
}

export default echoesOfTheUnderhallsData
