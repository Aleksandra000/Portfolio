import React from "react";
import ReactDOM from "react-dom";

class SpeedClickGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time:10,
        count:1,
      points:0
    }
  }

    componentDidMount() {
        this.interval=setInterval(()=>{
            this.setState({
                time: this.state.time - this.state.count
            },()=>{
                if (this.state.time<=0){
                    { alert(`Stop! Twój wynik to ${this.state.points}`); }
                    clearInterval(this.interval)
                }
            });
        },1000);
    }
    componentWillUnmount() {
        clearInterval(this.internal)
    }

  increasePointsCounter =()=> {
    this.setState({
      points: this.state.points + 1
    })
  };

  render() {
    return(
        <div>
          <SpeedClickButton increasePoints={this.increasePointsCounter}
                            points={this.state.points}
                            time={this.state.time}> </SpeedClickButton>
        </div>
    )
  }
}
class SpeedClickButton extends React.Component {
  handleClick =()=> {
    this.props.increasePoints(this.props.points);
  };
  render() {
    return(
        <div style={{width:"400px", height:"300px", backgroundColor:"lightblue", color:"blue",display:"flex", flexWrap: "wrap", justifyContent:"center"}}>
          <h1>Czas do końca: {this.props.time} sekund</h1>
          <h2>Punkty: {this.props.points}</h2>
          <button style={{width:"300px", height:"100px", backgroundColor:"blue", color:"yellow",}}
                  onClick={this.handleClick}>
                  Click
          </button>
        </div>
    )
  }
}

/**
 * Nie modyfikujcie kodu poniżej
 */

function App() {
  return <SpeedClickGame />;
}

ReactDOM.render(<App />, document.getElementById("app"));

export { SpeedClickGame, SpeedClickButton, App };
