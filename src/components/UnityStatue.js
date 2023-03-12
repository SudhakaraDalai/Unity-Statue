import React from 'react'
import "./unity.css"

function UnityStatue() {
  return (
    <div>
        <div>
            <nav className='navbar'>
                <div>
                    <img className='logoimg' src='https://cdn.iconscout.com/icon/free/png-256/statue-of-unity-1-1100882.png' alt=''/>
                </div>
                <div className='navlist'>
                    <a href='#home'><li>Home</li></a>
                    <a href='#view'><li>SoU View</li></a>
                    <a href='#tall'><li>Tallest Statue</li></a>
                    <a href='#test'><li>About SoU</li></a>
                    <a href='#gallery'><li>Gallery</li></a>
                </div>
            </nav>
        </div>
        <div id='home' className='description'>
            <div className='videos'>
                <div>
                    <h3>COME, VISIT THE STATUE OF UNITY <br/>THE WORLD'S TALLEST</h3>
                <video controls className='videosize' src='https://statueofunity.in/wp-content/uploads/1-MIN-Revised-1-1-1.mp4'>
                </video>
                </div>
                <div>
                    <h3>GLIMPSES OF HON'BLE PRIME MINISTER'S VISIT TO THE STATUE OF UNITY</h3>
                <video controls className='videosize' src='https://statueofunity.in/wp-content/uploads/PM-Visit.mp4'>
                </video>
                </div>
                <div>
                    <h3>KESUDA TOUR</h3>
                <video controls className='videosize' src='https://statueofunity.in/wp-content/uploads/Kesuda-Festival_20.02.2022-Ankit-VO.mov'>
                </video>
                </div>
                <div>
                    <h3>CACTUS GARDEN</h3>
                    <img src='https://statueofunity.in/wp-content/uploads/elementor/thumbs/KDV-44-1-o995zgcrdkg5x7dbnv2vrbaey1qugkwyb2tn70wuhw-oxiia0h7cgjbdla6czsv79mpkoeofa6eb7kyuct10k.jpg' alt=''/>
                    <p>The Cactus Garden is a unique botanical garden at the Statue of Unity site, created to exhibit a huge variety of Cacti and succulents, the true miracles of adaptation. The thought behind the development of the cactus garden is to provide an experience of the desert ecosystem in the midst of a landmass well entrenched in an aquatic surrounding. There are 6 lakh plants of 450 species spread across 25 acres of open land and inside the dome having an area of 836 square metres.</p>
                </div>
                <div>
                    <h3>RIVER RAFTING</h3>
                    <img src='https://statueofunity.in/wp-content/uploads/elementor/thumbs/IMG-20190529-WA0031-oxiibse896ytb2pbzrfhwti1yvnmyp857zxzh6699g.jpg' alt=''/>
                    <p>River rafting is undoubtedly one of the most enthralling and physically demanding adventure sports in the world. Narmada, the largest west flowing river in the country, and the lifeline of millions has now ushered in the thrilling experience for the adventure enthusiasts who can now enjoy river rafting in 4.5 km. stretch with whirlpools, rapids and many turns which provide an exciting and unforgettable rafting experience for the first time in Gujarat.</p>
                </div>
            </div>
            <div className='para'>
                    <p>“INDIA HAS GOT A RICH CULTURAL HERITAGE OF “UNITY IN DIVERSITY”, THE ROOTS OF WHICH ARE INEXTRICABLY FOUNDED ON THE PRINCIPLE OF “VASUDHAIV KUTUMBAKAM”, MEANING THAT THE ENTIRE UNIVERSE IS A FAMILY. AT THE TIME OF INDIA'S INDEPENDENCE IN 1947, IT WAS HOWEVER DIVIDED INTO MORE THAN 560 PRINCELY STATES AND IT WAS INDIA'S FIRST DEPUTY PRIME MINISTER, BHARAT RATNA SARDAR VALLABHBHAI PATEL, WHO WITH HIS FIRM DETERMINATION, COULD TRANSFORM SUCH IMPERIALISM INTO TODAY'S UNIFIED INDIA. PEOPLE OF INDIA WILL REMAIN INDEBTED TO HIM FOREVER FOR HIS LEADERSHIP DURING THE FREEDOM STRUGGLE AND HIS VISION, WISDOM AND STATESMANSHIP IN THE POST-INDEPENDENCE ERA. HIS LIFE IS AN ETERNAL SOURCE OF INSPIRATION FOR THE PRESENT AS WELL AS FUTURE GENERATIONS AND IT IS IN THIS CONTEXT THAT HIS ICONIC MONUMENTAL STATUE - THE WORLD'S TALLEST STATUE OF UNITY HAS BEEN DEDICATED TO THE NATION ON THE 143RD BIRTH ANNIVERSARY. SYMBOLIZING THE NATIONAL, SPIRITUAL, HISTORICAL AND ACADEMIC VALUES, THE STATUE OF UNITY WILL LEAD TO THE ICON-BASED DEVELOPMENT OF THIS ENTIRE REGION, WHICH IS PREDOMINANTLY A TRIBAL AREA. OUR VISION IS TO MAKE THIS PLACE A WORLD className TOURIST DESTINATION BY PROVIDING INFRASTRUCTURE FOR EDUTAINMENT, RESEARCH, CULTURAL, ENVIRONMENTAL ENRICHMENT AND HEALTH PROMOTION. A TRUE LEADER KEEPS ON ENLIGHTENING THE PATH OF MANKIND EVEN IN HIS PHYSICAL ABSENCE AND THE STATUE OF UNITY IS THE REALIZATION OF THIS - WORTH EXPERIENCING.”</p>
            </div>
        </div>
        <div id='view'>
            <img className='statueview' src='https://statueofunity.in/wp-content/uploads/2020/10/029_Easy-Resize.com_.jpg' alt=''/>
        </div>
        <div id='tall'>
            <div className='tallest'>
                <div>
                    <h1>Statue of Unity &nbsp;|</h1>
                </div>
                <div>
                    <p>THE WORLD'S TALLEST STATUE,<br/>AT 182 METRES</p>
                </div>
            </div>
            <div className='worldwonders'>
            <div className='imgbox'>
                    <img style={{"width":"190px","height":"230px"}} src='https://statueofunity.in/wp-content/uploads/2019/04/f-bro-SoU-website_comparision-image6.png' alt=''/>
                    <p>Statue of Unity<br/>
                    India<br/>
                    <b>182 metres</b></p>
                </div>
                <div className='imgbox'>
                    <img style={{"width":"180px","height":"180px"}} src='https://statueofunity.in/wp-content/uploads/2019/04/f-bro-SoU-website_comparision-image5.png' alt=''/>
                    <p>Spring Temple Buddha<br/>
                     China<br/>
                    <b>153 metres</b></p>
                </div>
                <div className='imgbox'>
                    <img style={{"width":"160px","height":"160px"}} src='https://statueofunity.in/wp-content/uploads/2019/04/f-bro-SoU-website_comparision-image4.png' alt=''/>
                    <p>Ushiku Daibutsu<br/>
                    Japan<br/>
                    <b>120 metres</b></p>
                </div>
                <div className='imgbox'>
                    <img style={{"width":"150px","height":"150px"}} src='https://statueofunity.in/wp-content/uploads/2019/04/f-bro-SoU-website_comparision-image3.png' alt=''/>
                    <p>Statue of Liberty<br/>
                    USA<br/>
                    <b>93 metres</b></p>
                </div>
                <div className='imgbox'>
                    <img style={{"width":"140px","height":"140px"}} src='https://statueofunity.in/wp-content/uploads/2019/04/f-bro-SoU-website_comparision-image2.png' alt=''/>
                    <p>The Motherland Calls<br/>
                    Russia<br/>
                    <b>85 metres</b></p>
                </div>
                <div className='imgbox'>
                    <img style={{"width":"120px","height":"120px"}} src='https://statueofunity.in/wp-content/uploads/2019/04/f-bro-SoU-website_comparision-image1.png' alt=''/>
                    <p>Christ The Redeemer<br/>
                    Brazil<br/>
                    <b>38 metres</b></p>
                </div>
            </div>
        </div>
        <div className="image-container" id="gallery">
            
            <div className="product-card">
                <section id="image">
                    
                    <div className="main-image">
                        <img src="https://statueofunity.in/wp-content/uploads/2020/10/003_Easy-Resize.com_-300x200.jpg" alt="" />
                    </div>
                </section>
                
              </div>
              <div className="product-card">
                <section id="image">
                    
                    <div className="main-image">
                        <img src="https://statueofunity.in/wp-content/uploads/2020/10/022_Easy-Resize.com_-300x169.jpg" alt=''/>
                    </div>
                </section>
                
              </div>
              <div className="product-card">
                <section id="image">
                    
                    <div className="main-image">
                        <img src="https://statueofunity.in/wp-content/uploads/2020/10/025_Easy-Resize.com_-300x200.jpg" alt="" />
                    </div>
                </section>
                
              </div>
              <div className="product-card">
                <section id="image">
                    
                    <div className="main-image">
                        <img src="https://statueofunity.in/wp-content/uploads/2020/10/028_Easy-Resize.com_-300x200.jpg" alt=""/>
                    </div>
                </section>
                
              </div>
              <div className="product-card">
                <section id="image">
                    
                    <div className="main-image">
                        <img src="https://statueofunity.in/wp-content/uploads/2020/10/040_Easy-Resize.com_-225x300.jpg" alt=""/>
                    </div>
                </section>
                
              </div>
              
        </div>
        <div id='test' style={{"backgroundColor":"rgb(21,64,104)","marginTop":"-20px","color":"white","paddingTop":"40px"}}>
            <h2>A TESTIMONIAL OF INDIA'S SPIRIT OF UNITY IN DIVERSITY</h2>
            <div className='testimonial'>
                <img src='https://statueofunity.in/wp-content/uploads/2019/04/souImage.png' alt=''/>
                <p>Since time immemorial, architecture and monuments have given India her identity. From historical Ajanta & Ellora caves to Delwara Temple of Mount Abu and from Taj Mahal to Meenakshi Temple of Madurai, Indian architecture showcases its elegance and superiority across the globe. The most prolific creation in recent times, the Statue of Unity, is the World's Tallest Monument. It represents more than a colossal structure facing the Sardar Sarovar Dam on the river Narmada. It is an iconic symbol of the 'Iron Man', who played an important role during India's freedom struggle and thereafter in the unification of the princely states. It reminds the world of the towering personality of Sardar Vallabhbhai Patel, the nucleus of India's integration as a united country.<br/>
                It was the wit and whip of this 'Iron Man' that 562 small and big princely states unanimously agreed to become an integral part of India. The elucidation of the Statue directly correlates with the meaning and value of unity. While, it is one of the finest interpretations of the designers with its modern construal, it also symbolises and describes the quintessence of the statue to visitors. The world's tallest statue is an engineering marvel that was constructed in merely 46 months.<br/>
                Sardar Patel, respected for his commitment and drive, took up the challenge of convincing all the princely states using diplomacy and peaceful means, or the iron hand when needed.<br/>
                The impressive landmark commemorating Sardar Patel's contribution to unification dovetails into several social development programmes such as improved transport and connectivity, institutions of research, education and tribal development, tourist facilities and other social infrastructure.</p>
            </div>
        </div>
        <div>
            <footer>
                <div className='greybg'>
                    <p>Follow us for more<br/>
                    Stay connected</p>
                    <div className='blckbg'>
                    <p>copyright &#169; all rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default UnityStatue