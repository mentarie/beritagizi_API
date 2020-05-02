import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/landing.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; 

class LandingComponent extends Component{
    render(){
        const image1 = require(`../assets/images/picture.jpg`); 
        const {initialData,showModal,handleOk,handleCancel} = this.props; {
        }
        return(
            <Layout className="landing-container">
                {/*<Navbar/>  {}*/}
                <Content style={{ overflow: "hidden" }}> {}
                    <Row className="section-container">
                        <Col lg={12} md={12} sm={12}>
                            <div className="image-big-container">
                                <img
                                    src={image1}
                                    alt="Home 1"
                                    style={{maxWidth: '80%', marginLeft:"100px"}}
                                />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24}>
                                    <div className="title-container">
                                        <span className="text-soft-blue title-big bold">Food Calculator</span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="image-hidden">
                                        <img
                                            src={image1}
                                            alt="Home 1"
                                            style={{maxWidth: '100%'}}
                                        />
                                    </div>
                                    <div className="description-container desc-medium">
                                    Cari makanan untuk melihat detail gizinya!
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="button-section-1-container">                                
                                        <ButtonHome
                                            text="Show Me"
                                            background="#7e6752"
                                            textColor="#fff"
                                            className='button-participate'
                                            onClick = {showModal}
                                        />{}
                                        <ButtonHome
                                            text="Another Information"
                                            background="white"
                                            textColor="#7e6752"
                                            border="1px solid #7e6752"
                                            marginLeft={16}
                                            className='button-participate'
                                        />
                                    </div>
                                </Col>
                                <Modal
                                    title="Contact"
                                    visible={initialData.visible}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    className = "modal-notif"
                                    >
                                    <p className="text-notif">Jika ingin mencari tahu gizi lebih lengkap, bisa juga kunjungi <a>https://developer.edamam.com/food-database-api</a>
                                     </p>
                                </Modal>{}
                            </Row>
                        </Col>  
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default LandingComponent;