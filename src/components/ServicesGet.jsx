import React from "react";

const ServicesGet = () => {
    return (
        <div className="services">
            <h2>Services You can get from COR community</h2>
            <div>
                <div className="service-item">
                    <img src="https://artcoin.media/img/copywriting.f6aa6ace.jpg" alt=""/>
                    <p className="hint">Content for next MediaCor event (copyrighting)</p>
                    <a href="https://artcoin.media" className="link">Learn More</a>
                    <p>Price 200 ARTC</p>

                    <button className="btn">Get Service</button>
                </div>
            </div>
        </div>
    );
}

export default ServicesGet;