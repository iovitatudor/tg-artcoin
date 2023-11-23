import React from "react";

const tg = window.Telegram.WebApp

const ServicesGet = () => {
    const handleBtn = () => {
        tg.MainButton.show();
        tg.MainButton.setParams({
            text: 'Get Service',
        })
    }

    return (
        <div className="services">
            <h2>Services You can get from COR community</h2>
            <div>
                <div className="service-item">
                    <img src="https://artcoin.media/img/service1.1d71a7ae.png" alt=""/>
                    <p className="hint">Rent small meeting room</p>
                    <a href="https://artcoin.media" className="link">Learn More</a>
                    <p>Price 2500 ARTC</p>
                    <button className="btn" onClick={handleBtn}>Get Service</button>
                </div>
                <div className="service-item">
                    <img src="https://artcoin.media/img/service2.09375a40.png" alt=""/>
                    <p className="hint">Rent soundlab room</p>
                    <a href="https://artcoin.media" className="link">Learn More</a>
                    <p>Price 120 ARTC/hour</p>
                    <button className="btn" onClick={handleBtn}>Get Service</button>
                </div>
                <div className="service-item">
                    <img src="https://artcoin.media/img/service3.39976aaa.png" alt=""/>
                    <p className="hint">Rent events room</p>
                    <a href="https://artcoin.media" className="link">Learn More</a>
                    <p>Price 2500 ARTC/hour</p>
                    <button className="btn" onClick={handleBtn}>Get Service</button>
                </div>
            </div>
        </div>
    );
}

export default ServicesGet;