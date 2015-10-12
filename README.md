# Frontend Nanodegree Feedreader Test


## Getting Started
To run this app, you first need to clone this repo to your local machine by running the following lines in your terminal and inside the directory where you want to put this app in:
```bash
$> git clone git@github.com:WisnuMulya/frontend-nanodegree-feedreader.git
```
After having this app in your local machine, go to the root directory of this app and open index.html in your browser. It should shows the feedreader app on the top and the Jasmine test html below the feedreader.


## Overview

This project shows my ability to write specifications for a red-green-refactor process for this project. The application in this project is a web-based application that reads RSS feeds.


## Steps to Complete The Project

1. Write a spec to ensure all objects of allFeeds have URL defined.
2. Write a spec to ensure all objects of allFeeds have name defined.
3. Write a spec to ensure the menu element is hidden by default.
4. Write specs to ensure the menu element changes visibility when menu icon is clicked.
5. Write a spec to ensure there is at least one entry when loadFeed is called.
6. Write a spec to ensure that new feed selection actually changes when loadFeed is called.
7. (Additional) Write a spec to ensure there is an error handler when calling loadFeed for new feed selection fails.
8. (Additional) Write an error handler for loadFeed function.

## Resources

* [Jasmine 2.2 Documentation](http://jasmine.github.io/2.2/introduction.html)
* Inspiration for testing click event from [this post](https://discussions.udacity.com/t/how-can-i-test-click-events/24556) in the discussion forum.
* Inspiration for specs name from [this officehour](https://www.youtube.com/watch?v=dEikwrjQPGo).
