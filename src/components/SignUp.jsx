import React, { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link as Anchor, useNavigate } from 'react-router-dom'; 
import apiUrl from '../apiUrl.js';


const countries = [
    'United States',
    'Canada',
    'Australia',
    'France',
    'Germany',
    'Spain',
    'Japan',
    'Brazil',
    'Argentina',
    'Mexico', // Ejemplo de un país adicional
];

export default function SignUp() {
    const name = useRef();
    const lastName = useRef();
    const mail = useRef();
    const password = useRef();
    const country = useRef();
    const photo = useRef();
    const navigate = useNavigate(); // Usa useNavigate para obtener la función de navegación

    async function handleSignUp() {
        try {
            let data = {
                name: name.current.value,
                lastName: lastName.current.value,
                mail: mail.current.value,
                password: password.current.value,
                country: country.current.value, // Cambiado a 'country' según tu solicitud
                photo: photo.current.value,
            };

            await axios.post(apiUrl + 'auth/register', data);

            Swal.fire({
                icon: 'success',
                title: 'User Created!',
                text: 'Your user account has been successfully created.',
            });

            navigate('/signin'); // Usa navigate para redirigir
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="formulario">
            <form className="form-up p-2">
                <h3>Create account</h3>
                <p>
                    Already have an account? <Anchor to={'/auth/signin'}>Sign in</Anchor>
                </p>
                <div className="mb-2">
                    <input
                        ref={name}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="text-black w-full p-2 rounded shadow"
                    />
                </div>
                <div className="mb-2">
                    <input
                        ref={lastName}
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        className="text-black w-full p-2 rounded shadow"
                    />
                </div>
                <div className="mb-2">
                    <input
                        ref={mail}
                        type="text"
                        name="mail"
                        id="mail"
                        placeholder="Mail"
                        className="text-black w-full p-2 rounded shadow"
                    />
                </div>
                <div className="mb-2">
                    <input
                        ref={password}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="text-black w-full p-2 rounded shadow"
                    />
                </div>
                <div className="mb-2">
                    <select
                        ref={country}
                        name="country"
                        id="country"
                        className="text-black w-full p-2 rounded shadow"
                    >
                        <option value="">Select your country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-2">
                    <input
                        ref={photo}
                        type="text"
                        name="photo"
                        id="photo"
                        placeholder="Photo"
                        className="text-black w-full p-2 rounded shadow"
                    />
                </div>
                <input
                    type="button"
                    value="Sign Up!"
                    onClick={handleSignUp}
                    className="px-4 py-2 bg-[#8ab6a0] hover:bg-indigo-600 text-white rounded-md shadow-md m-2"
                />
            </form>
        </div>
    );
}
