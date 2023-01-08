import "./Login.css";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm } from "../../utilities/hook";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LOGIN_USER = gql`
  mutation login($loginInput: LoginInput) {
    loginUser(loginInput: $loginInput) {
      email
      username
      token
    }
  }
`;

function Login() {
  const context = useContext(AuthContext);
  let navigate = useNavigate();
  const notify = (error) =>
    toast.error(error.message, {
      toastId: "loginWarning",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  function loginUserCallback() {
    loginUser();
  }

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
  });
  const [loginUser] = useMutation(LOGIN_USER, {
    update({ data: { loginUser: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError({ graphQLErrors }) {
      graphQLErrors.map(function (error) {
        return notify(error);
      });
    },
    variables: { loginInput: values },
  });
  return (
    <div className="Login">
      <h1>Login</h1>
      <form className="login-form">
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
      </form>
      <button onClick={onSubmit}>Login</button>
    </div>
  );
}

export default Login;
