# useFetch Hook

Este CustomHook nos sirve para crear hacer peticiones https. Nos retorna la data, un loading y un error en caso de producirse uno.

## Ejemplo de uso

```javascript
const url = 'Endpoint';

const { data, loading, error } = useFetch(url);
```

- useFetch() // Necesita una url como parámetro.
