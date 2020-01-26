import React from "react";
import ReactDOM from "react-dom";
import {AddNumbers} from "../../25_komponenty.przeksztalcanie.task01/js/app";


class ShopItemHeader extends React.Component{
    render() {
        return (<div>
                <h1>{this.props.title}</h1>
                <img src={this.props.img}/>
            </div>
        )
    }
}
class ShopItemDescription extends React.Component{
    render() {
        return (<article>
                <p>{this.props.desc}</p>
            </article>
        )
    }
}
class ShopItemPricing extends React.Component{
    render() {
        return (<div>
                Cena: {this.props.price} zł
                <button> Kup! </button>
            </div>
        )
    }
}

class ShopItem extends React.Component{
    render() {
        return(
            <div>
                <ShopItemHeader title={this.props.item.title} img={this.props.item.image}></ShopItemHeader>
                {/*//trzeba przekazac mu propsa*/}
                <ShopItemDescription desc={this.props.item.description}></ShopItemDescription>
                <ShopItemPricing price={this.props.item.price}></ShopItemPricing>
            </div>
        )}
}

class App extends React.Component{
    render(){
        const item ={
            title: "MacBook Pro",
            image: "https://bit.ly/2EEtduD",
            description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
            price: 9999
        };
        return<ShopItem item={item}></ShopItem>
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
