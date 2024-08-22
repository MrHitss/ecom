import React, { useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../../store/slices/authSlice';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with:', { email, password });

        dispatch(login({ email, password }))
            .then((result) => {
                if (login.fulfilled.match(result)) {
                    navigate('/');
                } else {
                    console.error('Login failed:', result.error);
                }
            })
            .catch((err) => {
                console.error('Login error:', err);
            });
      };

    return (
        <main className="form-signin text-center">
            <form onSubmit={handleSubmit}>
                <IoMdLogIn fontSize={"57"} />
                <h1 className="h3 mb-3 fw-normal">Sign In</h1>

                <div className="form-floating">
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                <label>Email address</label>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <label>Password</label>
                </div>


                <button className={`w-100 btn btn-lg btn-primary ${loading ? "btn-loading" : ""}`} type="submit">Sign in</button>
                {error && <p>{error}</p>}
                <p className="mt-5 mb-3 text-muted">© 2017–2024</p>
            </form>
        </main>
    )
}

export default Login;