# calculadora
El primer script, llamado calculadora.js, define una función que permite realizar una suma entre dos valores. Esta función recibe dos parámetros y utiliza el operador “+” para devolver el resultado.

ejemplo de uso:
```javascript
let resultado = sumar(5, 3);
```

# validation
El script llamado validation.js contiene una función llamada ValidationEmail que toma un parámetro llamado email. Esta función devuelve true si todos los parametros son correctos (@).

ejemplo de uso:
```javascript
ValidationEmail("email@example.com");
```

# api
El segundo script, llamado api.js, contiene dos variables: nombre y edad. Además, define una función llamada crearMsj que toma dos parámetros y no devuelve ningún valor. Por último, se exporta una función llamada mostrarMensaje que también toma dos parámetros y no devuelve ningún valor.

ejemplo de uso:
```javascript
import { mostrarMensaje } from './api.js';

mostrarMensaje(nombre, edad);
```