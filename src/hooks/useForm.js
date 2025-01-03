import { useState } from 'react';

const useForm = (initialValues, validate, onSubmit) => {
  // Estado para los valores del formulario
  const [inputValue, setInputValue] = useState(initialValues);

  // Estado para los errores del formulario
  const [errors, setErrors] = useState({});

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { email, value } = e.target; // Obtenemos el campo (name) y el valor ingresado
    setInputValue({
      ...inputValue, // Conservamos los valores anteriores
      [email]: value, // Actualizamos el campo que cambió
    });

    // Validamos los datos mientras escribe (opcional)
    if (validate) {
      setErrors(validate({ ...inputValue, [email]: value }));
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos recargar la página
    const validationErrors = validate ? validate(inputValue) : {}; // Validamos todos los datos
    setErrors(validationErrors); // Guardamos los errores (si hay)

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(inputValue); // Si no hay errores, ejecutamos la acción personalizada
    }
  };

  // Retornamos todo lo necesario para usar el formulario
  return { inputValue: inputValue, handleChange, handleSubmit, errors };
};

export default useForm;