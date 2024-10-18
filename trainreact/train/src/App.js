import React, { Component } from "react";
import ReactDOM from "react-dom/client";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "",values:"" };
    this.handleChange = this.handleChange.bind(this);
    this.handleChanges = this.handleChanges.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleChanges(event) {
    this.setState({ values: event.target.value });
  }
  handleSubmit(event) {
    document.getElementById("user").innerHTML = this.state.value;
    document.getElementById("pass").innerHTML = this.state.values;
    // alert(this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Login details </h1>
        <div id="header">
          <img
            src="https://cdn.cybassets.com/s/files/9787/ckeditor/pictures/content_b253f2ec-56ef-4d1e-b79a-6b364ee6f097.png"
            alt="logo"
            style={{
              resizeMode: "contain",
              height: 100,
              width: 150,
            }}
          ></img>
          <p
            style={{
              marginLeft: 450,
              fontFamily: "monospace",
              fontWeight: "bolder",
              fontSize: "40px",
            }}
          >
            MVMT
          </p>
          {/* <p style={{marginLeft:400,fontFamily:'monospace',fontWeight:'bold',fontSize:'30px'}}>Account</p> */}
        </div>
        <div id="formid">
          <form onSubmit={this.handleSubmit}>
            <div id="ele">
              <label>
                UserName:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <br></br>
              <h1> </h1>
              <label>
                Password:
                <input
                  type="password"
                  value={this.state.values}
                  onChange={this.handleChanges}
                />
              </label>
              <br></br>
              <h1> </h1>
              <center>
                <input type="submit" value="Submit" />
              </center>
              <h4 id="user"></h4>
              <h4 id="pass"></h4>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
