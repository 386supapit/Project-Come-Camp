// BookingAndReceipt.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarComponent = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        setStartDate(date);
        onDateChange(date);
    };

    return (
        <div className="bg-white text-black p-4 rounded-lg shadow-lg transition-shadow duration-200 hover:shadow-xl mb-4">
            <h2 className="text-lg font-bold mb-3">เลือกวัน:</h2>
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
};

const RegistrationForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        contactPerson: '',
        contactPhone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg transition-shadow duration-200 hover:shadow-xl mb-4">
            <h2 className="text-lg font-bold mb-3 text-black">กรอกข้อมูล</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="sm:col-span-2 text-black">
                        <label htmlFor={key} className="block text-sm font-semibold text-black">
                            {key === 'firstName' ? 'ชื่อ' : key === 'lastName' ? 'นามสกุล' : key === 'email' ? 'อีเมล' : key === 'phoneNumber' ? 'เบอร์โทร' : key === 'contactPerson' ? 'บุคคลที่ติดต่อได้' : 'เบอร์โทรศัพท์ของบุคคลที่ติดต่อได้'}
                        </label>
                        <input
                            id={key}
                            name={key}
                            type={key.includes('phone') ? 'tel' : key === 'email' ? 'email' : 'text'}
                            value={formData[key]}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <div className="flex justify-center sm:col-span-2">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200"
                    >
                        บันทึกข้อมูล
                    </button>
                </div>
            </form>
        </div>
    );
};

const RentalItems = ({ onUpdate, cartItems, setCartItems }) => {
    const rentalItems = [
        { id: 1, name: 'เต็นท์ขนาด 3 คน', price: 225 },
        { id: 2, name: 'เต็นท์ขนาด 2 คน', price: 150 },
        { id: 3, name: 'ถุงนอน', price: 30 },
        { id: 4, name: 'ผ้าห่ม', price: 20 },
        { id: 5, name: 'แผ่นรองนอน', price: 20 },
        { id: 6, name: 'เสื่อ', price: 10 },
        { id: 7, name: 'หมอน', price: 40 },
        { id: 8, name: 'ผ้าใบ', price: 40 },
    ];

    const handleAddToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
        onUpdate((prevTotal) => prevTotal + item.price); // Update total
    };

    const handleRemoveFromCart = (item) => {
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
        onUpdate((prevTotal) => prevTotal - item.price); // Update total
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg transition-shadow duration-200 hover:shadow-xl">
            <h2 className="text-lg font-bold mb-3 text-black">เลือกอุปกรณ์เสริม</h2>
            {rentalItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                    {!cartItems.some((cartItem) => cartItem.id === item.id) ? (
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="bg-lime-500 hover:bg-lime-700 text-white py-1 px-2 rounded shadow transition duration-200"
                        >
                            เพิ่ม {item.name} - {item.price} บาท
                        </button>
                    ) : (
                        <button
                            onClick={() => handleRemoveFromCart(item)}
                            className="bg-red-500 hover:bg-red-400 text-white py-1 px-2 rounded shadow transition duration-200"
                        >
                            ลบ {item.name}
                        </button>
                    )}
                </div>
            ))}

            <div className="mt-4 bg-gray-300 p-2 rounded-lg text-black">
                <h3 className="text-lg font-semibold mb-1">รายการในตะกร้า:</h3>
                {cartItems.length === 0 ? (
                    <p>ตะกร้าว่าง</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between">
                            <span>{item.name}</span>
                            <span>{item.price} บาท</span>
                        </div>
                    ))
                )}
                <div className="mt-1 font-bold">
                    <span>จำนวนรายการในตะกร้า: {cartItems.length}</span>
                </div>
            </div>
        </div>
    );
};

const BookingAndReceipt = () => {
    const [total, setTotal] = useState(0);
    const [formData, setFormData] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();

    const handleConfirmBooking = () => {
        if (!formData) {
            alert("กรุณากรอกข้อมูลในฟอร์มลงทะเบียนให้ครบถ้วนก่อนยืนยันการจอง");
            return;
        }

        navigate('/receipt', {
            state: {
                formData,
                selectedDate,
                total,
                cartItems,
            },
        });
    };

    const handleFormSubmit = (data) => {
        setFormData(data);
    };

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">จองพื้นที่สำหรับกางเต็นท์</h1>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="flex-1">
                    {/* Combined Calendar and RegistrationForm in the same column */}
                    <CalendarComponent onDateChange={setSelectedDate} />
                    <RegistrationForm onSubmit={handleFormSubmit} />
                </div>
                <div className="flex-1">
                    <RentalItems onUpdate={setTotal} cartItems={cartItems} setCartItems={setCartItems} />
                </div>
            </div>
            <div className="flex justify mt-4">
                <button
                    onClick={handleConfirmBooking}
                    className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200"
                >
                    ยืนยันการจอง
                </button>
            </div>

            {formData && (
                <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-2">ใบเสร็จ</h2>
                    <p>ชื่อ: {formData.firstName} {formData.lastName}</p>
                    <p>อีเมล: {formData.email}</p>
                    <p>เบอร์โทร: {formData.phoneNumber}</p>
                    <p>วันที่จอง: {selectedDate ? selectedDate.toLocaleDateString() : 'ไม่ระบุ'}</p>
                    <p>ยอดรวม: {total} บาท</p>
                </div>
            )}
        </div>
    );
};

export default BookingAndReceipt;
