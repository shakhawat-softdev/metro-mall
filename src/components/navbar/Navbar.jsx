import './Navbar.css';
import { MdLocalOffer } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GrCatalog } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { MdRoundaboutRight } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <>
            <div className="superNav border-bottom py-2 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
                            <select className="me-3 border-0 bg-light">
                                <option value="en-us">Metro Mall</option>
                            </select>
                            <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3"><strong>metromall@somedomain.com</strong></span>
                            <span className="me-3"> <strong>1-800-123-1234</strong></span>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
                            <span className="me-3">
                                <Link>
                                    <span className="text-muted" href="#">Shipping</span>
                                </Link>
                            </span>
                            <span className="me-3">
                                <Link>
                                    <span className="text-muted" href="#">Policy</span>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light shadow-sm">

                <div className="flex flex-column w-100" id='navigation'>

                    <div className='d-flex w-100 mb-2 customizeContainer'>
                        <Link className='navItemStyle'>
                            <span className="navbar-brand navItemStyle" href="#">
                                <strong className='text-decoration-none'>Metro Mall</strong>
                            </span>
                        </Link>

                        <div className="d-none d-lg-block w-100" >
                            <div className="input-group mx-auto w-75">
                                <input type="text" className="form-control border-warning " style={{ color: "#7a7a7a", width: "50% !important" }} />
                                <button className="btn btn-warning text-white">Search</button>
                            </div>
                        </div>

                        <ul className="navbar-nav d-flex justify-content-center align-items-center gap-4">
                            <li className="nav-item">
                                <Link className='navItemStyle'>
                                    <span className="nav-link  text-uppercase d-flex justify-content-center align-items-center gap-1 navItemStyle" href="#"><BsCart2 />Cart</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navItemStyle'>
                                    <span className="nav-link text-uppercase d-flex justify-content-center align-items-center gap-1 p-0 navItemStyle" href="#"><VscAccount />Account</span>
                                </Link>
                            </li>
                        </ul>

                    </div>


                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
                            <div className="input-group">
                                <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                                <input type="text" className="form-control border-warning" style={{ color: "#7a7a7a" }} />

                                <button className="btn btn-warning text-white">Search</button>
                            </div>
                        </div>

                        <ul id="navItems" className="navbar-nav mx-auto container" >

                            <li className="nav-item">
                                <Link className='navItemStyle'>
                                    <span href="#shopItems" className="nav-link mx-2 text-uppercase d-flex justify-content-center align-items-center gap-1 navItemStyle"><MdProductionQuantityLimits />Today's Deals</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navItemStyle'>
                                    <span className="nav-link mx-2 text-uppercase d-flex justify-content-center align-items-center gap-1 navItemStyle"><GrCatalog />Catalog</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navItemStyle'>
                                    <span className="nav-link mx-2 text-uppercase d-flex justify-content-center align-items-center gap-1 navItemStyle" ><MdLocalOffer />Offers</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navItemStyle'>
                                    <span className="nav-link mx-2 text-uppercase d-flex justify-content-center align-items-center gap-1" href="#"><MdDesignServices />Services</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='navItemStyle'>
                                    <span className="nav-link mx-2 text-uppercase d-flex justify-content-center align-items-center gap-1 navItemStyle " href="#"><MdRoundaboutRight />Gift Card</span>
                                </Link>
                            </li>
                        </ul>

                    </div>

                </div>

            </nav>

        </>
    );
};

export default Navbar;