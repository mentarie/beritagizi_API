import React, {Component} from 'react'; 
import NewsComponent from '../modules/news-component'




class NewsPage extends Component {
    state ={
        visible: false,
    }
   
    componentDidMount(){

    }
    

    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    //handleOk dan handleCancel digunakan untuk close modal

    render(){
        return (
            <NewsComponent
                initialData = {this.state} //ini maksudnya membuat varibel initalData yg isinya semua state yang telah dibuat
                showModal = {this.showModal} //ini maksudnya membuat variabel showmodal yang akan dipanggil, this.showmodal mksdnya itu manggil functin show modal, karena masih satu halaman pakainya this.
                handleCancel = {this.handleCancel} //sama seperti showmodal
                handleOk = {this.handleOk} //sama seperti showmodal
            />
        );
    }
}

export default NewsPage;