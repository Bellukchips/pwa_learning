//shadow host

const divElement = document.createElement("div");

//element yang berada di dalam shadow dom

const headingElement = document.createElement("h1");
headingElement.innerText = "Komponen dalam DOM";

//melampirkan shadow root pada shadow host
//menggatur mode shadow dengan nilai open

const shadowRoot = divElement.attachShadow({ mode: "open" });

shadowRoot.appendChild(headingElement);
document.body.appendChild(divElement);