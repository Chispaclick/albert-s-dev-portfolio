import useForm from "../../hooks/useForm"; // Importamos el hook
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";
import { AppFirebase } from "../../credenciales/credenciales";
import { useState } from "react";
import UimGoogle from "../../components/icons/UimGoogle";

const auth = getAuth(AppFirebase);

export const Login = () => {
  const [registeredUser, setRegisteredUser] = useState(false);

  // Valores iniciales del formulario

  const initialValues = { email: "" };

  // Función de validación
  const validateForm = (values) => {
    const errors = {};
    if (!values.email.includes("@")) errors.email = "El correo es inválido.";
    return errors;
  };

  // Acción al enviar el formulario
  const onSubmit = (values) => {
    console.log("Datos enviados:", values); // Aquí podrías llamar a una API, por ejemplo
  };

  // Usamos el hook
  const {
    inputValue: inputValue,
    handleChange,
    handleSubmit,
    errors,
  } = useForm(initialValues, validateForm, onSubmit);

  return (
    <div className="login_container">
      <div className="login_description">
        <p className="login_description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in ullam
          repellat assumenda ipsa laudantium culpa adipisci laborum officiis
          velit vitae veniam laboriosam, animi dolorem debitis, rerum aut quidem
          totam?
        </p>
        <p className="login_description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in ullam
          repellat assumenda ipsa laudantium culpa adipisci laborum officiis
          velit vitae veniam laboriosam
        </p>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connect</h2>
        <input
          type="email"
          name="useremail"
          placeholder="Email"
          value={inputValue.useremail}
          onChange={handleChange}
        />
        {errors.useremail && <p className="error">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="************"
          value={inputValue.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">
          {registeredUser ? "Register" : "Sign with Google"}
          <UimGoogle className="icon_google" />
        </button>
      </form>
    </div>
  );
};
