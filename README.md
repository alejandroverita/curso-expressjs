# CURSO DE EXPRESS JS

### Parametros Query

Se utilizan para hacer filtros a la información que queremos de nuestra API.

Puede ayudarnos a paginar, a establecer limites, incluso buscar palabras que coincidan con un valor.

Los endpoints especificos deben declararsen antes de los endpoints dinamicos. Uno de los mandamientos

### Separacion de responsabilidades con express.Router

Crea un controlador(handler) de rutas modulares y montables. Una instancia de Router es un sistema de enrutamiento y middleware completo, por esa razón lo podemos tomar como si fuera una mini app.

Cada modulo de nuestras rutas es una mini aplicación en la que creamos sus rutas independientes y podemos incluirle middlewares, que se ejecutarán cuando se coincida con el path.

### POST: Metodo para crear

Middleware:

El término middleware se refiere a un sistema de software que ofrece servicios y funciones comunes para las aplicaciones. En general, el middleware se encarga de las tareas de gestión de datos, servicios de aplicaciones, mensajería, autenticación y gestión de API.

### Introduccion a servicios

Concepto
Los servicios es donde encapsulamos todos los casos de usos y comenzar a interactuar con la lógica de negocio.
En el caso de una tienda: hacer compras, transacciones, etc.
.
Estructura

- Esta arquitectura está definida por capas.
  .

Entidades:

- En esta capa encontramos las entidades base del negocio.
- En nuestro caso: productos, categorías, órdenes de compra.
  .

Casos de uso

- En esta capa tenemos lo relacionado a la lógica de negocio
- En esta capa se encuentra los servicios
  .

Controladores

- En esta capa se brinda el acceso.
- Aquí encontramos el routing
  .

Flujo de trabajo:

- Controladores: Encontramos los routes y middlewares.
- Los controladores acceden a la capa de servicios
- Servicios: donde se encuentra la lógica de negocio
- Los servicios usan las librerías.
- Las librerías se encargan de contactarse a la capa de entidades
- Las librerías se contactan a otras fuentes de datos: API externa o base de datos.

### Qué es un middleware?

Middleware es software que permite uno o más tipos de comunicación o conectividad entre dos o más aplicaciones o componentes de aplicaciones en una red distribuida. Al facilitar la conexión de aplicaciones que no fueron diseñadas para conectarse entre sí, y al brindar funcionalidad para conectarlas de manera inteligente, el middleware agiliza el desarrollo de aplicaciones y acelera el tiempo de comercialización.

Casos de uso:

- Middleware a nivel de aplicación
- Middleware a nivel de direccionamiento (routers)
- Middleware para manejo de errores
- Middlewares incorporados
- Middleware de terceros

### Manejo de errores con Boom

npm i @hapi/boom

### Validacion de datos con Joi

npm i joi
