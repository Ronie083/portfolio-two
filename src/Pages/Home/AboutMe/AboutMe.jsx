import myImg from '../../../assets/20230415_194618.jpg'

const AboutMe = () => {


    const handleDownloadResume = () => {
        const cvUrl = '/Muhammad Amzad Hosen - Resume - MERN dev.pdf';
        const anchor = document.createElement('a');
        anchor.href = cvUrl;
        anchor.download = '/Muhammad Amzad Hosen - Resume - MERN dev.pdf';
        anchor.click();
      };

      
    return (
        <div className="text-center max-w-7xl mx-auto pt-20" id='about'>
            <h1 className="text-4xl font-semibold">Know Me More</h1>
            <hr/>
            <div className="grid md:grid-cols-4 justify-items-center mt-10">
                <div className="md:text-left col-span-3">
                    <div className='flex flex-col md:flex-row items-center my-5'>
                        <img className='rounded-3xl w-72 mr-3' src={myImg} alt="" />
                        <h2 className="text-2xl font-extrabold">I&apos;m <br /> <span className="font-medium text-[#388087]">Muhammad Amzad Hosen</span>, <br /> an MERN <br /> Stack Web Developer</h2>
                    </div>
                    <p>
                        Junior MERN developer with a passion for developing excellent user experiences. <br /> Experienced with React, Redux, Node.js, and Express. Dedicated to <br /> delivering high-quality code and always looking for new challenges. Let&apos;s <br /> work together to create amazing digital experiences.
                    </p>
                </div>
                <div className="text-left max-w-5xl p-5 mt-10 md:mt-0">
                    <p><span className="font-bold">Name:</span> Muhammad Amzad Hosen</p>
                    <hr id='horiLine' />
                    <p><span className="font-bold">Email:</span> ahmedronie6@gmail.com</p>
                    <hr id='horiLine' />
                    <p><span className="font-bold">Age:</span> 23</p>
                    <hr id='horiLine' />
                    <p><span className="font-bold">From:</span> Chittagong, Bangladesh</p>
                    <hr id='horiLine' />
                    <p><span className="font-bold">Study:</span> Bachelor of Science in Computer Science & Engineering(Running)</p>
                    <button className="btn btn-outline border-[#388087] rounded-3xl mt-5" onClick={handleDownloadResume}>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;