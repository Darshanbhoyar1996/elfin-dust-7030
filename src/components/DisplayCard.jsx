import React from 'react'

const DisplayCard = () => {
    return (
        <div>
            <div className="container-fluid" style={{ backgroundColor: '#0274be', padding:"40px" }}>
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <br />
                        <h3 className='disph1'> MANAGE & TRACK<br />ALL YOUR WORKOUTS<br />IN ONE PLACE</h3>
                        <br />
                        <h5 className="disph5" >#1 Popular Workout Tracking Platform<br />Stay Strong Together</h5>
                            <div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <br />
                                        <img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/googleplay.png" alt="" />
                                        <br/>
                                        <br />
                                        <img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/appstore.png" alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <img src="https://www.jefit.com/wp/wp-content/uploads/2021/11/qrcode_white.png" alt="" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container">
                            <img className='img-fluid' src="https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-2048x1707.png" alt="" />
                        </div>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    )
}

export default DisplayCard