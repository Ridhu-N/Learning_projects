import React from "react";
import { ContextThemeColor } from "./ContextThemeColor";
import { ButtonHolder } from "./ButtonHolder";

export class ContextDemo extends Component {
  render() {
    return (
      <ContextThemeColor.Provider value="pink">
        <ButtonHolder />
      </ContextThemeColor.Provider>
    );
  }
}
