import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'; // นำเข้า Link
import 'swiper/css';


const images = [
    {
        id: 1,
        src: 'https://s.isanook.com/tr/0/ud/282/1414009/2-6.jpg?ip/resize/w728/q80/jpg',
    },
    {
        id: 2,
        src: 'https://s.isanook.com/tr/0/ud/282/1414009/6-6.jpg?ip/resize/w728/q80/jpg',
    },
    {
        id: 3,
        src: 'https://s.isanook.com/tr/0/ud/282/1414009/4-6.jpg?ip/resize/w728/q80/jpg',
    },
];

const products = [
    {
        id: 1,
        name: 'อุทยานแห่งชาติดอยผ้าห่มปก',
        href: '#',
        imageSrc: 'https://www.uptomego.com/wp-content/uploads/2022/09/%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B9%88%E0%B8%A1%E0%B8%9B%E0%B8%81-20.jpg',
    },
    {
        id: 2,
        name: 'อุทยานแห่งชาติดอยสุเทพ-ปุย',
        href: '#',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Thanon_Thong_Chai_Range_-_WCM5535.jpg/640px-Thanon_Thong_Chai_Range_-_WCM5535.jpg',
    },
    {
        id: 3,
        name: 'อุทยานแห่งชาติดอยอินทนนท์',
        href: '#',
        imageSrc: 'https://s.isanook.com/tr/0/ud/282/1412729/4-3_1.jpg?ip/crop/w670h402/q80/jpg',
    },
    {
        id: 4,
        name: 'อุทยานแห่งชาติออบหลวง',
        href: '#',
        imageSrc: 'https://s.isanook.com/tr/0/ud/282/1410253/30706585_1686010058146944_581.jpg?ip/resize/w728/q80/jpg',
    },
    {
        id: 5,
        name: 'อุทยานแห่งชาติห้วยน้ำดัง',
        href: '#',
        imageSrc: 'https://cms.dmpcdn.com/travel/2020/08/20/facdd9d0-e2a4-11ea-ab6f-87175d61da00_original.jpg',
    },
    {
        id: 6,
        name: 'อุทยานแห่งชาติขุนขาน',
        href: '#',
        imageSrc: 'https://cdn.chiangmainews.co.th/wp-content/uploads/2018/11/06172603/1703734.jpg',
    },
    {
        id: 7,
        name: 'อุทยานแห่งชาติผาแดง',
        href: '#',
        imageSrc: 'https://cms.dmpcdn.com/travel/2020/12/20/3e9ac3b0-42a1-11eb-80e3-2fbf2839b261_original.jpg',
    },
    {
        id: 8,
        name: 'อุทยานแห่งชาติศรีลานนา',
        href: '#',
        imageSrc: 'https://i.ytimg.com/vi/qGTXXMv9b9I/maxresdefault.jpg',
    },
    {
        id: 9,
        name: 'อุทยานแห่งชาติแม่ตะไคร้',
        href: '#',
        imageSrc: 'https://www.atchiangmai.co/wp-content/uploads/2017/05/mae-takrai-national-park.jpg',
    },
    {
        id: 10,
        name: 'อุทยานแห่งชาติแม่วาง',
        href: '#',
        imageSrc: 'https://www.thailandtravel.app/media/img/qMOfYIoxC3BqbAxF0TCBXGQG9f8xDJOs.jpg',
    },
    // More products...
];

export default function Example() {
    return (
        <div className="bg-black">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 id="highlights" className="text-3xl font-bold text-center text-white mb-12">Highlights</h2>

                {/* Swiper Slider */}
                <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="w-full overflow-hidden rounded-lg bg-gray-200">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full object-cover object-center"
                                    style={{ height: '500px' }} // กำหนดความสูงของรูปภาพที่นี่
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Grid of products */}
                <h2 id="#" className="text-2xl font-bold  text-white mb-8 mt-12">อุทยานแห่งชาติจังหวัดเชียงใหม่</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-12">

                    {products.map((product) => (
                        <Link key={product.id} to={`/detail/${product.id}`} className="group">
                            {/* ปรับ aspect ratio ให้รูปภาพเป็นสี่เหลี่ยมจัตุรัส */}
                            <div className="w-full h-56 overflow-hidden rounded-lg bg-gray-200">
                                <img
                                    alt={product.name}
                                    src={product.imageSrc}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-md text-white">{product.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>

        </div>

    );
}
