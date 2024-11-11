import { useEffect } from "react"
import { Button, Form, Input, Checkbox, notification } from "antd";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import {useLoginMutation} from "../../services/users.ts";


const StyledForm = styled(Form)`
max-width: 400px;
width: 100%;
margin: 0 auto;
padding: 24px;
background: #fff;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledFormItem = styled(Form.Item)`
margin-bottom: 16px;
`;

const StyledInput = styled(Input)`
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
`;

const StyledInputPassword = styled(Input.Password)`
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
`;

const StyledCheckbox = styled(Checkbox)`
margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
width: 100%;
background-color: #012f5B;
border-color: #012f5B;
&:hover {
  background-color: #011f3B;
  border-color: #011f3B;
}
`;

const StyledLink = styled.a`
    color: #5b9bd5;
    display: block;
    text-align: right;
    margin-top: 2px;

`;

const LoginForm = () => {
    const navigate = useNavigate();
    const [login, { isLoading, isSuccess, data }] = useLoginMutation()



    const onFinish = async (values: never) => {
        try {
            await login(values).unwrap()
        } catch (e) {
            notification.error({
                message: e,
                description: "Something went wrong"
            })
        }
    }
    const onFinishFailed = (errorInfo: never) => {
        console.log('Failed:', errorInfo);
    };
    useEffect(() => {
        if (isSuccess) {
            const results = JSON.stringify(data)
            localStorage.setItem('loginDetails', results)

            notification["success"]({
                message: `Welcome Back, ${data?.user.first_name}`,
            })
            navigate("/");
        }
    }, [isSuccess, data]);
    return (
        <StyledForm
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
        >
            <StyledFormItem
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <StyledInput placeholder="Username" />
            </StyledFormItem>

            <StyledFormItem
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <StyledInputPassword placeholder="Password" />
            </StyledFormItem>
            <StyledLink href="#">Forgot your Password?</StyledLink>

            <StyledFormItem
                name="remember"
                valuePropName="checked"
                style={{ textAlign: 'center' }}
            >
                <StyledCheckbox>Remember me</StyledCheckbox>

            </StyledFormItem>

            <StyledFormItem>
                <StyledButton type="primary" htmlType="submit" loading={isLoading}>
                    Login
                </StyledButton>
            </StyledFormItem>
        </StyledForm>
    )
}

export default LoginForm;