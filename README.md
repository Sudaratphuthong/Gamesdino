![DINO GAME](https://github.com/user-attachments/assets/ebc2bb3f-6755-4e37-94fa-18d8f2495363)

![dino](https://github.com/user-attachments/assets/9e5afb27-e027-4d85-ad0c-93735964d787)



![dino](https://github.com/user-attachments/assets/d6c49ea1-ebc1-4a93-9150-e94b606abd2d)


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

<img width="1470" alt="Screenshot 2567-11-24 at 12 53 18 PM" src="https://github.com/user-attachments/assets/5deaf188-6174-49b9-89a2-85c161956c2d">


How to access Gamedino
1. Click Go to enter Gamedino 
###Api https://api.thecatapi.com/v1/images/search
![Uploading Screenshot 2567-11-24 at 7.48.22 PM.png…]()



How to play Dino
1. Press the spacebar or enter key
2. Press the button in step 1 to skip the hippo. If you don't skip the hippo, the exploding hippo will appear.

###The score will be ranked by the 10 players with the highest scores and will show the date and time.   



Thank you <br>
BR <br>

![766DD77B-D524-4435-A071-B33DDB07EFCA_1_105_c](https://github.com/user-attachments/assets/9429a8d7-55f2-4406-aaa1-9723c71b6750)

Sudarat Phuthong 66130835 

Master of Engineering Program in Computer Engineering
College of Engineering and Technology

![logo](https://github.com/user-attachments/assets/c2dfb165-8afe-4aae-9ef8-55140da5c3eb)

Assist.Prof.Dr.Chaiyaporn Khemapatpapan,Ph.D

https://cite.dpu.ac.th/ct/master-ct/research_chaiyaporn.html

