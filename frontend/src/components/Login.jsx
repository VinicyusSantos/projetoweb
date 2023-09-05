import PagAdm from "./AdmPage"
import PagFuncionario from "./EmployeePage"

function Login(){
    return <div className="container">
      <div className="header">
        <div className="text">Sign In</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input type="email" placeholder="Email"/>
        </div>
      <div className="input">
          <input type="password" placeholder="Senha"/>
        </div>
      </div>
          <div className="forgot-password">
            <span >Esqueci minha senha!</span>
          </div>
          <div className="submit-container">
            <div className="submit">SIGN IN</div>
          </div>
        </div>
  }

export default Login