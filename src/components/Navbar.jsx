import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#257cff", padding:"20px"}}>
                <div className="container"style={{display:"flex", gap:"10px", marginLeft:"80px",color:"white"}} >
                    <div>
                    <a className="navbar-brand" href="#">
                    <img src="https://www.jefit.com/wp/wp-content/uploads/2017/07/cropped-logo_155_40_white-150x40.webp" alt="" style={{maxWidth:"120px"}} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div>
                    <li className="nav-item dropdown navbar-nav">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                                    Get Jefit App
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Workout App(iOS)</a></li>
                                    <li><a className="dropdown-item" href="#">Workout App(Android)</a></li>
                                </ul>
                            </li> 
                            
                    </div>
                    <div>
                    <li className="nav-item dropdown navbar-nav">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
                                    Workout Plans
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Pro-designed Plans</a></li>
                                    <li><a className="dropdown-item" href="#">Create My Plans</a></li>
                                </ul>
                            </li> 
                            
                    </div>
                    <div>
                        <p className="nav-item navbar-nav">Excercise Guide</p>
                    </div>
                    <div>
                        <p className="nav-item navbar-nav">Blog</p>
                    </div>
                    <div>
                        <p className="nav-item navbar-nav">Coach</p>
                    </div>
                    <div>
                        <p className="nav-item navbar-nav">Elite</p>
                    </div>
                    <div>
                        <p className="nav-item navbar-nav">Login</p>
                    </div>
                    <div>
                        <button className='btn' style={{borderRadius:"5px",width:"120px",height:"35px",color:"#257cff", backgroundColor:"white", marginBottom:"5px"}}>Signup</button>
                    </div>
                    {/* <div className="collapse navbar-collapse" style={{display:"flex", justifyContent:"space-between"}} id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar