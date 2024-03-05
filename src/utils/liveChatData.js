export const getRandomUsername = () => {

    const superheroUsernames = [
        'IronAvenger',
        'WebSlinger',
        'HulkSmash',
        'ThunderGod',
        'WidowSpy',
        'CapAmerica',
        'MarvelousMan',
        'SuperSoldier',
        'ScarletWitcher',
        'AntTiny',
        'WolverineSnikt',
        'StormWeather',
        'DrStrangeMagic',
        'BlackPantherKing',
        'CyclopsVisor',
        'GrootIAmGroot',
        'StarLordQuill',
        'LokiTrickster',
        'RedSkullMenace',
        'ThanosSnap',
    ];

    const randomIndex = Math.floor(Math.random() * superheroUsernames.length);
    return superheroUsernames[randomIndex];
};

export const getRandomContent = () => {
    const chatMessages = [
        "Ever wonder how Spider-Man takes notes? 🕷️📝",
        "Iron Man's favorite game is... 🎮",
        "Guess why Thor brought a hammer to school? ⚡🔨",
        "Did you know Black Widow loves to dance? 💃",
        "Captain America's secret talent: barbering! ✂️",
        "What's on Doctor Strange's mystical menu? 🧙‍♂️🍽️",
        "Why did Hulk say to the salad? 🥗💥",
        "Have you heard Groot's stand-up routine? 🌳😄",
        "Join Loki's weather update: mischief alert! ☁️⚡",
        "What's the latest hit from Ant-Man's band? 🐜🎸",
        "Why did Thanos start a garden? 🌱🧤",
        "Guess who opened a bakery: Thor! 🍞⚡",
        "Hulk's preferred method of communication? 🗣️💢",
        "What's Black Widow's go-to website? 🕸️💻",
        "Did you catch Loki's gardening tips? 🌿😈",
        "Find out how Iron Man organizes emails! 📧🤖",
        "Join Groot for some tiny tunes! 🎶🌱",
        "Why did Doctor Strange become a chef? 🧑‍🍳🔮",
        "What's Spider-Man's favorite coffee shop? ☕🕸️",
        "Hulk's unique approach to a salad: smash! 🥗💥",
      ];      

    const randomIndex = Math.floor(Math.random() * chatMessages.length);
    return chatMessages[randomIndex];
};

export const getRandomProfileColor = () => {
    const colorClasses = [
        'bg-black',
        'bg-gray-800',
        'bg-gray-700',
        'bg-gray-600',
        'bg-gray-500',
        'bg-gray-400',
        'bg-slate-800',
        'bg-slate-700',
        'bg-slate-600',
      ];

    const randomeIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomeIndex];
}