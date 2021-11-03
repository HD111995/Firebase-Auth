import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, signup } = useSignup()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        signup(email, password)
    }
    return (
        <div id="signup">
            <h1>Signup</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Sign Up" />
            </form>
            <p>You have already an Account, please <Link to="/login">log in</Link></p>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Signin;