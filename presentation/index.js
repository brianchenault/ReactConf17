// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import images from './images'

preloader(images);

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const imageContainerStyle3 = {
  width: '800px',
  height: 'auto',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  webkitBorderRadius: '10px'
};

export default class Presentation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playMusic: true
    }
  }

  render() {
    return (
      <div>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1} textColor="secondary">
              ReactConf 2017
            </Heading>
            <Text margin="30px 0 0" textColor="tertiary" size={3} bold>
              Santa Clara, CA
            </Text>
            <Text margin="10px 0 0" textColor="tertiary" size={5}>
              March 13-14
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div style={{ height: 'auto', width: '500px', margin: '0 auto'}}>
                <img src={images.reactconf2} style={{ width: '100%'}} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <div>
                <img src={images.reactconf} style={imageStyle} />
              </div>
            </div>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary">What is React?</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>"React is a declarative, efficient, and flexible JavaScript library for building user interfaces."</Quote>
              <Cite>https://facebook.github.io/react/</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Text size={1} textColor="primary">
              React is solely the view layer of your application. Unlike jQuery, it doesn't provide
              you with APIs for things like network calls. React is the V in MVC. Tools like React Router
              provide functionality that are built into some other web frameworks. <br/><br/>So, the React ecosystem is very
              component-ized and plug and playable.
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Text size={1} textColor="primary">
              React was created by Facebook and released to the public in 2013.
              React Native (for building native apps) was released in 2015.
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary">Why React?</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Text size={1} textColor="primary">
              React creates its own virtual DOM where your components actually live. This approach gives you enormous flexibility and amazing gains in performance because React calculates what changes need to be made in the DOM beforehand and updates the DOM tree accordingly. This way, React avoids costly DOM operations and makes updates in a very efficient manner.
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary">Who is using React?</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Heading size={6}>We're in good company:</Heading>
            <ul style={{textAlign: 'left', fontSize: '20px', width: '200px', margin: '20px auto'}}>
              <li>Facebook (duh)</li>
              <li>Instagram (duh)</li>
              <li>Airbnb</li>
              <li>Netflix</li>
              <li>Uber</li>
              <li>Intuit</li>
              <li>Paypal</li>
              <li>Pinterest</li>
              <li>Reddit</li>
              <li>Lyft</li>
              <li>Flipboard</li>
              <li>New York Times</li>
              <li>NFL, NHL, MLS</li>
              <li>OKCupid</li>
              <li>Wix</li>
            </ul>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary">Takeaways</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Text size={1} textColor="primary">
              #1
              <br/><br/>
              1-track conferences rule. Not having to pick from 6 or 7 competing talks, or rush from room to room,
              throughout the day felt like a win. The fact that the conferences was centered on one framework and
              not a wide array of tech topics helped. :)
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Text size={1} textColor="primary">
              #2
              <br/><br/>
              I was extremely lucky to be able to attend. The chance to buy a ticket
              was based on a lottery system, and there couldn't have been more than 4-500 attendees.
              Not bad for a framework with 3.2 million + downloads from NPM in the last month.
              The room the conference was in had a 270 max capacity sign, but I know they had to have stretched that some.
              I sat next to, and chatted with, engineers from Netflix and Facebook.
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Text style={{fontSize: '24px'}} textColor="primary">
              #3
              <br/><br/>
              We made a smart decision picking React (and Redux) as the core of our web app stack.
              There was a talk comparing Redux vs Mobx for application state management, and Redux
              was the clear winner, and seemed to be the crowd favorite.
              <br/><br/>
              "Redux is a predictable state container for JavaScript apps.
              It helps you write applications that behave consistently, run in different environments (client, server, and native),
              and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
              You can use Redux together with React, or with any other view library."
              <br/><br/>
              <i>from redux.js.org</i>
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary">Things I think we can leverage</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={4} textColor="primary">Lighthouse Chrome Plugin</Heading>
            <br/>
            <Text style={{fontSize: '26px'}} textColor="primary">
              Lighthouse is an open-source, automated tool for improving the performance, quality, and correctness of your web apps.

              When auditing a page, Lighthouse runs a barrage of tests against the page, and then generates a report on how well the page did.
              From here you can use the failing tests as indicators on what you can do to improve your app.
              It tests things like performance, security, mobile-friendliness, compatibility across browsers, and accessibility.
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={4} textColor="primary">Flow</Heading>
            <br/>
            <Text style={{fontSize: '26px'}} textColor="primary">
              Javascript is not a strongly-typed language like Java. This can lead to bugs.
              Flow helps avoid these bugs. Flow uses type inference to find bugs even without type annotations.
              It precisely tracks the types of variables as they flow through your program.
              <br/><br/>
              Flow can catch common bugs in JavaScript programs before they run, including:
              silent type conversions (string to number and back),
              and the dreaded undefined is not a function.
              <br/><br/>
              flowtype.org
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={4} textColor="primary">Code Splitting</Heading>
            <br/>
            <Text style={{fontSize: '26px'}} textColor="primary">
              This will become more important as we move our web apps towards mobile.
              <br/><br/>
              Code splitting is one of the most compelling features of Webpack, which we use
              for bundling our code for deployment.
              It allows you to split your code into various bundles which you can then load on demand — like when a user navigates
              to a matching route, or on an event from the user. This allows for smaller bundles, and allows you to control resource load prioritization, which if used correctly, can have a major impact on your application load time.

              <br/><br/>webpack.js.org/guides/code-splitting
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={4} textColor="primary">Jest</Heading>
            <br/>
            <Text style={{fontSize: '26px'}} textColor="primary">
              Jest is used by Facebook to test all JavaScript code including React applications.
              It features a complete and easy to set-up JavaScript testing solution (zero configuration).
              Works out of the box for any React project.
              <br/><br/>
              ** we already have a good testing setup, but this could be more efficient for us - need to explore
              <br/><br/>
              facebook.github.io/jest
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={4} textColor="primary">Fiber</Heading>
            <br/>
            <Text style={{fontSize: '20px'}} textColor="primary">
              Coming soon.
              React Fiber is an ongoing reimplementation of React's core algorithm for reconciliation.
              It is the culmination of over two years of research by the React team.
              The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.
              Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
              <br/><br/>
              Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.
              <br/><br/>
              Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

              <br/><br/>
              github.com/acdlite/react-fiber-architecture
            </Text>
          </Slide>


          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading style={{fontSize: '32px'}} textColor="primary">React Native (if we wanted to)</Heading>
            <br/>
            <Text style={{fontSize: '24px'}} textColor="primary">
              React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.
              <br/><br/>
              With React Native, you don't build a “mobile web app”, an “HTML5 app”, or a “hybrid app”. You build a real mobile app that's indistinguishable from an app built using Objective-C or Java. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.
              <br/><br/>
              The gain I see here is potential component re-use between web and native, and allowing us to build
              iOS apps without hiring another engineer specifically for that role.
              <br/><br/>
              <a style={{color: '#fff'}} href="https://facebook.github.io/react-native/showcase.html" target="_blank">Apps using React Native</a>
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={6} textColor="primary">Stuff I want to play with</Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={4} textColor="primary">React VR</Heading>
            <br/>
            <Text style={{fontSize: '26px'}} textColor="primary">
              React VR is a framework for the creation of VR applications that run in your web browser.
              It pairs modern APIs like WebGL and WebVR with the declarative power of React,
              producing experiences that can be consumed through a variety of devices.
              <br/><br/>
              facebookincubator.github.io/react-vr
              <br/><br/>
              <a style={{color: '#fff'}} href='http://meetup-vr.netlify.com/' target='_blank'>Demo</a>
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={4} textColor="primary">GraphQL</Heading>
            <br/>
            <Text style={{fontSize: '26px'}} textColor="primary">
              GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
              GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
              <br/><br/>
              Ask for what you need, get exactly that.
              Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphQL are fast and stable because they control the data they get, not the server.
              <br/><br/>
              graphql.org
            </Text>
          </Slide>

          <Slide transition={["fade"]} bgColor="tertiary">
            <Heading size={4} textColor="primary">React Storybook</Heading>
            <br/>
            <Text style={{fontSize: '26px'}} textColor="primary">
              React Storybook is a UI development environment for your React components. With it, you can visualize different states of your UI components and develop them interactively.
              Most importantly for me, it creates easily publishable documentation from your React components.
              <br/><br/>
              getstorybook.io
            </Text>
          </Slide>
        </Deck>
      </div>
    );
  }
}
