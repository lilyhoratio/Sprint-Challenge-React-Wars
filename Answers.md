# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript library that allows you to more easily manipulate the DOM API. It emphasizes a components-based approach to building web applications so that applications may be designed using reusable code. Components are re-rendered whenever the state changes via the virtual DOM. 

2. What does it mean to think in react?
To think in React means to think in terms of reusable components and the flow of data within an application. It involves visually breaking down an application into smaller pieces and designing your code in either a functional or class-based approach to passing props around.

3. Describe state.
State represents the current "view" of data in our application. When the state in our application is changed (for example, when a user interacts with the UI), React updates the DOM accordingly and rerenders whatever data was subject to change.

4. Describe props.
Props is an object that contains data from a state that can be passed into other components. Data that is held within props could be className or other custom properties. In functional components, it can be set using the .setState() hook. 

5. What are side effects, and how do you sync effects in a React component to state or prop changes?
A side effect is anything that is outside of the scope of a function that is affected when that function is executed. For example, fetching data from an API is a side effect. You can use the hook useEffect() in functional components to sync side effects.