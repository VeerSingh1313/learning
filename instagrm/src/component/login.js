import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FatchLogin } from "./redux/LoginAction"
import React from 'react'
import { Form, Field } from 'react-final-form'
import Cookies from "js-cookie"


const Login = () => {
    const dispatch = useDispatch()
    const token = Cookies.get('token')
    const data = useSelector((state) => state)
    const Navigate = useNavigate()
    console.log(data, "DFS ")
    const onsubmit = ((values) => {
        console.log(values)
        dispatch(FatchLogin(values)).then((res) => {
            // console.log(res.payload , "dfdfdfdf")
            if (res.payload && res.payload.token) {
                console.log(token, "asdf")
                const tokens = res.payload.token;
                Cookies.set("token", tokens, { expires: 1 });
                console.log('token saved in cookies');
                Navigate('/')
                window. location. reload()
            }
            else {
                console.log('token not found in the response')
                // console.log(jwtDecode(Cookies.get("token")), "sdsdsdsdsd")
            }

        })

    })


    return (
        <>

            <div style={{
                border: '1px solid gray',
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "40%",
                margin: "auto",
                padding: "20px 0"
            }}>
                <div>
                    <h1 className="text-center">Instagram</h1>
                </div>
                <div>

                    <div className="d-grid gap-2">

                        <Form
                            onSubmit={onsubmit}
                            validate={values => {
                                const errors = {}
                                if (!values.username) {
                                    errors.username = 'Required'
                                }
                                if (!values.password) {
                                    errors.password = 'Required'
                                }

                                return errors
                            }}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <Field name="username">
                                        {({ input, meta }) => (
                                            <div>
                                                <label>Username</label>
                                                <input {...input} type="text" placeholder="Username" />
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="password">
                                        {({ input, meta }) => (
                                            <div>
                                                <label>Password</label>
                                                <input {...input} type="password" placeholder="Password" />
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>

                                    <div className="buttons">
                                        <button type="submit" >
                                            Submit
                                        </button>


                                    </div>

                                </form>
                            )}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}


export default Login
