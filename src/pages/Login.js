import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, login } = useLogin()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        login(email, password)
    }
    return (
        <div id="login">
            <h1>Log In</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <input type="submit" value="Log In" />
            </form>
            <p>You don't have an Account, please <Link to="/signup">sign up</Link></p>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Login;