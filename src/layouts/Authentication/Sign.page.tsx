import { Layout, Row, Col, Image } from 'antd';
import Sign from '../../components/seconday/Sign';
import viteLogo from '/vite.svg';

const SignPage = () => {
    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>

                <Col span={12} style={{ paddingLeft: '80px', display: 'flex', alignItems: 'center' }}>
                    <div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '16px'
                        }}>
                            <img src={viteLogo} alt="logo" style={{ width: '40px', marginRight: '8px' }} />
                            <h2 style={{
                                fontSize: '24px',
                                color: '#012f5B',
                                margin: 0
                            }}>
                                RETI PROJECT
                            </h2>
                        </div>

                        <Sign />
                    </div>
                </Col>

                <Col span={12}>
                    <Image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        preview={false}
                        style={{
                            width: '100%',
                            height: 'calc(100vh - 40px)',
                            objectFit: 'cover',
                            borderTopLeftRadius: '20px',
                            borderBottomLeftRadius: '20px',
                            marginRight:'38px',
                            marginBottom: '20px',
                        }}
                    />
                </Col>
            </Row>
        </Layout>
    );
};

export default SignPage;
