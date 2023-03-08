import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CARD_IMG } from '../config';
export default function Cards({ media,title }) {
    console.log("Card...", media)
    const ShowSlider = media.map((content) => {
        return (
        <Link to={`details/${content.id}`} key={content.id} >
            <div className='py-5 px-5 flex items-center justify-center transform transition duration-400 hover:scale-110 hover:ease-in-out ' >
                <img src={content ? `${CARD_IMG}${content?.poster_path}` : ''} alt="poster" className='w-60' />
            </div>
        </Link >
     
        );
});
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
return (
    <div className='md:px-4 bg-black bg-blend-darken font-body'>
        {
            title ? (
                <h1 className='text-white text-4xl font-semibold'>Trending</h1>
            ): ''
        }
        <Carousel responsive={responsive} infinite={true}  >
            {ShowSlider}
        </Carousel>
    </div>
);
}
