import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
 React Intro to components.
1. create a funciton name is MyComponent.<name starts with uppercase letter>
   return null.
   you have created a react component that returns null.<>
2. create a funciton name is MyComponent2. this should return a valid html element
  eg a div inside have h1 with some text . example
    <div> <h1>fav text</h1></div>
3. using a react fragment. Create function name is MyComponent3.this
    should return a react fragment inside have multiple html elements.
    eg <><div></div> <div></div></>
*/

/*
1.Rendering components.<Displaying components>
 in your StrictMode component you will be rendering the other components.
 use both self closing and open and closing tags.
 example if your component name i MyComponent 
 insude the StrictMode render it 
 1.self closing: <MyComponent/>
 2.Open and closing tags: <MyComponent></MyComponent>

2.Create a component called parent component. Render all your other components inside 
 the Parent Component. And finaly put the Parent Component inside the StrictMode component

*/

// starts with capital letter
//most basic component you can create
function MyComponent() {
  return null; //valid jsx
}

/*
 invalid jsx 
 return 
*/

function MyComponent2() {
  return (
    <div>
      <h1>This is my second component</h1>
    </div>
  );
}

//this is wrong
/*
function InvalidJsxComponent() {
  return (
    <div>
      <h1>This is my second component</h1>
    </div>
    <div>
    </div>
  );
}
*/

function ReactFragment() {
  //<></> react fragment
  return (
    <>
      <div>
        <h1>This is my second component</h1>
      </div>
      <div></div>
    </>
  );
}

function ParentComponent() {
  //component that renders other components
  return (
    <div>
      <h1>This is the parent component</h1>
      <MyComponent /> {/*self closing*/}
      <MyComponent></MyComponent> {/*Open and closing tags*/}
      <MyComponent2 />
      <ReactFragment />
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>My first react app</h1>
    <MyComponent /> {/*self closing*/}
    <MyComponent></MyComponent> {/*Open and closing tags*/}
    <MyComponent2 />
    <ReactFragment />
    <ParentComponent />
    {/**/}
  </StrictMode>,
);
