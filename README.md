# Technology Quotes using FlatList

You have previously worked on a project with a list of 10 technology quotes, using ScrollView to display them. In this project, you will use FlatList to display those quotes, with a separator between elements of the list. The separator is discussed in the previous page in Canvas named "FlatList Introduction" -- it is another prop of the FlatList component.

You may find useful reference for FlatList components at https://www.waldo.com/blog/react-native-flatlist/ or https://blog.logrocket.com/deep-dive-react-native-flatlist/

As in the ScrollView project, this project displays 10 technology quotes. You may want to create a copy of the ScrollView project -- it is easy to convert from ScrollView to FlatList. As in the previous project, you may look up quotes, or use the ones shown in the example. Create an array of objects, each with an "id" or "key" element, a "quote" element for the text of the quote, and an "author" element. The "id" is a string for values "1", "2", "3", and so on.

You must have a function for the renderItem prop of FlatList. In the course, the prop uses an inline function -- you must create a separate named function in the App.js file, and call that function in the renderItem prop. See the "FlastList Introduction".

The FlastList component must also have a separator prop. Be sure to reference the page "FlatList Introduction".

The screen displays a header for "Technology Quotes", then the quotes and authors below it. Note that the header stays on the screen, does not scroll away

You have already established the style of the list in the ScrollView version. Change the background color to make this different from that previous version.

https://reactnative.dev/docs/environment-setup

![p](https://github.com/bell-kevin/techQuotesWithFlatList/blob/main/screenshots/1.PNG)

![p](https://github.com/bell-kevin/techQuotesWithFlatList/blob/main/screenshots/2.PNG)

## Storing Projects 

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.


== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
