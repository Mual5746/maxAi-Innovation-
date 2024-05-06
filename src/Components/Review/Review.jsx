import './Review.css'
import Backbtn from '../../assets/Backbtn.png'
import Nextbtn from '../../assets/Nextbtn.png'
import user1 from '../../assets/profile.png'
import { useRef } from 'react'

const Revieww = () => {

    const slider = useRef();
    //start position för slider i x riktning 
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div className='review'>
            <img src={Backbtn} alt="" className='back-btn' onClick={slideBackward} />
            <img src={Nextbtn} alt="" className='next-btn' onClick={slideForward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Max Ali 1</h3>
                                    <span> Uppsala</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae a atque nobis ipsam enim odio eos explicabo adipisci voluptate. Autem quisquam doloribus saepe vero eveniet quis cumque odio quo?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Max Ali 2</h3>
                                    <span> Uppsala</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae a atque nobis ipsam enim odio eos explicabo adipisci voluptate. Autem quisquam doloribus saepe vero eveniet quis cumque odio quo?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Max Ali 3</h3>
                                    <span> Uppsala</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae a atque nobis ipsam enim odio eos explicabo adipisci voluptate. Autem quisquam doloribus saepe vero eveniet quis cumque odio quo?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Max Ali 4</h3>
                                    <span> Uppsala</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae a atque nobis ipsam enim odio eos explicabo adipisci voluptate. Autem quisquam doloribus saepe vero eveniet quis cumque odio quo?
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Max Ali 5</h3>
                                    <span> Uppsala</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae a atque nobis ipsam enim odio eos explicabo adipisci voluptate. Autem quisquam doloribus saepe vero eveniet quis cumque odio quo?
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Revieww
