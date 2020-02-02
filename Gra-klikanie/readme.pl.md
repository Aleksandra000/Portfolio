### Zadanie 
Poniższe zadanie pozwoli stworzyć wam minigrę, w której gracz ma określony czas by jak najszybciej klikać na przycisk. Czas biegnie coraz szybciej i należy kliknąć tyle razy ile uda się zanim czasu między kolejnymi kliknięciami będzie za mało.

Stwórzcie komponent `SpeedClickGame`. Ma on przyjmować czas do odliczania w ms przez props `time` i przechowywać go w stanie lokalnym.

Komponent składa się z przycisku z napisem "Click me!" (osobny komponent `SpeedClickButton` do którego należy przekazać funckję obsługującą klikanie), elementu `h1` i elementu `h2` w elemencie `div`. W elemencie `h1` wyświetlajcie aktualny czas, w `h2` będzie przechowywana liczba punktów (póki co 0).

Uruchomcie `interval` wykonywany co 50ms. Pamiętajcie, aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby. W funkcji intervala zmniejszajcie aktualny czas o 50ms i sprawdzajcie czy czas się nie skończył. Jeżeli czas się skończył to zablokujcie przycisk (`disabled={true}`).

Po kliknięciu na przycisk dodawany jest punkt, a czas zostaje zresetowany, ale jest o 50ms krótszy niż poprzedni.

Np. jeżeli atrybut time tego komponentu był ustawiony na 1000 to:

- Brak kliknięć, czas początkowy: 1000ms,
- Pierwsze kliknięcie, czas początkowy: 950ms,
- Drugie kliknięcie, czas początkowy: 900ms,
- Trzecie kliknięcie, czas początkowy: 850ms...

Wyrenderujcie dla `time` ustawionego na 2000 i przetestujcie swój komponent.