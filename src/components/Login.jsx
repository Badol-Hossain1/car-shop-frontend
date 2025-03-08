import React from 'react'
import { Link } from 'react-router'

const Login = () => {
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
                        <form className="card-body">
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
