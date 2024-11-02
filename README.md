# How to start with ct648_finalproject
Using port .
- 5432 > SQLPostgase
- 4000 > API
- 80 > Website
### Please run following command

## Step for pull code form gitHub
* git clone https://github.com/Sudaratphuthong/Gamesdino.git
* cd  Ubuntu

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
> * sudo docker-compose up



Thank you and have a nice day. <br>
BR <br>
Sudarat Phuthong 66130835
