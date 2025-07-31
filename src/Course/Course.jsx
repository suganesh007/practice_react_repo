import './Course.css';
import img from '../assets/image_3.jpg';

export function Course({name = 'HTML Product', price = 0, image = img, rating=0, show}) {

    return show && (
        <>
            <div className="card">
                <img className="card-img-top" src={image} alt="" />
                <h3 className="card-head">{name}</h3>
                <p className="card-text">{price}</p>
                <p className="card-text">rating: {rating}</p>
            </div>
        </>
    )
}

