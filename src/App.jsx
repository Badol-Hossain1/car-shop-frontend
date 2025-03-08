import { Link, useLoaderData } from 'react-router'
import './App.css'
import { useContext } from 'react'
import { AuthContext } from './provider/AuthProvider'
import { Auth } from './firebase/firebase.config'
import { signOut } from 'firebase/auth'

function App() {
    const { user } = useContext(AuthContext)
    const CarDatas = useLoaderData()

    const handleSignOut = () => {
        signOut(Auth)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDelete = (id) => {
        console.log("🚀 ~ handleDelete ~ id:", id)
        fetch(`http://localhost:4000/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
    }
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {' '}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{' '}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <Link to="/add">Add Car</Link>
                            </li>
                            <li>
                                {' '}
                                <Link>View Car</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        Car Shop
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/add">Add Car</Link>
                        </li>
                        <li>
                            {' '}
                            <Link>View All Car</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ? (
                        <div>
                            {user?.email}
                            <button
                                onClick={handleSignOut}
                                className="ml-8 cursor-pointer"
                            >
                                LogOut
                            </button>
                        </div>
                    ) : (
                        <Link to="/register" className="btn">
                            Register
                        </Link>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-3">
                {CarDatas.map((car) => (
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img src={car.photo} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{car.name}</h2>
                            <p>{car.email}</p>
                            <div className="card-actions justify-between">
                                <Link
                                    to={`/find/${car?._id}`}
                                    className="btn btn-primary"
                                >
                                    show more
                                </Link>
                                <Link
                                    onClick={() => handleDelete(car?._id)}
                                    className="btn btn-primary"
                                >
                                    delete
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default App
