### Zadanie 
Stwórzcie komponent `ShopItem` z odpowiednimi `props`, które wynikają z dalszej części zadania. Ma mieć on następującą strukturę:

```html
<div>
  <div>
    <h1>{title z props}</h1>
    <img src="{image z props}"/>
  </div>
  <article>
    <p>{description z props}</p>
  </article>
  <div>
    Cena: {price z props} zł
    <button>Kup!</button>
  </div>
</div>
```

Następnie podziel go na 4 komponenty:

- `ShopItemHeader`
- `ShopItemDescription`
- `ShopItemPricing`
- `ShopItem` - ma podstawową strukturę i korzysta z powyższych.

Wyrenderujcie na stronie komponent `ShopItem` podając w atrybutach do props przykładowe dane:

```js
{
  title: "MacBook Pro", 
  image: "https://bit.ly/2EEtduD",
  description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
  price: 9999
}
```

Pamiętajcie, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderujcie na stronie główny komponent `App`.

Zadanie wykonajcie tylko z **komponentami w wersji zbudowanej z klas ES6**.