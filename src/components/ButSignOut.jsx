import React from 'react';
import { useDispatch } from 'react-redux';
import user_actions from '../store/actions/users';
import Swal from 'sweetalert2'; // Import SweetAlert2
import 'sweetalert2/dist/sweetalert2.min.css'; // Import SweetAlert2 CSS
import SignOutButt from './SignOutButt';

const { signout } = user_actions;

export default function ButSignOut() {
    const dispatch = useDispatch();

    const handleSignOut = async () => {
        // Display a confirmation dialog
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, log out',
            cancelButtonText: 'Cancel',
        });

        // If the user confirms, proceed with sign-out
        if (result.isConfirmed) {
            dispatch(signout())
                .then(() => {
                    Swal.fire('Logged Out', 'You have been successfully logged out.', 'success');
                })
                .catch((error) => {
                    Swal.fire('Error', 'An error occurred while logging out.', 'error');
                    console.error(error);
                });
        }
    };

    return (
        <button
        className="bg-[#4F46E5] hover:bg-[#6510f9] flex items-center buttonPlu p-5 h-[3rem] rounded-full"
        > 
        <SignOutButt
            onClick={handleSignOut}
            />
        </button>
    );
}
