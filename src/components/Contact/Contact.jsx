import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section contact section-padding">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>
          Looking to explore job opportunities or collaborate? Feel free to
          reach out to me via email at <a href="mailto:hristovski15@gmail.com" target="_blank" rel="noreferrer">hristovski15@gmail.com</a>. I'm excited to
          hear from you!
        </p>
{/*
        <div className="form-wrapper">
          <form action="">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="message"
            ></textarea>
          </form>
        </div>
  */}
      </div>
    </section>
  );
};

export default Contact;
