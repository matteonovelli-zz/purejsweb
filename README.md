## Start development server
npm start

## Start TDD
npm run tdd

## Run test
npm run test

## Run coverage
npm run coverage

## Build project
npm run build

## Architecture
Para este ejercicio he usado el modelo de arquitectura VIPER. Además he separado los servicios, el modelo de datos y los componentes en diferentes capas.

## Testing
Todas las clases están cubiertas por test unitarios. Para ello he utilizado Jest.

## Stack
El stack tecnológico es HTML + CSS + JS. He decidido intencionalmente no utilizar ningún framework, librería ni preprocesador para realizar el ejercicio.
Por ello el proyecto tiene cero dependencias, las únicas que tiene son por motivos de desarrollo: webpack, eslint, jest, babel.
Esta no es una decisión que tomaría en un proyecto real pero en este caso me parecía la mejor manera de demostrar mis habilidades y además sin depender de ningún framework.

## TODOS / Improvements
Para realizar el ejercicio me he impusto un timebox de 8 horas máximo. Así que por cuestión de tiempo han quedado algunas cosas pendientes o posibles de mejorar:
* hay algunos métodos que no están cubiertos por test unitarios ya tienen dependencia con el objeto document del navegador.
* hacer que los componentes extiendan HTMLElement y hacerlos reutilizables más allá del proyecto

