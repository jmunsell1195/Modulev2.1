# Modulev2.1

In this project, we aim to make an educational web application that delivers content dynamically to students based on their domain knowledge level. 
The app is made in django with a postgres database. Functionality is added with vanilla javascript and jQuery handles asynchronus submission of form data
This project is a work in progress, beginning in the final months of 2021. As of Jan 2, 2022 I am working in the Force section of the app (Force_HLG and Force_LLG)

This web app is designed to be used in a study that uses eye tracking to study visual attention during learning and problem solving. The functions are as follows:

# Login
  <ul>
    <li>Student logs in with school credentials (Username, student number, etc...)</li>
    <li>Web app runs on https protocol</li>
    <li>django has built in sha256 hashing</li>
  </ul>
  

# Content
  <ul>
    <li>Content (equations, figures, charts) animated with anime.js</li>
    <li>Assessment questions are submitted asychronusly with jQuery</li>
    <li>Voice narrations are synched with animations with javascript (webkit)</li>
  <li>Buttons turn red when clicked to facilitate eye-tracking</li>
  </ul>
  
# Data Collection
  <ul>
    <li>Click data is collected and submitted asychronusly (jQuery)</li>
    <li>Mouse location is collected</li>
            <ul>
              <li>location at start of each movement</li>
              <li>location at end of each movement</li>
            </ul>
  <li>Trajectory through the app</li>
            <ul>
              <li>e.g. buttons clicked, moved between sections,...</li>
            </ul>
  <li>time stamps (client-side)</li>
  </ul>
