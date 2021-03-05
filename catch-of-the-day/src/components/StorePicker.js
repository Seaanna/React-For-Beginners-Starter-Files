import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component{
  myInput = React.createRef();

  goToStore = event => {
    // stop the form from submitting
    event.preventDefault();
    // get the text from the input. When using createRef, you need to reference current
    const storeName = this.myInput.current.defaultValue;
    // change the page to /store/whatever-they-enter
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store &#8594;</button>
      </form>
    )
  }
}

export default StorePicker;