import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import jwt from "jwt-decode";
import "./login.scss";

import jwtDecode from "jwt-decode";

import { useLoginMutation } from '../../store/apis/auth';

const Login = () => {
    
    const [clicked, setClicked] = useState(true); 
    const required = "Campo obligatorio";
    
    const [login] = useLoginMutation();

    const navigate = useNavigate();

    const formik = useFormik({
      
        initialValues: {
            email: "",
            password: "",
        },
    
        validationSchema: Yup.object({
            email: Yup.string()
            .min(4, "La cantidad mínima de caracteres es 4")
            .required(required),
            password: Yup.string().required(required),
        }),
    
        onSubmit: async (values) => {
            try {
                const loginResponse = await login(values).unwrap();
                localStorage.setItem("token", loginResponse.token);
                let decoded = jwtDecode(loginResponse.token);
                if (decoded.role === "Admin") {
                    navigate("/admin");
                } else if (decoded.role === "Editor") {
                    navigate("/editor");
                } else if (decoded.role === "User") {
                    navigate("/");
                }
            } catch (error) {
                console.log(error);
            }
        },
        
    });
  
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;
  
    return (
        <div className="form-structor">
            <form onSubmit={handleSubmit}>
                <div className={`login ${ !clicked ? 'slide-up' : '' }` } onClick={ () => setClicked(true) }>
                    <h2 className="form-title" id="login"><span>o</span>Iniciar Sesión</h2>
                    <div className="form-holder">
                        <div>
                            <input
                                type="text"
                                className="input"
                                placeholder="Correo electrónico"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="email"
                            />
                            {errors.email && touched.email && (
                                <div className='text-red'>
                                    <small className="text-red-600">{errors.email}</small>
                                </div>
                            )}
                        </div>

                        <div>                            
                            <input
                                type="password"
                                className="input"
                                placeholder="Contraseña"
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="password"
                            />
                            
                            {errors.password && touched.password && (
                                <div className='text-red'>
                                    <small className="text-red-600">{errors.password}</small>
                                </div>
                            )}
                            
                        </div>
                    </div>
                    <button type='submit' className="submit-btn">Iniciar</button>
                </div>

                
                <div className={ `signup ${ clicked ? 'slide-up' : '' }` } onClick={ () => setClicked(false) }>
                    <div className="center">
                        <h2 onClick={() => handleLogin()} className="form-title" id="signup"><span>o</span>Crear Cuenta</h2>
                        <div className="form-holder">
                            <input type="text" className="input" placeholder="Nombre" />
                            <input type="email" className="input" placeholder="Correo electrónico" />
                            <input type="password" className="input" placeholder="Contraseña" />
                        </div>

                        <button className="submit-btn">Crear</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;