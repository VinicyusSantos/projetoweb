import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const employees = [
  { username: 'adm', password: '12345', isAdmin: true },
  { username: 'funcionario1', password: '12345', isAdmin: false },
  { username: 'funcionario2', password: '12345', isAdmin: false },
  { username: 'funcionario3', password: '12345', isAdmin: false },
  { username: 'funcionario4', password: '12345', isAdmin: false },
  { username: 'funcionario5', password: '12345', isAdmin: false },
  { username: 'funcionario6', password: '12345', isAdmin: false },
];

function Login() {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    const employee = employees.find(emp => emp.username === selectedEmployee);

    if (employee && employee.password === password) {
      if (employee.isAdmin) {
        history.push('/PAGINA EXLUSIVA ADM'); // Redirecionamento adm
      } else {
        history.push('/PAGINA GERAL DA OBRAS'); // Redirecionar funcionários
      }
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <select
        value={selectedEmployee}
        onChange={(e) => setSelectedEmployee(e.target.value)}
      >
        <option value="">Selecione um funcionário</option>
        {employees.map(emp => (
          <option key={emp.username} value={emp.username}>
            {emp.username}
          </option>
        ))}
      </select>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
