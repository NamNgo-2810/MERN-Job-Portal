import React from "react";
import ReactDOM from "react-dom";
// import "./css/animate.css";
// import "/css/boostrap.min.css";
// import "/css/glightbox.min.css";
// import "/css/LineIcons.2.0.css";
// import "/css/main.css";
// import "/css/tiny-slider.css";
// import "./css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
