import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CARD_IMG } from '../config';
export default function Cards({ shows }) {
    console.log("Card...", shows)
    const ShowSlider = shows.map((show) => {
        return (
        <Link to={`details/${show.id}`} key={show.id} >
            <div className='py-5 px-5 flex items-center justify-center transform transition duration-400 hover:scale-110 hover:ease-in-out ' >
                <img src={show ? `${CARD_IMG}${show?.poster_path}` : ''} alt="poster" className='w-60' />
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
    <div className='md:px-4 bg-black bg-blend-darken font-serif'>
        <h1 className='text-white text-4xl '>Trending Shows</h1>
        <Carousel responsive={responsive} infinite={true}  >
            {ShowSlider}
        </Carousel>
    </div>
);
}
