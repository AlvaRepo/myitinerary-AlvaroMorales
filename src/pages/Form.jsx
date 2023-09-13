import React, { useState } from 'react';
import SignUp from '../components/SignUp';
import apiUrl from '../apiUrl.js';
import axios from 'axios';
import Swal from 'sweetalert2';

function Form() {
    const [formData, setFormData] = useState({});

    const onDataReadyOne = (data) => {
        // Actualizar formData combinando los datos anteriores con los nuevos
        setFormData((prevData) => ({ ...prevData, ...data }));
        
        console.log(formData);
    };

    const onDataReady = async (data) => {
        console.log(data);
        console.log(formData);
        // try {
        //     const response = await axios.post(apiUrl + 'auth/register', formData);
        //     if (response.status === 200) {
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'User Created!',
        //             text: 'Your user account has been successfully created.',
        //         });
        //         console.log(formData);
        //     } else {
        //         response.data
        //             console.log(response.data.messages);
        //             Swal.fire({
        //                 title: 'Something went wrong!',
        //                 icon: 'error',
        //                 text: 'Sorry, account not created,probably you need to learn to write, Good Luck...',
        //             }).then((result) => {
        //                 if (result.isConfirmed) {
        //                     window.location.reload();
        //                 } else if (result.dismiss === Swal.DismissReason.cancel) {
                            
        //                 }
        //             })
        //     }
        // } catch (error) {
        //     Swal.fire({
        //         title: 'Something went wrong!',
        //         icon: 'error',
        //         text: 'Sorry, it is probably our mistake, but we dont think that, so learn to write',
        //         showCancelButton: true,
        //         confirmButtonText: 'Reload',
        //         cancelButtonText: 'Go Back',
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             window.location.reload();
        //         } else if (result.dismiss === Swal.DismissReason.cancel) {
                
        //         }
        //     });
        //     console.error(error);
        // }
    };

    return (
        <div className='bg-[#e3b483]'>
            <h1>Sign Up</h1>
            <SignUp onDataReadyOne={onDataReadyOne} onDataReady={onDataReady} />
        </div>
    );
}

export default Form;
