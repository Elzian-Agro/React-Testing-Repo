import React from "react";
import './about.css';
  
const About = () => {
  return (
    <div className="con">
    
    


      <section class="section">
        
                <div class="box-main1" >
                    <div class="leftside">
                    <h1 className="heading">
                      ELZIAN AGRO
                                  </h1>
                        
                        <p class="text-small">
                        ELZIAN PVT LTD is a start-up that provides smart agronomy solutions to Support mass cultivation farmers to
monitor and automate their farmland.
                        ELZIAN AGRO provides smart agronomy solutions to support mass cultivation farmers to monitor and automate their farmland. We offer customized monitoring information and automation solutions through trending digital technologies to optimize our customers' harvest and productively utilize their resources. According to United Nations Sustainable Reports, farmers negatively impact due to extreme weather changes and limited resources.
                         ELZIAN AGRO is a start-up that provides a soil and weather monitoring system for indoor and mass cultivation farmers and supports them to automate their farmland. We offer customized monitoring information and automation solutions through the sensor network to optimize our customers' harvest and productively utilize their resources.
                          Our customers can monitor their farmland anywhere, anytime, and make efficient and rational decisions to maximize their profitability.
                       
                        
                        </p>
                    </div>
                </div>
                
            </section>
            


            <section class="section">
                <div class="box-main2">
                    <div class="rightside">
        

                    <div className="image">
                      <img className="image" src={"./assets/elz.png.jpg"}/>
                      
                      </div> 
                        
  
                    </div>
                </div>
            </section>

  

            <div className="sec">
      <video autoPlay loop muted>
        <source src="https://agro.elzian.com/videos/elzianreduce.mp4" type="video/mp4"></source>
      </video>
    

            </div>      
    </div>
  );
};
  
export default About;