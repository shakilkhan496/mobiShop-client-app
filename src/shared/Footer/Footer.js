import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div>
            <footer className="footer grid-rows-2 p-10 text-white bg-gradient-to-r  bg-primary from-transparent to-secondary">
                <div>
                    <Link to='/' className="btn btn-ghost normal-case font-mono text-3xl"><span className='pr-2 text-2xl'><FontAwesomeIcon icon={faMobile} /></span> <span> MobiShop</span></Link>
                </div>
                <div>
                    <span className="text-2xl text-white font-bold">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="text-2xl text-white font-bold">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="text-2xl text-white font-bold">Social</span>
                    <Link className="link link-hover">Twitter</Link>
                    <Link className="link link-hover">Instagram</Link>
                    <Link className="link link-hover">Facebook</Link>
                    <Link className="link link-hover">Github</Link>
                </div>
                <div>
                    <span className="text-2xl text-white font-bold">Explore</span>
                    <Link className="link link-hover">Features</Link>
                    <Link className="link link-hover">Enterprise</Link>
                    <Link className="link link-hover">Security</Link>
                    <Link className="link link-hover">Pricing</Link>
                </div>
                <div>
                    <span className="text-2xl text-white font-bold">Apps</span>
                    <Link className="link link-hover">Mac</Link>
                    <Link className="link link-hover">Windows</Link>
                    <Link className="link link-hover">iPhone</Link>
                    <Link className="link link-hover">Android</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;