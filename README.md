# productStore

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Objetivo de la aplicación front 'Product-Store':
La aplicación representa una tienda de venta online donde inicialmente se accede al muestrario de productos.

Se escoge el producto indicándole el número de unidades que se desea adquirir y se agrega al carro de la compra.

Posteriormente se consulta la lista de productos seleccionados y se acepta la compra o se modifican las cantidades.

Permite crear, editar y eliminar productos a través de la modificación de la URL del navegador.

Cuenta con funciones que evitan contabilizar cantidades negativas en las unidades solicitadas del producto, así como cantidades superiores al stock disponible.

El carro de la compra controla que no se agreguen productos duplicados, incrementando sólo las unidades del producto ya existente y siempre que no supere el stock.

También depura la lista del carro cuando detecta productos con 0 unidades solicitadas. De manera que al consultar el carro de la compra sólo aparecen los productos en que sus unidades solicitadas son mayor a 0.

La persistencia de los datos está gestionada desde un servidor back-end 
### El back-end está disponible en gitHub en la URL siguiente:
[back-end] (https://github.com/joseDuc/back-product-store.git)



# Las herramientas utilizadas para el desarrollo de la aplicación son las siguientes:
- HTML 5
- CSS 3
- ECMAscript 2023
- VUE 3
- Github 


# Elección del proyecto:
La opción de desarrollar este proyecto viene dada por la dificultad que representaba iniciar desde 0 por las razones siguientes: <br>

La falta de diponibilidad, la dificultad y versatilidad al manejar todas las herramientas necesarias para una ejecución aceptable.

A partir de la plantilla de la aplicación 'Demo' referente a este ejercicio, he acabado de desarrollar el CRUD, también he adaptado el CSS para centrar y distanciar los elementos lo más estéticamente posible y que se presten al efecto responsive. 
También he incluido funciones de soporte para limitar las unidades de compra.


# Las dificultades más relevantes:
VUE como frameWork en su conjunto aparece como una herramienta excepcional para crear aplicaciónes front robustas y modulares. 
Pero la curva de aprendizaje para conocer el concepto que lo fundamenta, requiere de mucha práctica en sus diferentes fases como en:
<br>
- El análisis de los 'contentedores' para mantenter la unicidad de los objetos
- La creación de 'stores' para modular las funciones y estados
- La combinación con los 'views'
- La fusión con el HTML

La ligera comprensión de toda esta lógica de desarrollo ha limitado la amplitud de la aplicación resultando escueta y meramente básica.

