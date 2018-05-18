import React from 'react';
import Header from './Header';
import Block from './Block';
import Footer from './Footer';

class Main extends React.Component {
    render() {
        return(
            <div>
               
                <Header />
                
                <div className="blocks clearfix">
                    <Block video="https://www.youtube.com/embed/AuCv9DV2Nbc"/>
                    
                    <Block video="https://www.youtube.com/embed/ye0c_2fMP8U"/>
                    
                    <Block video="https://www.youtube.com/embed/_bzATDSKuVs"/>
                    
                    <Block video="https://www.youtube.com/embed/jdwYz-JVugM"/>
                    
                    
                    <Block video="https://www.youtube.com/embed/1w5_r9zbPyU"/>
                    
                    <Block video="https://www.youtube.com/embed/lJeglmhSMLk"/>
                    
                    <Block video="https://www.youtube.com/embed/yDqdF5-qRBM"/>
                    
                    <Block video="https://www.youtube.com/embed/-2elE9bdNac"/>
                </div>
                
                <Footer />
                
            </div>
        );
    }
}

export default Main;