import './Course.css';
import {useState} from "react";
// import img_3 from 'Data/assets/image_1.jpg';


function Course({name = 'HTML Product', price = 0, image, rating=1.0, deleteItem, course_id}) {

    const [purchased, setPurchased] = useState(false);
    
    
    function BuyCourse(){
        setPurchased(true);
        console.log(purchased);
    }


    return (
        <>
            <div className="card col-3 shadow-lg">
                <img className="card-img-top" src= {image} alt="img1" />
                <h3 className="card-head h6">{name}</h3>
                <p className="card-text">{price}</p>
                <p className="card-text">rating: {rating}</p>
                <button onClick={()=>BuyCourse()} className='btn btn-info js-click-me-btn h6 w-75 p-0'>Click</button>
                <button onClick={()=>deleteItem(course_id)} className='btn btn-primary w-75 p-0'>remove</button>
            </div>
        </>
    )


}


// Easy to understand as a developer in console to understand the error what is?
// What the problem is? So must write this…
// Course.propTypes = {
//     name: PropTypes.string,
//     price: PropTypes.number
// }
export default Course;