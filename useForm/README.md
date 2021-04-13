# useForm Hook

Este CustomHook nos sirve para manejar formularios. Nos retorna el valor de los campos, un manejador de los inputs y un reseteo.

## Ejemplo de uso

```javascript
const initialValues = { name: 'Andrés', age: 25 };

const { values, handleInputChange, reset } = useCounter(initialValues);
```

- useForm() // recibe un objeto vacío como valor por defecto.
