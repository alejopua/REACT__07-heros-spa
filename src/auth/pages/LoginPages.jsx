import { useNavigate } from 'react-router-dom';

export const LoginPages = () => {
  const navigate = useNavigate()

  const onLogout = () => {
      navigate('/', { replace: true })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={onLogout}
      >
        Login
      </button>
    </div>
  )
}
