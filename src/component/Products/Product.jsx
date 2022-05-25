import "./Product.scss";
import sneaker from "../../assets/images/sneaker.jpg";
import sneaker2 from "../../assets/images/sneaker2.jpg";
import sneaker3 from "../../assets/images/sneaker3.jpg";
import sneaker4 from "../../assets/images/sneaker4.jpg";
import { useState } from "react";
import Lightbox from 'react-image-lightbox';

const Product = () => {
    const images = [
        sneaker,
        sneaker2,
        sneaker3,
        sneaker4,
    ]
    const [currentUpImg, setCurrentUpImage] = useState(sneaker);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const handleClickPreviewImg = () => {
        let index = images.findIndex(item => item === currentUpImg);
        setPhotoIndex(index);
        setIsOpen(true);

    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-up">
                        <img src={currentUpImg} alt="" onClick={() => handleClickPreviewImg()} />
                    </div>

                    <div className="img-down">
                        <div className="img-small" >
                            <img src={sneaker} alt="" onClick={() => setCurrentUpImage(sneaker)} className={currentUpImg === sneaker ? "active" : ""} />
                        </div>
                        <div className="img-small" >
                            <img src={sneaker2} alt="" onClick={() => setCurrentUpImage(sneaker2)} className={currentUpImg === sneaker2 ? "active" : ""} />
                        </div>
                        <div className="img-small" >
                            <img src={sneaker3} alt="" onClick={() => setCurrentUpImage(sneaker3)} className={currentUpImg === sneaker3 ? "active" : ""} />
                        </div>
                        <div className="img-small" >
                            <img src={sneaker4} alt="" onClick={() => setCurrentUpImage(sneaker4)} className={currentUpImg === sneaker4 ? "active" : ""} />
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="title">Giày chạy bộ nam New Balance</div>
                    <div className="price">3.695.000 đ</div>
                    <div className="size">Size : 30</div>
                    <div className="action">
                        <label className="quantity">Số lượng</label>
                        <input type="number" min={1} value={1} />
                        <button className="buy">Chọn mua</button>

                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                    animationDuration={500}

                />
            )}
        </div>
    )
}
export default Product;