# Desafío para Software Engineers

Nombre postulante: Diego Puma Paco
Link a la app en producción: [https://kimche-country.vercel.app/]

## Instrucciones

Debes crear un buscador de países consultando el [siguiente grafo](https://countries.trevorblades.com/). Este código contiene una base para seguir con la aplicación en React y ApolloClient. Queda a disposición tuya cualquier cambio, ya sea de estructura, estilo, etc.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama:

![image1](imgs/1.png)
![image2](imgs/2.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto. **Considerar que el ícono al lado del nombre de cada país es el emoji**.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Eslint airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [Husky](https://www.npmjs.com/package/husky)

## Problema

"La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."

###  Respuesta

Propondría poder fragmentar la base de datos, esta consiste en dividir esta en múltiples base de datos(fragmento), y cada fragmento contendría su propio subconjunto de datos.

Para esta se tendría que crear una tabla maestra que indique la distribucion de data en cada fragmento,mediante un identificador.

Esto ayudaría  a que la base de datos sea mas escalable(teniendo en cuenta en que se agregaran mas alumnos y por ende mas asistencias en el futuro).

Ya al actualizar la información seria a un fragmento en especifico, esto reduciría el tiempo de búsqueda del alumno y la actualización de este.

Puedes ver un poco mas del tema en https://aws.amazon.com/es/blogs/database/sharding-with-amazon-relational-database-service/

Otra opción seria usar la multi-tenencia, teniendo en cuenta que todas las tablas estan en un sola base de datos, se podria decir que existen muchos colegios con sus propios alumnos, entonces se podria proponer tener una base de datos por cliente(colegios).

Y por último se podria aumentar la potencia en el hardware del servidor, sin embargo no siempre garantiza que sera mucho mas óptimo.

### Comentarios

- Utilize cz-conventional-changelog ya que me permite utilizar mejor el formato de commits.
- Utilize un reducer en la logica de búsqueda por nombre de paises.
- Opte por crear una paginación de paises, ya que el número de este era largo y el renderizado de este no era óptimo.✌
