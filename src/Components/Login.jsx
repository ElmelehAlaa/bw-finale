import { useDispatch } from "react-redux";
import { LoginProfile } from "../redux/actions";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const navigation = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const body = {
      password: password,
      email: email,
    };

    dispatch(LoginProfile(body));
    setTimeout(() => {
      navigation("/home");
    }, 2000);
  };
  return (
    <div className="background-login">
      <div className="bg-white loginDiv p-5" style={{ width: "350px", borderRadius: "30px", border: "solid" }}>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div class="form-outline mb-4 d-flex flex-column align-items-center ">
            <input type="email" id="email" class="form-control " />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4 d-flex flex-column align-items-center ">
            <input type="password" id="password" class="form-control  " />
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          <div class="text-center">
            <p>
              Not a member? <a href="/register">Register</a>
            </p>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
