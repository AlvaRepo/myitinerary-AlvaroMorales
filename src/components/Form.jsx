import { useRef } from "react";
import { useParams } from "react-router-dom";
export default function Forms() {
    const name = useRef(null);
    const lastName = useRef(null);
    const mail = useRef(null);
    const photo = useRef(null);
    const password = useRef(null);
    const country = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name: name.current.value,
            lastName: lastName.current.value,
            mail: mail.current.value,
            photo: photo.current.value,
            password: password.current.value,
            country: country.current.value,
        };

        // Aquí puedes hacer lo que necesites con los datos del formulario.
        console.log("Form Data:", formData);

        // Por ejemplo, puedes enviar los datos a una API, guardarlos en el estado de tu componente, etc.
    };

    return (
        <article>
            <div>
                <h2 className="text-2xl">Create Account</h2>
                <p>Step 1 of 2</p>
                <p>
                    Already have an account? <a href="/signin">Sign In</a>
                </p>
                <form onSubmit={handleSubmit} className="bg-gray-100 p-4">
                    <div className="mb-4">
                        <label htmlFor="mail" className="block text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="mail"
                            id="mail"
                            placeholder="Enter your email"
                            ref={mail}
                            className="form-input mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            ref={password}
                            className="form-input mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/2 mr-2">
                            <label htmlFor="name" className="block text-gray-700">
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="First Name"
                                ref={name}
                                className="form-input mt-1 block w-full"
                                required
                            />
                        </div>
                        <div className="w-1/2 ml-2">
                            <label htmlFor="lastName" className="block text-gray-700">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                ref={lastName}
                                className="form-input mt-1 block w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700">
                            Photo:
                        </label>
                        <input
                            type="text"
                            name="photo"
                            id="photo"
                            placeholder="Enter photo URL"
                            ref={photo}
                            className="form-input mt-1 block w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-gray-700">
                            Country/Region:
                        </label>
                        <select
                            name="country"
                            id="country"
                            defaultValue="Argentina"
                            ref={country}
                            className="form-select mt-1 block w-full"
                        >
                            <option value="Argentina">Argentina</option>
                            {/* Agrega más opciones de países si es necesario */}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </article>
    );
}
