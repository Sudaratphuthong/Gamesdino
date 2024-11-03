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

<img width="1465" alt="game2" src="https://github.com/user-attachments/assets/b50f01e9-c406-4bbf-839a-4a127e61dc5e">




Thank you <br>
BR <br>
Sudarat Phuthong 66130835 
Master of Engineering Program in Computer Engineering
College of Engineering and Technology
