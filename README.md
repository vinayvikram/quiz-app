# Quiz App - Create a quiz using JSON File.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## View this app

This app has been deployed @ [create-quiz.vercel.app](https://create-quiz.vercel.app)

## Using this app

1. Open [the app](https://create-quiz.vercel.app) in your browser.
   ![Screenshot 1](/screenshots/screenshot1.png)
2. Select and upload a JSON file containing questions as shown below.
   ![Screenshot 2](/screenshots/screenshot2.png)
3. Start the quiz by clicking on 'Start Quiz' button.
   ![Screenshot 2](/screenshots/screenshot2.png)
4. It will redirect you to the quiz app with all the questions feeded and timer set.
   ![Screenshot 3](/screenshots/screenshot3.png)

## JSON Configuration File

The app will require JSON file with questions in a specified format as shown below.

![Sample JSON File](/screenshots/screenshot4.png)

Note that the types for questions must be provided as follows:-

- Fill in the blank with one blank - **FITB1**
- Fill in the blank with two blank - **FITB2**
- Multiple answers question - **MAQ**
- Multiple choice question - **MCQ**
- Match the following - **MTF**

For detailed view of format of questions and answers format, refer the above image.

This repo contains a sample JSON file as [config.json](/config.json). You can download it for testing this app.

## More about the functionality

1. Questions answered will be saved as you type or tick and will be shown in green color boxes in the side navigation.
2. Questions not answered will be shown in red color boxes in the the side navigation.
3. You can navigate to next and previous question using bottom navigation.
4. You can directly jump around the questions using side navigation.
5. Your answers will be submitted and evaluated automatically when the time will be up.
6. You can also submit your answer by clicking on green submit button.

## Contribution

This app has basic functionality and styling which can be improved further. You are most welcome to contribute in this project.

You download this repo and run `npm install` to install all the dependencies, then run `npm start` to get started with the development. That's it.
