import React from "react";

const tg = window.Telegram.WebApp

const ServicesProvide = () => {
    const handleBtn = (price) => {
        tg.MainButton.hide();
        tg.MainButton.show();
        tg.MainButton.setParams({
            text: `Provide for ${price} ARTC`,
        })
    }

    return (
        <div className="services">
            <h2>Services You can provide to COR community</h2>
            <div>
                <div className="service-item">
                    <img src="https://artcoin.media/img/copywriting.f6aa6ace.jpg" alt=""/>
                    <p className="hint">Content for next MediaCor event (copywriting)</p>
                    <a href="https://artcoin.media" className="link">Learn More</a>
                    <p>Price 500 ARTC</p>
                    <button className="btn" onClick={() => {handleBtn(500)}}>Provide Service</button>
                </div>
                <div className="service-item">
                    <img src="https://artcoin.media/img/Leaflets.adae1275.png" alt=""/>
                    <p className="hint">Leaflets for next ArtCor event (design)</p>
                    <a href="https://artcoin.media" className="link">Learn More</a>
                    <p>Price 200 ARTC</p>
                    <button className="btn" onClick={() => {handleBtn(200)}}>Provide Service</button>
                </div>
                <div className="service-item">
                    <img src="https://artcoin.media/img/catering.b14f2f97.jpg" alt=""/>
                    <p className="hint">Catering for next ArtCor event (services)</p>
                    <a href="https://artcoin.media" className="link">Learn More</a>
                    <p>Price 850 ARTC</p>
                    <button className="btn" onClick={() => {handleBtn(850)}}>Provide Service</button>
                </div>
            </div>
        </div>
    );
}

export default ServicesProvide;