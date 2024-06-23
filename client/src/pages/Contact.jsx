import '../pages/contactstyle.css';
const Contact = () =>{
return(
<>
<div className="contanier-info">
<div className="contact-box">
<div className="left">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95106615534!2d76.76355477113817!3d28.644287345100643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1711554045357!5m2!1sen!2sin"  style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<div className="right">
<h3>Contact Me</h3>
<input type="text"className="flied" placeholder="Enter your Name"/>
<input type="text" className="flied"placeholder="Enter your Email"/>
<input type="text" className="flied"placeholder="Enter your Phone"/>
<textarea   placeholder="Messages" className="flied"></textarea>
<button className="left-parimay">Send</button>
</div>
</div>
</div>
</>
)
}
export default Contact;