{/* <div id = "Parent">
    <div id =  "child">
        <h1>Hello Ahaana </h1>
    </div>
    div id =  "child2">
        <h1>Hello Ahaana </h1>
    </div>
</div> */}


const heading = React.createElement("div",
 {id: "Parent"}, 
 [
 React.createElement("div", {id :  "child1"}, 
 [React.createElement("h1", {}, "Hello Sonam!"), React.createElement("h2", {}, "Hello Abhishek!")]),
 React.createElement("div", {id :  "child2"}, 
 [React.createElement("h1", {}, "Hello Ahaana!"), React.createElement("h2", {}, "Hello Saanvi!")])
 ]
 
 )
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);
