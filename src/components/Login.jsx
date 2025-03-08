import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import Swal from 'sweetalert2'

const Login = () => {
    const { loginUser, user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('🚀 ~ Login ~ location:', location)
    const handleLogin = (e) => {
        e.preventDefault()
        const Form = new FormData(e.target)
        const email = Form.get('email')
        const pass = Form.get('password')
        loginUser(email, pass)
            .then((res) => {
                console.log(res.user)
                if (res?.user) {
                    Swal.fire(`welcome ${res?.user?.email}`)
                    navigate(location?.state)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                />
                                <label className="fieldset-label">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                />

                                <Link
                                    to="/register"
                                    className="link link-hover text-start"
                                >
                                    register
                                </Link>

                                <button className="btn btn-neutral mt-4">
                                    Login
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
