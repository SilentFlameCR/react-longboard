import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
               
                <h4>Check my <a href="http://www.rahulrodrigues.ca/">website</a> and other projects!</h4>
                
                <div className="social-media row">
                   <div className="col-2">
                       
                   </div>
                  
                   <div className="col-2">
                       <a href="https://www.linkedin.com/in/rahul-rodrigues/"><i class="fa fa-linkedin fa-2x"></i></a>
                   </div>
                  
                   <div className="col-2">
                       <a href="https://www.facebook.com/rahul.beckham"><i class="fa fa-facebook-square fa-2x"></i></a>
                   </div>
                   
                   <div className="col-2">
                       <a href="https://twitter.com/PerhapsItsRahul"><i class="fa fa-twitter-square fa-2x"></i></a>
                   </div>
                   
                   <div className="col-2">
                       <a href="https://github.com/SilentFlameCR"><i class="fa fa-github-square fa-2x"></i></a>
                   </div>
                 
                </div>   
                
                
            </div>
        );
    }
}

export default Footer;