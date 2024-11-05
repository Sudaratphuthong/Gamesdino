# How to start with ct648_finalproject
Using port .
- 5432 > SQLPostgase
- 4000 > API
- 80 > Website
### Please run following command

## Step for pull code form gitHub
* git clone https://github.com/Sudaratphuthong/Gamesdino.git
* cd  Gamesdino

## Step for install docker-compose
* sudo apt update
* sudo apt install docker.io
* sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose 
* sudo chmod +x /usr/local/bin/docker-compose

> optional for check  docker-compose version
> * docker-compose --version


## Step for update IP 
* cd dinogame/dino-game/src
* nano config.js
##### after nano config.js will see code below :
export const environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
  };
#### Please change form **localhost** to your IP, Example code below :
const config = {
    apiUrl: 'http://18.140.50.60:4000',
  };
  
  export default config;
## Step for run docker-compose
*cd .. (3time)
> * sudo docker-compose up

<img width="1466" alt="game1" src="https://github.com/user-attachments/assets/379f16c8-66a6-4e91-93e4-5950e555387a">

How to access Gamedino
1. Set a user
2. Set a password
3. Click Go to enter Gamedino 

###The red framed boxes are information about the names and characteristics of dinosaurs. If you click Refresh, it will change to the names of dinosaurs continuously.
###Api https://dinosaur-facts-api.shultzlab.com/dinosaurs/random

<img width="1465" alt="game2" src="https://github.com/user-attachments/assets/b50f01e9-c406-4bbf-839a-4a127e61dc5e">

How to play Dino
1. Press the spacebar or enter key
2. Press the button in step 1 to skip the hippo. If you don't skip the hippo, the exploding hippo will appear.

###The score will be ranked by the 10 players with the highest scores and will show the date and time.   



Thank you <br>
BR <br>
Sudarat Phuthong 66130835 
Master of Engineering Program in Computer Engineering
College of Engineering and Technology
![logo](https://github.com/user-attachments/assets/c2dfb165-8afe-4aae-9ef8-55140da5c3eb)

