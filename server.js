const express = require('express');
const app = express();
const port = 3000;

app.get('/assistant/greet', (req, res) => {
    const userName = req.query.name || 'Guest';  

    const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });

    const greetingMessage = `Hello, ${userName}! Welcome to your virtual assistant.`;

    let dayMessage;
    switch (currentDay) {
        case 'Monday':
            dayMessage = "Happy Monday! Let's start the week strong!";
            break;
        case 'Tuesday':
            dayMessage = "Tackle the day! It's Tuesday!";
            break;
        case 'Wednesday':
            dayMessage = "It's Hump Day! You're halfway through the week!";
            break;
        case 'Thursday':
            dayMessage = "Almost there! Happy Thursday!";
            break;
        case 'Friday':
            dayMessage = "Yay, it's Friday! The weekend is near!";
            break;
        case 'Saturday':
            dayMessage = "Enjoy your weekend! It's Saturday!";
            break;
        case 'Sunday':
            dayMessage = "Relax, it's Sunday! Take it easy.";
            break;
        default:
            dayMessage = "Have a great day!";
            break;
    }

    res.json({
        greeting: greetingMessage,
        dayMessage: dayMessage
    });
});

app.listen(port, () => {
    console.log(`Virtual Assistant API is running at http://localhost:${port}`);
});
