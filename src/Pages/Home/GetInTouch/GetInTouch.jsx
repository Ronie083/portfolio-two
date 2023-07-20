

const GetInTouch = () => {
    return (
        <div className="mt-20 grid grid-cols-6 gap-4">
            <div className="grid justify-items-center col-start-2 col-span-3">
                <h1 className="text-4xl md:text-5xl mb-10">For any enquires or <br /> get in touch with me . . .</h1>
            </div>
            <div className="my-10 col-start-3 md:col-start-4 md:col-end-8">
                <h2>Mail</h2>
                <p className="text-lg font-extrabold my-3">ahmedronie6@gmail.com</p>
            </div>
            <div className="my-10 col-start-3 md:col-start-4 col-end-6">
                <h2>Socials</h2>
                <ul className="font-extrabold text-lg my-3">
                    <li><a href="https://www.facebook.com/amzadhosen.ronie?mibextid=ZbWKwL">Facebook</a></li>
                    <li><a href="www.linkedin.com/in/amzad-hosen-ronie-93ba0a160">LinkedIn</a></li>
                    <li><a href="https://wa.me/+8801515223812">WhatsApp</a></li>
                </ul>
            </div>
            <div className="col-start-3 md:col-start-4 col-end-6">
                <h2>Wanna talk?</h2>
            </div>
            <div className="col-start-1 grid justify-items-center col-end-7">
                <h1 className="text-5xl md:text-9xl my-3">+880 1515 223812</h1>
            </div>
            <div className="col-start-3 md:col-start-4 col-end-7">
                <h1 className="text-3xl md:text-5xl my-3">+880 1329 554425</h1>
            </div>
            <div className="my-10 col-start-3 md:col-start-4 col-end-6">
                <h2>Address</h2>
                <p className="text-lg font-extrabold my-3">Chittagong, Bangladesh</p>
            </div>
        </div>
    );
};

export default GetInTouch;