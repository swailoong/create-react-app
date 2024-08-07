import './styles/Projects.css'
import clonebook from './img/clonebook screenshot.png'
import splendid from './img/splendid food screenshot.png'
import github from './img/github.png'

export default function Projects(){
    return (
        <div id="Projects">
            <h1 id="projects-title">Projects</h1>
            <p id="projects-desc">Checkout some of my recent projects!</p>
            <div id="splendidFood">
                <a href="https://product-and-cart.vercel.app/" target='_blank'>
                    <img id="splendid-img" class="project-img" src={splendid}></img>
                    <h3 class="project-title">Splendid Food</h3></a>
                    <p class="project-desc">
                        This is a grocery shopping page. 
                        It will recommend popular items on homepage and all of the products on product page.
                        Every item added to cart will be correctly reflected on the cart with the quantity and total amount shown.
                    </p>
                    <img width="20px" src={github}></img>
                    <a href="https://github.com/swailoong/product-and-cart">git hub repository</a>
                
            </div>
            <div id="cloneBook">
                <a href="https://clonebook-iota.vercel.app/" target='_blank'>
                    <img id="clonebook-img" class="project-img" src={clonebook}></img>
                    <h3>CloneBook</h3></a>
                    <p class="project-desc">
                        In this project, I am trying to make a clone of a social networking page.
                        User will need to register themselves and login to be able to view the content.
                        User will also be able to change their profile picture, create new post, and view posts created by other users.
                    </p>
                    <img width="20px" src={github}></img>
                    <a href="https://github.com/swailoong/clonebook">git hub repository</a>
                
            </div>
        </div>
    )
}