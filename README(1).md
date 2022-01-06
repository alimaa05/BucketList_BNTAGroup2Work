# BNTA - Shop landing page assessment day solution

This is a solution to the Shop landing page BNTA assessment day which will allow you to put the HTML and CSS you've learned in practice with a stretch goal of adding a Dark Mode to your site.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

**Your users should be able to:**

- Build your webpage correctly for viewing within a fullscreen desktop window using HTML & CSS

**Stretch goals:**

- Implement a Dark Mode button using HTML and JavaScript

The teaching from the first day of the assessment centre should put you in good stead for this project and what today aims to provide is a chance to put this learning into action.

## My process

### Built with

- HTML 5
- CSS
- Flexbox
- JavaScript

### What I learned

We like the html code sniptter below which gives an alert when the submit button on the contact us page is clicked.
```html
<form action class="Order_form" onSubmit="alert('Thank you for your feedback.')">
```
This css allows the search bar to overlay the main photo on the webpage. This took a lot of time and research.
```css
.mainphoto {
    width: 100%;
  }
  .search-bar {
    position: absolute;
    top: 500px;
    right: 40%;
  }
  .searchbarh2 {
    color: white;
    font-weight: bolder;
    font-size: 3em;
  }
```

This function gives a dropdown for the navigation bar when it is pressed which is useful for mobile users.
```js
const mobileMenu= document.getElementById("mobile-menu-id")
    nav= document.querySelector("nav")
    mobileExit= document.getElementById("mobile-exit-id")
mobileMenu.addEventListener('click',() => {
    nav.classList.add('menu');
})
mobileExit.addEventListener('click',()=>{
    nav.classList.remove('menu');
})
```

### Continued development

To continue our development we plan to identify areas which we want to learn more about and conduct research into those. We can then put this research into practice by making more websites. Our current planned topic of research is javascript as this is the area where group members feel most uncomfortable. 

### Useful resources

- [W3Schools](https://www.w3schools.com/) - This helped me for as it gives lots of useful web development examples and code.
- [Color Hex](https://www.color-hex.com/color/bcbcbc) - This website allows us to easily find and select good colours to use by giving hex values for colours.
- [Google Fonts](https://www.color-hex.com/color/bcbcbc) - Provides lots of useful fonts which are good for styling the website.
- [Pexels](https://www.pexels.com/) - This website provided the images we used for the website.
- [CSS tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#basics-and-terminology) - This contains different terminology which is useful for CSS

## Authors

- Alimaa Hashim
- Connie Bernardin
- Donnalyn Parocha
- Jack Hemsley
- Nayan Gurung

## Acknowledgments

We would like to acknoledge the Bright Network Technology Academy Team for their excellent teaching as well as their help when we got stuck with the website.
