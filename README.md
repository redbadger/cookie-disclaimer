#Component Cookie Disclaimer

Simple UI component for displaying cookie disclaimer policy on top of the website.

![image](https://raw.github.com/redbadger/cookie-disclaimer/master/test/cookie-disclaimer-screengrab.gif)

## How to use

This is a component component. You can easily plug it into your site or web app. Check the example of usage in test/index.html. To get things working, follow these easy steps (assuming you already have Node.js and npm installed):

* `npm install -g component`
* Clone this repository and navigate into the component folder
* Run `component install` to fetch dependencies
* Run `component build`
* Now you can open test/index.html and if everything is fine you should be able to see the component in action

If your app already uses components, you can simply run `component install redbadger/cookie-disclaimer` - this will fetch and install all dependencies into /components folder of your project.

###Features
* Prepends itself in the provided target element
* HTML content passed as argument
* Creates local storage entry `cookie-consent: true` and if the entry is true doesn't display itself anymore
