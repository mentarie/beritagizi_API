import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        // // image: require(`../../../assets/images/tracking.png`),
        title: 'Berita1',
        link : "",
        description: "Summary berita 1"
    },
    {
        // // image: require(`../../../assets/images/certificate.png`),
        title: 'Berita2',
        link : "",
        description: "Summary berita 2"
    },
    {
        // // image: require(`../../../assets/images/paperless.png`),
        title: 'Berita3',
        link : "",
        description: "Summary berita 3"
    }
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                Kenali Lebih Jauh
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                Hal-hal yang aku lakukan belakangan ini.
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
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}<br/><br/>
                                                        <a href={data.link}>
                                                            <ButtonHome
                                                                text="More"
                                                                background="#7e6752"
                                                                textColor="#fff"
                                                                className='button-participate'
                                                                onClick = {data.link}
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;