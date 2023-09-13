import React, { useRef, useState } from 'react';

function SignUp() {
    const [step, setStep] = useState(1);

    const mailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const lastNameRef = useRef(null);
    const photoRef = useRef(null);
    const countryRef = useRef(null);

    const handleContinue = () => {
        if (step === 1) {
            const mail = mailRef.current.value;
            const password = passwordRef.current.value;
            // Pasar los datos de correo electrónico y contraseña al componente padre (Form)
            onDataReady({ mail, password });
            // Cambiar al siguiente formulario
            setStep(2);
        } else if (step === 2) {
            const name = nameRef.current.value;
            const lastName = lastNameRef.current.value;
            const photo = photoRef.current.value;
            const country = countryRef.current.value;
            onDataReady({ name, lastName, photo, country });
            // Puedes realizar alguna acción adicional aquí
        }
    };

    return (
        <div className='flex flex-col h-auto items-center border'>
            {step === 1 && (
                <div className='bg-gradient-to-r from-[#9c6535] p-3 rounded-l text-lg'>
                    <label htmlFor="email">E-Mail:</label>
                    <input
                        placeholder='E-Mail'
                        type="email"
                        id="email"
                        ref={mailRef}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        placeholder='Password'
                        type="password"
                        id="password"
                        ref={passwordRef}
                        required
                    />
                </div>
            )}
            {step === 2 && (
                <div className='bg-gradient-to-l from-[#25784f] p-3 rounded-l text-lg text-white'>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        ref={nameRef}
                        required
                    />
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        ref={lastNameRef}
                    />
                    <label htmlFor="country">Country:</label>
                    <input
                        type="text"
                        id="country"
                        ref={countryRef}
                        required
                    />
                    <label htmlFor="photo">Photo:</label>
                    <input
                        type="text"
                        id="photo"
                        ref={photoRef}
                    />
                </div>
            )}
            <button
                onClick={handleContinue}
                className='px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md shadow-md m-2'
            >
                {step === 1 ? 'Next' : 'Submit'}
            </button>
        </div>
    );
}

export default SignUp;
