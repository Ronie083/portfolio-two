

const Expertise = () => {


    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl ml-3 mt-10">I can help you with . . .</h1>
            <div className="md:flex justify-between">
                <div className="card w-96 p-3">
                    <p className="text-lg">01 <hr /></p>
                    <div className="card-body p-0">
                        <h2 className="card-title text-2xl my-8">Web Design</h2>
                        <p>Experience the potential of my expertise in HTML, CSS, JavaScript, and CSS frameworks. I create visually captivating websites that engage visitors, combining artistic design with seamless functionality. Let&apos;s unlock your online presence together!
                        </p>
                    </div>
                </div>
                <div className="card w-96 p-3">
                    <p className="text-lg">02 <hr /></p>
                    <div className="card-body p-0">
                        <h2 className="card-title text-2xl my-8">MERN Development</h2>
                        <p>Unleash the MERN stack&apos;s full potential with my expertise! From MongoDB and Express.js to React and Node.js, I&apos;ll create powerful and scalable web applications. I&apos;ll design efficient databases, develop seamless APIs, and build captivating user interfaces with fast server-side performance.
                        </p>
                    </div>
                </div>
                <div className="card w-96 p-3">
                    <p className="text-lg">03 <hr /></p>
                    <div className="card-body p-0">
                        <h2 className="card-title text-2xl my-8">The Full Package</h2>
                        <p>Level up your development process with my expertise in GitHub, VS Code, and web hosting. I create elegant and efficient code using powerful features and customized workflows through plugins. With reliable web hosting, your initiatives shine online—secure, accessible, and high-performing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;