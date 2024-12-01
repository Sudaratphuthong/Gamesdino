![DINO GAME](https://github.com/user-attachments/assets/ebc2bb3f-6755-4e37-94fa-18d8f2495363)

![hippo](https://github.com/user-attachments/assets/19e9defc-acca-4896-a056-156390f4d535)


![pp](https://github.com/user-attachments/assets/539229c8-a827-4a63-87ef-1e04b4dce98a)





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

<img width="1470" alt="Screenshot 2567-11-25 at 11 15 21 PM" src="https://github.com/user-attachments/assets/79741b35-1d71-40e1-ae37-ed415e7c4150">



How to access Gamedino
1. Click Go to enter Gamedino 
###Api https://dinoapi.brunosouzadev.com/api/dinosaurs
#Give knowledge about dinosaurs#

<img width="1470" alt="Screenshot 2567-11-25 at 11 58 29 PM" src="https://github.com/user-attachments/assets/5b85bed4-b369-4ee2-bfd5-7379d49a0925">




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

