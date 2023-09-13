import React, { useRef } from 'react';

function SignUpFirst({ onDataReady, onContinue }) {
    const mailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleContinue = () => {
        const mail = mailRef.current.value;
        const password = passwordRef.current.value;
        // Pasar los datos de correo electrónico y contraseña al componente padre (Form)
        onDataReady({ mail, password });

        // Cambiar al siguiente formulario
        onContinue();
    };

    return (
        <div className=' flex flex-col h-auto items-center bg-gradient-to-r from-[#9c6535] p-3 rounded-l text-lg  border'>
            <label className='p-2' htmlFor="email">E-Mail:</label>
            <input
                className='p-2 rounded drop-shadow-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out' 
                placeholder='E-Mail'
                type="email"
                id="email"
                ref={mailRef}
                required
            />
            <label className='p-2' htmlFor="password">Password:</label>
            <input
                className='p-2 rounded drop-shadow-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out' 
                placeholder='Password'
                type="password"
                id="password"
                ref={passwordRef}
                required
            />
            <button
                className='px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md shadow-md transition-colors duration-300 ease-in-out m-2'
                type="button"
                onClick={handleContinue}>
                Continue
            </button>
        </div>
    );
}

export default SignUpFirst;
