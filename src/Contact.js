// import './Contact.css';

// export default function Contact(){

//     function handleSubmit(e){
//         e.preventDefault();
//     }

//     return (
//         <div id="Contact">
//             <h1 id="contact-title">Get In Touch</h1>
//             <p id="contact-desc">Hey! I am looking forward to start a project with you! Drop me a message and expect a reply in no time!</p>
//             <form action="http://localhost:8000/src/server.php" method="post" id="contact-form">
//                 <input type="text" id="name" name="name" placeholder="ENTER YOUR NAME*" required></input>
//                 <input type="email" id="email" name="email" placeholder="ENTER YOUR EMAIL*" required></input>
//                 <textarea type="message" id="message" name="message" placeholder="ENTER YOUR MESSAGE*" required></textarea>
//                 <input onSubmit={event=>handleSubmit(event)}type="submit" id="submit"></input>
//             </form>
//         </div>
//     )
// }
import {useState} from 'react'
import $ from "jquery";
import "./Contact.css";
 
export default function Contact() {
    //const [name, setName] = useState("");
    const [result, setResult] = useState("");
 
    //const handleChange = (e) => {
    //    setName(e.target.value);
    //};
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };
 
    return (
        <div id="Contact">
            <h1 id="contact-title">Get In Touch</h1>
            <p id="contact-desc">Hey! I am looking forward to start a project with you! Drop me a message and expect a reply in no time!</p>
            <form
                action="http://localhost:8000/src/server.php"
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <input
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="ENTER YOUR NAME*" 
                    required
                    //value={name}
                    //onChange={(event) =>
                    //    handleChange(event)
                    //}
                />
                <input
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="ENTER YOUR EMAIL*" 
                    required
                />
                <input
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="ENTER YOUR SUBJECT*" 
                    required
                />
                <textarea
                    id="message" 
                    name="message" 
                    placeholder="ENTER YOUR MESSAGE*" 
                    required
                />
                <br />
                <input type="submit" id="submit"></input>
            </form>
            <h1>{result}</h1>
        </div>
    );
}