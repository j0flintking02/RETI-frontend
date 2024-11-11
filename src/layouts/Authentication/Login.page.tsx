import {Layout} from "antd";
import LoginForm from "../../components/seconday/LoginForm.tsx";
import viteLogo from '/vite.svg'

const LoginPage = ()=> {
    return (
        <Layout>
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '16px 0'
            }}>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '16px'}}>
                    <img src={viteLogo} alt="logo" style={{width:'200px'}}/>
                    <h2>RETI PROJECT</h2>
                </div>
                <div style={{
                    backgroundColor: '#fff',
                    display: 'flex',
                    width: '400px',
                    flexDirection: 'column',
                    borderRadius: '0 0 10px 10px'
                }}>
                    <h2 style={{
                        textAlign: 'center',
                        backgroundColor: '#012f5B',
                        color: "#fff",
                        padding: '16px',
                        marginTop: '0',
                        borderRadius: '10px 10px 0 0'}}>
                        LOGIN</h2>
                    <LoginForm/>
                </div>
            </div></Layout>
    )
};

export default LoginPage