import image6 from '../assets/image/image6.png';
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
const About = () =>{
return(
<>
<div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h4 className="hero-heading">CHITRANJAN PATEL</h4>
          <p className="hero-para">
            I'm  A Full stack Developer freelancer. A Full
            stack Developer, youtuber and freelancer.
          </p>  
        </div>
 {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image6} alt="hero image" className="hero-img " />
          </picture>
        </div>  
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
 integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</>
)
}
export default About;