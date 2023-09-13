import { useState, useRef } from "react";
import user_actions from "../store/actions/users.js"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link as Anchor } from "react-router-dom";
import Swal from "sweetalert2";


const { signin } = user_actions

export default function SignIn() {
    const navigate = useNavigate();
    const mail_signin = useRef(null);
    const password_signin = useRef(null);
    const dispatch = useDispatch();


    const handleSignIn = () => {
        let data = {
            mail: mail_signin.current.value,
            password: password_signin.current.value
        };
        let responseDispatch = dispatch(signin({ data }))
            .then(res => {
                if (res.payload.token) {
                    Swal.fire({
                        icon: 'success',
                        title: "You've Signed In!"
                    })
                    navigate('/')
                } else if (res.payload.messages.length > 0) {
                    Swal.fire({
                        title: 'Something went wrong!',
                        icon: 'error',
                        html: res.payload.messages.map(each => `<p>${each}</p>`).join(' '),
                    })
                }
            })
            .catch(err => console.log(err))
    };
    let user = useSelector(store => store.users.user.mail)
    console.log(user)

    return (
        <div className="flex flex-col h-[600px] items-center bg-gradient-to-r from-[#9c6535] p-3 rounded-l text-lg text-white border">
            <h1 className="text-2xl text-black">Sign In</h1>
            <Anchor
                className="text-blue-500 underline hover:text-blue-700" to='/signup' >
                You dont have an account? Register here.
            </Anchor>
            <label className="p-2" htmlFor="email">
                E-Mail:
            </label>
            <input
                className="p-2 text-black rounded drop-shadow-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
                placeholder="E-Mail"
                type="email"
                id="email"
                required
                ref={mail_signin}
            />
            <label className="p-2" htmlFor="password">
                Password:
            </label>
            <input
                className="p-2 text-black rounded drop-shadow-lg focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 ease-in-out"
                placeholder="Password"
                type="password"
                id="password"
                required
                ref={password_signin}
            />
            <button
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md shadow-md transition-colors duration-300 ease-in-out m-2"
                type="button"
                onClick={handleSignIn}
            >
                Continue
            </button>
        </div>
    );
}
