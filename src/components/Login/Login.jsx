import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Login = () => {
    const [userForm, setUserForm] = useState({name: "", password: ""});
    const {user, login} = useAuthContext();
    const navigate = useNavigate();

    if(user){
        return <Navigate to="/admin/alta-productos"/>
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserForm({...userForm, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const success = login(userForm.name, userForm.password);

        if(success){
            navigate("/admin/alta-productos");
        }
        else{
            alert("Invalid credentials");
            setUserForm({name: "", password: ""});
        }
    };

    return <form onSubmit={handleSubmit}>
        <h2>Iniciar sesion</h2>
        <div>
            <label htmlFor="name">Usuario:</label>
            <input id="name" type="text" name="name" value={userForm.name} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="password">Contraseña:</label>
            <input id="password" type="password" name="password" value={userForm.password} onChange={handleChange}/>
        </div>

        <button type="submit">Login</button>
    </form>


}