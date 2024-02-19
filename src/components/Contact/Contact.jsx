import './contact.css'

const Contact = () =>{

return(
    <section id='contact' className='section contact section-padding'>
        <div className='container'>
    <h3>Get In Touch</h3>
    <p> Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
<div className="form-wrapper">
    <form action="">
        <input type="text" name='name' placeholder='Name' />
        <input type="text" name='email' placeholder='Email' />
        <textarea name="message" id="" cols="30" rows="10" placeholder='message'></textarea>
    </form>
    </div>
    </div>
    </section>
)

}

export default Contact
