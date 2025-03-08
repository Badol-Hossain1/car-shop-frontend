import { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'

const AddCar = () => {
    const navigate = useNavigate()
    const {user } = useContext(AuthContext)
    console.log("🚀 ~ AddCar ~ user:", user)
    const handleAdd = (e) => {
        e.preventDefault()
        const Form = new FormData(e.target)
        const name = Form.get('name')
        const email = Form.get('email')
        const photo = Form.get('photo')
        const data = { name, email, photo }
        console.log('🚀 ~ handleAdd ~ data:', data)
        fetch('http://localhost:4000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    navigate('/')
                }
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        Add Car Here
                        <form onSubmit={handleAdd} className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">name</label>
                                <input
                                    name="name"
                                    type="text"
                                    className="input"
                                    placeholder="name"
                                />
                                <label className="fieldset-label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="email"
                                />
                                <label className="fieldset-label">Photo</label>
                                <input
                                    name="photo"
                                    type="text"
                                    className="input"
                                    placeholder="photo"
                                />

                                <button className="btn btn-neutral mt-4">
                                    add car
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCar
