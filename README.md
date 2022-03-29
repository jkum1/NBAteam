# NBAteam

## A Front End Website which displays NBA team data

## Tech Stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

### Version Control
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)


## Getting Started
*****************
Installation:
```
npm install
npm start
npm run server-dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Functionality
*****************
1. Displays Nba team data (7 per page)
2. Can sort Alphabetically by City name
3. Can scroll through pages
4. Can open a specific team data and show a side panel

## Future Improvements
*******************
1. Bug where exiting the side panel still highlights the selected team row
***********
    Can be fixed by reorgainizing how the (isSelected) hook is stored and changed per row
2. Write some unit tests
**********
    Can probably predit some async issues
3. Better unit management
*********
    Can orgainze the teamList sectionm better by breaking up the pageNum and teamList sections into separate jsx files
4. Better styling
********
    Can definietly improve on better css styling.
5. Search bar implementation
*********
    Would do by storing an array of all NBA teams and converyting it into a prefix tree with ids stored as leaves.