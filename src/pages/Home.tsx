import "../style/Home.css";

const Hero= () => {
 return (
   <section id="hero" className="hero section">
     <div className="hero-content">
     <div className="hero-text">
          <h1>Hello, I'm <span>Sarah</span></h1>
          <p>Fullstack Developer | I bring ideas to life through code</p>
          {/* <a href="#projects" className="btn">View My Work</a> */}
        </div>
        <div className="hero-image">
          <img src="/fina.jpg" alt="img" />
       </div>
       </div>
    </section>
  );
};

export default Hero;