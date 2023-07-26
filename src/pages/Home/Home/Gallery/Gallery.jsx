

const Gallery = () => {
    return (
        <div className="w-11/12 mx-auto text-white py-10">
            <div className="grid md:grid-cols-2 gap-6 justify-between">
                <div className="">
                    <h2 className="text-3xl font-bold mb-4 text-center text-[#59dae9]">Gallery</h2>
                    <p className="text-justify text-lg font-semibold">Immerse yourself in the captivating world of dance through our stunning gallery. Explore mesmerizing performances, graceful movements, and vibrant costumes captured in vivid detail. From powerful leaps and expressive gestures to the joyous energy of group routines, our gallery showcases the artistry and passion of our talented dancers. Get inspired, feel the rhythm, and experience the beauty of dance through our carefully curated collection of captivating moments. Step into our gallery and let the images transport you to a world where movement becomes an exquisite form of expression.</p>
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="grid md:grid-cols-3 gap-4">
                    <img src="https://img.freepik.com/free-photo/boys-gaming_23-2148141556.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-photo/happy-little-kid-smiling-while-talking-with-his-online-music-teacher-caucasian-boy-having-video-call-learn-play-acoustic-guitar_662251-1629.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-photo/little-girl-learns-play-guitar-with-help-video-lesson_169016-28087.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-photo/latin-girl-with-headphones-listening-her-online-music-lessons-artistic-kid-playing-acoustic-guitar-learning-chords_662251-1427.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-photo/young-boy-following-instructions-music-teacher-learning-play-piano-caucasian-kid-taking-art-lessons-online-video-call_662251-1574.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-photo/practicing-my-music-lessons-cute-happy-boy-recording-song-with-microphone-his-singing-classes_662251-1549.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-photo/i-love-playing-piano-portrait-caucasian-boy-smiling-making-eye-contact-while-playing-piano-living-room_662251-1562.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-photo/pretty-preteen-girl-following-instructions-her-music-teacher-learning-play-piano-hispanic-girl-taking-art-lessons-online-video-call_662251-1390.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-photo/young-american-boy-near-dj-controller-concept-djing_181624-46499.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Gallery;