# Stalk It

Online platform dedicated to provide the users the best analysis of all the stocks listed in NSE/BSE.

## Deployment

Deployed Link - https://stalwart-klepon-eafbeb.netlify.app/

## Tech Stack

**Client:** React, HTML, CSS

**Server:** Node, Express

## Features

- Users get to select company stocks to analyze information via charts.
![comp1](https://user-images.githubusercontent.com/76938125/230064526-d86a936b-b266-432b-88ce-8cc44f48f7fd.png)
![comp2](https://user-images.githubusercontent.com/76938125/230064531-d0ef5669-d292-4637-bd7d-5bac0f2ad997.png)
- NSE & BSE Data is displayed by selecting the NSE or BSE through the dropdown bar connected with stock market index API.
![nse1](https://user-images.githubusercontent.com/76938125/230064541-77b32d61-d5b5-45f4-904a-68a03a9247da.png)
![nse2](https://user-images.githubusercontent.com/76938125/230064547-7574c5c3-5660-4a0e-956a-b1374ca576a2.png)
- Feature to select the dates to view the stock market charts for the given dates.
![comp3](https://user-images.githubusercontent.com/76938125/230064536-f8cb5c66-6cd4-4566-b644-5c623e45ec9f.png)
- Feature to view the best performing company based on YTD (Year-to-Date), MTD (Month-to-Date), WTD(Week-to-Date) returns etc.
![perfo](https://user-images.githubusercontent.com/76938125/230064549-d6773e61-13f1-4f9f-bffb-ca55c7ca4c36.png)
- User Authentication is provided in the website through encryption.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the backend folder

`USERR` - MongoDB Username

`PASSWORD` - MongoDB Passowrd

`DATABASE` - MongoDB Database Name

## Installation

Clone the Repository using git clone

- Go the directory `backend` by

```bash
  cd .\backend\
  npm install
  npm run start
```

- Go to the directory `frontend` by

```bash
  cd .\FrontEnd\
  npm install
  npm start
```

- Add the necessary env variables in the `.env` file

Go to `http://localhost:3000/` to view the website

## Authors

- [@madhur3120](https://www.github.com/madhur3120)
- [@yashhhgupta](https://www.github.com/yashhhgupta)
- [@sanjusabu](https://www.github.com/sanjusabu)
- [@meetjain20](https://www.github.com/meetjain20)
