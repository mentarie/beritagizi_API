import React, { Component } from 'react'; 
import { Layout, Row, Col, Card , Modal} from 'antd'; 
import '../assets/css/portofolio.css' 
import '../assets/css/style.css' 
import InputForm from '../app/input-form.js'
import Form from 'antd/lib/form/Form';

const { Meta } = Card;
const { Content } = Layout; // membuat konstanta content 

class SigninComponent extends Component{
    render(){
        const{data, initialData, handleChange}=this.props;
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                Login
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                Masuk Akun Kader Posyandu.
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#7d5e2a',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={300} className="mt-20">
                                <Row
                                    type="flex" gutter={[16,16]}
                                    className="card-why-container"
                                >
                                    <Col lg={8} md={12} sm={12} className="">
                                    <Form>
                                        <Row>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>
                                                    <span className="auth-input-label text-black">Email</span>
                                                </div>
                                                <div>
                                                    <InputForm 
                                                        name='email'
                                                        placeholder="Masukkan alamat email"
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.email}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={24} md={24} sm={24}>
                                                <div>
                                                    <span className="auth-input-label text-black">Password</span>
                                                </div>
                                                <div>
                                                    <InputForm 
                                                        name='password'
                                                        placeholder="Masukkan password"
                                                        className="input-event mt-5 mb-20"
                                                        onChange={handleChange}
                                                        value={initialData.password}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default SigninComponent;