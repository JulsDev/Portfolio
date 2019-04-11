import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/parallax-mount";
import "./scripts/humburger-menu";
import "./scripts/skills";
import "./scripts/reviews";
import "./scripts/works";
import "./scripts/dropdown-menu";
import "./scripts/preloader";
import "./scripts/picturefill";
//import "./scripts/form-send";
