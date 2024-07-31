import './Projects.css'
import clonebook from './img/clonebook screenshot.png'
import splendid from './img/splendid food screenshot.png'

export default function Projects(){
    return (
        <div id="Projects">
            <h1 id="projects-title">Projects</h1>
            <p id="projects-desc">Checkout some of my recent projects!</p>
            <div id="splendidFood">
                <a href="https://product-and-cart.vercel.app/" target='_blank'>
                    <img src={splendid}></img>
                    <h3>Splendid Food</h3>
                    <p>
                        This is a grocery shopping page. 
                        It will recommend popular items on homepage and all of the products on product page.
                        Every item added to cart will be correctly reflected on the cart with the quantity and total amount shown.
                    </p>
                </a>
            </div>
            <div id="cloneBook">
                <a href="https://clonebook-iota.vercel.app/" target='_blank'>
                    <img src={clonebook}></img>
                    <h3>CloneBook</h3>
                    <p>
                        In this project, I am trying to make a clone of a social networking page.
                        User will need to register themselves and login to be able to view the content.
                        User will also be able to change their profile picture, create new post, and view posts created by other users.
                    </p>
                </a>
            </div>
        </div>
    )
}