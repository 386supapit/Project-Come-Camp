import { useLocation } from 'react-router-dom';

const Receipt = () => {
    const location = useLocation();
    const { formData, selectedDate, total, selectedPeople, cartItems } = location.state || {};

    return (
        <div className="min-h-screen bg-black text-white p-10">
            <div className="max-w-3xl mx-auto bg-white text-black p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-lime-500 mb-8">ใบเสร็จการจอง</h1>
                {formData && (
                    <div className="flex flex-col items-center">
                        <div className="space-y-2 mb-4 text-center">
                            <p><strong>ชื่อ:</strong> {formData.firstName} {formData.lastName}</p>
                            <p><strong>อีเมล:</strong> {formData.email}</p>
                            <p><strong>เบอร์โทร:</strong> {formData.phoneNumber}</p>
                            <p><strong>วันจอง:</strong> {selectedDate ? selectedDate.toLocaleDateString() : 'ยังไม่เลือกวัน'}</p>
                            <p><strong>จำนวนคน:</strong> {selectedPeople || 'ไม่ระบุ'}</p>
                        </div>

                        {/* ส่วนที่แสดงรายการที่จอง */}
                        <div className="mt-6 text-center">
                            <h2 className="text-2xl font-semibold mb-4">รายการที่จอง:</h2>
                            {cartItems && cartItems.length > 0 ? (
                                <ul className="list-disc list-inside">
                                    {cartItems.map((item, index) => (
                                        <li key={index} className="flex justify-between mb-2">
                                            <strong>{item.name}</strong>
                                            <span>{item.price} บาท</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>ไม่มีรายการสินค้าในตะกร้า</p>
                            )}
                        </div>

                        {/* ยอดรวม */}
                        <div className="mt-4 font-bold text-lg text-center">
                            <p><strong>ยอดรวม:</strong> {total} บาท</p>
                        </div>

                        <p className="mt-4 text-center">
                            หมายเหตุ : ชำระเงินค่าบำรุง และ ค่าอุปกรณ์เสริมได้ที่หน้าเคาน์เตอร์อุทยาน
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Receipt;
