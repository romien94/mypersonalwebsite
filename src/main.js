import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/burger-menu";
import "./scripts/skills";
import "./scripts/works";
import "./scripts/parallax";
import "./scripts/flickity";
import "./scripts/form-validation";