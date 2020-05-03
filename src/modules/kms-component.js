import React, { Component } from 'react'; 
import { Layout, Row, Col, Table, Button, Modal} from 'antd'; 
import '../assets/css/portofolio.css' 
import '../assets/css/style.css' 
import InputForm from '../app/input-form.js'
import Form from 'antd/lib/form/Form';

const { Content } = Layout; // membuat konstanta content 
  
class KmsComponent extends Component{
    state = { visible: false }
    showModal = () => {
        this.setState({
        visible: true,
        });
    }
    handleChange = (e) => {
        let target = e.target.name;
        let value = e.target.value;
        this.setState({
            [target]: value
        })
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

    render(){
        const columns = [{
            title: 'Nama Anak',
            dataIndex: 'nama_anak',
            key: 'nama_anak',
            render: text => <a href="#">{text}</a>,
          }, {
            title: 'Usia',
            dataIndex: 'usia_anak',
            key: 'usia_anak',
          },
          {
            title: 'Berat Badan',
            dataIndex: 'bb',
            key: 'bb',
          }, {
            title: 'Tinggi Badan',
            dataIndex: 'tb',
            key: 'tb',
          }, {
            title: 'Instansi',
            dataIndex: 'instansi',
            key: 'instansi',
          }, {
            title: 'Lokasi',
            dataIndex: 'lokasi',
            key: 'lokasi',
          },{
            title: 'Tanggal',
            dataIndex: 'tanggal',
            key: 'tanggal',
          }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="#">Edit</a>
                <span className="ant-divider" />
                <a href="#">Delete</a>
                <span className="ant-divider" />
                <a href="#" className="ant-dropdown-link">
                  {/* More actions <Icon type="down" /> */}
                </a>
              </span>
            ),
        }];
        
        const data = [{
            key: '1',
            nama_anak: 'John Brown',
            usia_anak: 3,
            bb: 10,
            tb: 120,
            instansi: 'Puskesmas Danurejan I',
            lokasi: 'Danurejan',
            tanggal: '12-12-2019'
          }, {
            key: '1',
            nama_anak: 'Winsie Wiradi',
            usia_anak: 3,
            bb: 20,
            tb: 120,
            instansi: 'Puskesmas Danurejan I',
            lokasi: 'Danurejan',
            tanggal: '12-12-2019'
          }, {
            key: '1',
            nama_anak: 'Malika Brown',
            usia_anak: 2,
            bb: 10,
            tb: 100,
            instansi: 'Puskesmas Danurejan I',
            lokasi: 'Danurejan',
            tanggal: '12-12-2019'
          }, 
        ];

        return(
            <Layout className="landing-container">
                <Content style={{ 
                    overflow: "hidden",
                    padding:15,
                    minHeight:280,
                    borderRadius:"8px",
                    }}
                > 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                Data KMS Anak
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                Platform pengisian data KMS oleh Admin Posyandu.
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
                                <Button key="tambah_data" className="editable-add-btn" type="primary" onClick={()=>this.showModal()}>Tambah Data
                                </Button>
                                <br></br>
                                <br></br>
                                <Table columns={columns} dataSource={data} />
                            </Col>
                        </Row>
                </Content>
                <Modal
                    title="Tambah Kategori"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <Form>
                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Nama Anak</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='nama_anak'
                                    placeholder="Masukkan nama anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={this.handleChange}
                                    value={this.state.nama_anak}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Usia</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='usia_anak'
                                    placeholder="Masukkan usia anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={this.handleChange}
                                    value={this.state.usia_anak}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Berat Badan</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='bb'
                                    placeholder="Masukkan berat badan anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={this.handleChange}
                                    value={this.state.bb}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={24} md={24} sm={24}>
                            <div>
                                <span className="auth-input-label text-black">Tinggi Badan</span>
                            </div>
                            <div>
                                <InputForm 
                                    name='tb'
                                    placeholder="Masukkan tinggi badan anak..."
                                    className="input-event mt-5 mb-20"
                                    onChange={this.handleChange}
                                    value={this.state.tb}
                                />
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </Layout>
        );
    }
}

export default KmsComponent;