# Real-time Object Detection & Translation Web App for TravelAR
XR Project for COMP4461 Human Computer Interaction Spring 24
Authors: Tiffany Fu, Nicole Lucas, Sherie Lam, Edith Leung

<img width="787" alt="Screenshot 2024-05-09 at 1 34 16 PM" src="https://github.com/tiffanyfu7/HCI-Object-Detection-and-Translation/assets/71473099/dd5f3866-15e9-474e-b767-659759cfa46e">

This is a web app that could detect & identify object and provide translation in real-time. 
It is built using Next.js, ONNXRuntime, and YOLOv7 model.

<!-- ## Demo at [RTOD.vercel.app](https://rtod.vercel.app)
<div align="center" >
  <video autoplay loop muted
  src="https://user-images.githubusercontent.com/44163987/211734752-e354b590-0f55-465a-b783-504ed55d3ed3.mp4" alt="demo.mp4" >
  </video>
</div> -->

### deployed
https://main.d1oms94am8cez.amplifyapp.com

### video paper
https://www.youtube.com/watch?v=otRh5jk1fiw&t=10s

## 1. Getting Started
How to run this project on your local machine for development and testing purposes.

### Prerequisites
In order to run this project, you will need to have the following software installed on your machine:

- Node.js
- A web browser 

### Installation
1. Install the necessary dependencies by running:
```
npm install
# or 
yarn install
```

2. Set up .env.local on root:
<img width="251" alt="Screenshot 2024-05-06 at 10 13 25 AM" src="https://github.com/edithsyl/HCI-Object-detection-and-translation/assets/69338737/b9ac6678-3932-42fe-a055-268e73a83932">

3. Start the development server by running:
```
npm run dev
# or
yarn dev
```

4. Open your web browser and navigate to http://localhost:3000 to view the application.
5. 

### Installation as PWA

This app can also be installed on your device (desktop or mobile) as a progressive web app (PWA). Here's how:

1. Visit [the app's URL](https://main.d1oms94am8cez.amplifyapp.com/) in a web browser that supports PWAs (such as Google Chrome or Firefox).
2. Look for the "Install" or "Add to Homescreen" button in the browser's interface. 
3. Click the button and follow the prompts to install the app.
4. The app will now be installed on your device and can be launched from the homescreen like any other app.
5. 

### Deployment
This project is deployed using AWS Amplify for public access. 

- [How to use AWS Amplify](https://aws.amazon.com/amplify/?gclid=CjwKCAjw3NyxBhBmEiwAyofDYTE252GKzQWQi-HPyW-3MtFZUQQPCIZRDOXGnUszq4A1qx3wvSSQChoC-QkQAvD_BwE&trk=b845ae09-4d10-4f92-a039-7c89dcf49eaf&sc_channel=ps&ef_id=CjwKCAjw3NyxBhBmEiwAyofDYTE252GKzQWQi-HPyW-3MtFZUQQPCIZRDOXGnUszq4A1qx3wvSSQChoC-QkQAvD_BwE:G:s&s_kwcid=AL!4422!3!647258095134!p!!g!!amplify%20framework!19621370789!149166972881)
- [How to deploy a Next.js application](https://nextjs.org/docs/deployment/)

## 2. Built With
- [ONNXRuntime](https://onnxruntime.ai/) - An open-source project for running inferences using pre-trained models in a variety of formats.
- [YOLOv7](https://github.com/WongKinYiu/yolov7) - A Object detection model which is used in this project.
- [Next.js](https://nextjs.org/) - A JavaScript framework for building server-rendered React applications.
- [PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) - A progressive web app that can be installed on a user's device and run offline, providing a native-like experience.


## Acknowledgement
This project is built based on the following two repos: 

[@juanjaho](https://github.com/juanjaho) - Object Detection Web App by Juan Sebastian
[@colbyfayock](https://github.com/colbyfayock/my-translator-app) -  AI Translator by Colby Fayock


## Citation for YOLOv7
```
@article{wang2022yolov7,
  title={{YOLOv7}: Trainable bag-of-freebies sets new state-of-the-art for real-time object detectors},
  author={Wang, Chien-Yao and Bochkovskiy, Alexey and Liao, Hong-Yuan Mark},
  journal={arXiv preprint arXiv:2207.02696},
  year={2022}
}
```
