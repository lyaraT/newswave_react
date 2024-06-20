import React from "react";
import '../assets/css/menu.css';
import image1 from "../assets/images/pexels-mjlo-2872418.jpg";
import image2 from "../assets/images/23433ce0-2bec-11ef-90be-b75b34b0bbb2.jpg.webp";
import image3 from "../assets/images/Cricket.jpg";
import image4 from "../assets/images/srilanka-scaled.jpg";
import image5 from "../assets/images/1713145285029_nn_netcast_2_240414_1920x1080-8wt114.jpg";
import image6 from "../assets/images/example3.webp";
import image7 from "../assets/images/example4.avif";
import image8 from "../assets/images/skynews-sri-lanka-protest-sri-lanka_5766049.jpg";
import image9 from "../assets/images/example-1.jpeg";
import image10 from "../assets/images/tv-news-live-report-anchorman-260nw-2169480555.webp";
import image11 from "../assets/images/Ukraine-Peace-Summit_20240616_214920_0000.jpg";
import video from "../assets/videos/4765224-hd_1280_720_24fps.mp4";

export default function Menu() {
    return (
        <>
            <div className="main-container">
                <h3>Main Stories</h3>
                <div className="main-content">
                    <div className="left-section">
                        <video autoPlay loop muted playsInline>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="right-section">
                        <div className="large-box">
                            <img src={image1} alt="Main Story" />
                        </div>
                        <div className="small-box-container">
                            <div className="small-box">
                                <img src={image2} alt="Article" />
                            </div>
                            <div className="small-box">
                                <img src={image3} alt="Article" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second-main-div">
                    <h2>Sri Lanka Cricket Faces Transition Challenges Amidst Leadership Overhaul</h2>
                    <p>In a pivotal moment for Sri Lanka's cricketing landscape, the national team grapples with significant changes in leadership. Following recent coaching and administrative shifts, the team navigates a critical phase marked by both promise and uncertainty. As stalwart players contemplate retirement, emerging talents eagerly eye opportunities to redefine Sri Lanka's competitive edge. Amidst this transition, the cricketing community awaits with bated breath, pondering the trajectory that will shape the island nation's sporting future.</p>
                </div>

                <h3>Trending Stories</h3>
                <div className="third-main-div">
                    <div className="mini-box">
                        <img src={image4} alt="Trending Story" />
                    </div>
                    <div className="mini-box">
                        <img src={image5} alt="Trending Story" />
                    </div>
                    <div className="mini-box">
                        <img src={image6} alt="Trending Story" />
                    </div>
                    <div className="mini-box">
                        <img src={image7} alt="Trending Story" />
                    </div>
                </div>

                <div className="fourth-main-div">
                    <div className="mini-box">
                        <img src={image8} alt="Additional Story" />
                    </div>
                    <div className="mini-box">
                        <img src={image9} alt="Additional Story" />
                    </div>
                    <div className="mini-box">
                        <img src={image10} alt="Additional Story" />
                    </div>
                    <div className="mini-box">
                        <img src={image11} alt="Additional Story" />
                    </div>
                </div>
            </div>
        </>
    );
}
