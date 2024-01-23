import { Component } from "react";
import "./App.css";
import logo from "./assets/favicon-logo.svg";
import Input from "./Components/Input/input.component";
import CardList from "./Components/CardList/cardlist.component";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cardList: [],
      inputField: "",
    };
  }
  inputHandler = (e) => {
    this.setState({ inputField: e.target.value });
  };
  SavePromptInList = (event) => {
    if (event.key === "Enter") {
      if (this.state.inputField !== "") {
        const cardData = {
          text: event.target.value,
          id: Math.floor(Math.random() * 999999),
        };
        this.setState(
          () => {
            return {
              cardList: [...this.state.cardList, cardData],
              inputField: "",
            };
          },
          () => {
            console.log(this.state.cardList);
          }
        );
      } else {
        alert("Please Type Your Prompt");
      }
    }
  };
  HandleCardDeletion = (id) => {
    const filteredCards = this.state.cardList.filter((card) => {
      return card.id !== id;
    });
    this.setState({ cardList: filteredCards });
  };
  render() {
    const { cardList, inputField } = this.state;
    const { SavePromptInList, inputHandler, HandleCardDeletion } = this;

    return (
      <div className="app">
        <section className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <h1>Share Prompts</h1>
        </section>
        <Input
          Placeholder={"Write Prompt And Press Enter"}
          Type={"text"}
          OnChangeHandler={inputHandler}
          OnKeyPress={SavePromptInList}
          InputValue={inputField}
        />
        <CardList cardList={cardList} HandleCardDeletion={HandleCardDeletion} />
      </div>
    );
  }
}
