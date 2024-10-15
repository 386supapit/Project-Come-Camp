import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[url('https://media.istockphoto.com/id/1493141172/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A1%E0%B8%B8%E0%B8%A1%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%9A%E0%B8%99%E0%B8%A5%E0%B8%87%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B8%AA%E0%B8%B2%E0%B8%9A-sirinyazi-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%95%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B5.jpg?s=1024x1024&w=is&k=20&c=2iosUjh6ZObWpicdQ6DjJfpn4mKV34m93v0j_v0g2x8=')] bg-cover bg-center min-h-[200px]"> {/* กำหนดความสูงขั้นต่ำที่นี่ */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 id="contact" className="text-lg font-bold text-lime-500 mt-8">เกี่ยวกับเรา</h2>
                        <p className="text-white mt-2">
                            อุทยานแห่งชาติเป็นสถานที่ท่องเที่ยวที่สวยงาม พร้อมให้บริการนักท่องเที่ยวที่ต้องการสัมผัสธรรมชาติและการผจญภัย.
                        </p>
                    </div>
                    <div className="mb-8 md:mb-0 mt-8">
                        <h2 className="text-lg font-bold text-lime-500">ลิงก์ที่น่าสนใจ</h2>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a href="https://www.uptomego.com/doi-phahompok/" className="text-white hover:text-lime-200">ทริปเดินป่า</a>
                            </li>
                            <li>
                                <a href="https://travel.trueid.net/detail/BWv1oZ44PwAV" className="text-white hover:text-lime-200">จุดชมวิว</a>
                            </li>
                            <li>
                                <a href="https://travel.trueid.net/detail/mMbxAEO0W0N7" className="text-white hover:text-lime-200">ที่เที่ยวเชียงใหม่</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
