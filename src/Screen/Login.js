import axios from "axios";
import {env} from "../API/APIs"
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitForm = async (e) => {
        e.preventDefault();
        const user = { username, password };

        const reponse = await axios.post(
            "https://book-directory-test.herokuapp.com/authenticate",
            user,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        console.log("rsponse", reponse);

        localStorage.setItem("token", reponse.data.token);
    };

    return (
        <div className="background">
            <div className="create">

                <h2>SIGN IN</h2>
                <form onSubmit={submitForm}>
                    <label>Email:</label>
                    <input
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>

                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}
