import "./Register.css";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm } from "../../utilities/hook";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { REGISTER_USER } from "../../mutations/mutations";

function Register() {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const notify = (error) =>
    toast.error(error.message, {
      toastId: "registerWarning",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  function registerUserCallback() {
    registerUser();
  }

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registerUser] = useMutation(REGISTER_USER, {
    update({ data: { registerUser: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError({ graphQLErrors }) {
      graphQLErrors.map(function (error) {
        return notify(error);
      });
    },
    variables: { registerInput: values },
  });
  return (
    <div className="Register">
      <h1>Register</h1>
      <form className="register-form">
        <label>
          Username:
          <input
            type="text"
            label="Username"
            name="username"
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input type="text" label="Email" name="email" onChange={onChange} />
        </label>
        <label>
          Password:
          <input
            type="text"
            label="Password"
            name="password"
            onChange={onChange}
          />
        </label>
        <label>
          Confirm password:
          <input
            type="text"
            label="Confirm Password"
            name="confirmPassword"
            onChange={onChange}
          />
        </label>
      </form>
      <button onClick={onSubmit}>Register</button>
    </div>
  );
}

export default Register;
