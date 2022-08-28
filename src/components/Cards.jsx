import React from 'react'

const Cards = () => {
    return (
        <div >
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ textAlign: 'center' }}><b>PLANS THAT SUIT YOU BEST</b></h1>
            <br />
            <br />
            <div className="card-group" style={{marginLeft:"70px"}}>
               <div className="container">
                <div className="container">
                <div className="row">
                    <div className="col-md-4" style={{backgroundColor: '#54595F', color: 'white', padding:"20px", width:"30%", borderRadius:"10px", paddingBottom:"30px"}}>
                    <img style={{width:"200px"}} src="star.svg" alt="" />
                    <div className="card" style={{backgroundColor: '#54595F', color: 'white', border:"none", paddingLeft:"60px"}}>
                    <h1>FREE</h1>
                    <p>Basic</p>
                    <p>Ads supported </p>
                    <p>Flexible workout planner </p>
                    <p>Top-notch log tracker </p>
                    <p>1400+ exercises library </p>
                    <p>Body stats tracking tools </p>
                    <p>Support interval training </p>
                    
                </div>
                <button className="btnall" style={{ fontSize:"14px"}}>FREE DOWNLOAD</button>
                    </div>
                    <div className="col-md-4" style={{backgroundColor: '#54595F', color: 'white', padding:"20px", width:"30%", marginLeft:"30px", borderRadius:"10px"}}>
                    <img style={{width:"200px"}} src="certfct.svg" alt="" />
                    <div className="card" style={{backgroundColor: '#54595F', color: 'white', border:"none", paddingLeft:"60px"}}>
                    <h1>FREE</h1>
                    <p>Basic</p>
                    <p>Ads supported </p>
                    <p>Flexible workout planner </p>
                    <p>Top-notch log tracker </p>
                    <p>1400+ exercises library </p>
                    <p>Body stats tracking tools </p>
                    <p>Support interval training </p>
                    
                </div>
                <button className="btnall" style={{ fontSize:"14px"}}>FREE DOWNLOAD</button>
                    </div>
                    <div className="col-md-4" style={{backgroundColor: '#54595F', color: 'white', padding:"20px" , width:"30%", marginLeft:"30px", borderRadius:"10px"}}>
                    <img style={{width:"200px"}} src="crown.svg" alt="" />
                    <div className="card" style={{backgroundColor: '#54595F', color: 'white', border:"none", paddingLeft:"60px"}}>
                    <h1>FREE</h1>
                    <p>Basic</p>
                    <p>Ads supported </p>
                    <p>Flexible workout planner </p>
                    <p>Top-notch log tracker </p>
                    <p>1400+ exercises library </p>
                    <p>Body stats tracking tools </p>
                    <p>Support interval training </p>
                    
                </div>
                <button className="btnall" style={{ fontSize:"14px"}}>FREE DOWNLOAD</button>
                    </div>
                </div>
                </div>
               </div>
                
            </div>
        </div>
    )
}

export default Cards