const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am a H1 Tag"),
    React.createElement("h2", { id: "h2" }, "I am a H2 Tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am a H1 Tag"),
    React.createElement("h2", { id: "h2" }, "I am a H2 Tag"),
  ])
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
