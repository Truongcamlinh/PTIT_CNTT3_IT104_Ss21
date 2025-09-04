import React from 'react';

interface Employee {
    id: string;
    name: string;
    dob: string;
    gender: string;
    email: string;
    address: string;
    phone: string;
}

const mockEmployees: Employee[] = [
    {
        id: '1',
        name: 'Nguyễn Văn A',
        dob: '01/01/1990',
        gender: 'Nam',
        email: 'a.nguyen@example.com',
        address: '123 Đường ABC, Quận 1, TPHCM',
        phone: '0909123456'
    },
    {
        id: '2',
        name: 'Trần Thị B',
        dob: '12/12/1995',
        gender: 'Nữ',
        email: 'b.tran@example.com',
        address: '456 Đường XYZ, Quận 3, TPHCM',
        phone: '0987654321'
    },
    {
        id: '3',
        name: 'Lê Minh C',
        dob: '05/06/1988',
        gender: 'Nam',
        email: 'c.le@example.com',
        address: '789 Đường DEF, Quận 10, TPHCM',
        phone: '0912345678'
    }
];

const Sidebar = () => (
    <aside className="w-56 bg-[#081529] text-gray-200 flex flex-col">
        <div className="px-4 py-5 text-lg font-semibold tracking-wide">HR Admin</div>
        <nav className="flex-1 text-sm">
            <ul>
                <li className="px-4 py-2 bg-[#0d2242] rounded-r-full font-medium">Tổng quan</li>
                <li className="px-4 py-2 hover:bg-[#112b52] cursor-pointer">Quản lý tiền lương</li>
                <li className="px-4 py-2 hover:bg-[#112b52] cursor-pointer">Quản lý nhân sự</li>
                <li className="px-4 py-2 hover:bg-[#112b52] cursor-pointer">Quản lý đào tạo</li>
                <li className="px-4 py-2 hover:bg-[#112b52] cursor-pointer">Quản lý tài liệu</li>
            </ul>
        </nav>
        <div className="p-4 text-[11px] text-center text-gray-400 border-t border-white/5">
            ©2025 Rikkei Education
        </div>
    </aside>
);

const TopBar = () => (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center gap-4 px-4 justify-between">
        <div className='flex'> 
            <button className="p-2 rounded hover:bg-gray-100" aria-label="Menu">
            <span className="block w-5 h-[2px] bg-gray-600 mb-1" />
            <span className="block w-5 h-[2px] bg-gray-600 mb-1" />
            <span className="block w-5 h-[2px] bg-gray-600" />
            </button>
            <div className="flex-1 max-w-md">
                <input
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nhập từ khóa tìm kiếm"
                />
            </div>
        </div>
        <div className="flex items-center gap-4">
            <button className="relative p-2 rounded hover:bg-gray-100" aria-label="Thông báo">
                <span className="block w-5 h-5 text-gray-500">🔔</span>
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] px-1 rounded-full">3</span>
            </button>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-medium">
                    U
                </div>
                <span className="text-sm font-medium text-gray-700 hidden md:block">User</span>
            </div>
        </div>
    </header>
);

const Breadcrumb = () => (
    <nav className="text-xs text-gray-500 mb-4">
        <span>Quản lý nhân sự</span>
        <span className="mx-2">/</span>
        <span>Quản lý nhân viên</span>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">Danh sách nhân viên</span>
    </nav>
);

const EmployeeTable = () => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between p-4">
                <h3 className="text-base font-semibold">Nhân viên</h3>
                <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                    <div className="relative">
                        <input
                            placeholder="Tìm kiếm nhân viên theo tên"
                            className="border border-gray-300 rounded-md pl-9 pr-3 py-1.5 text-sm w-72 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
                    </div>
                    <button
                        className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-500 transition"
                    >
                        Thêm mới nhân viên
                    </button>
                    <button
                        className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
                        aria-label="Refresh"
                    >
                        ⟳
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-gray-50 text-gray-600 border-y">
                            <th className="py-2.5 px-3 text-left w-10">
                                <input type="checkbox" className="accent-blue-600" />
                            </th>
                            <th className="py-2.5 px-3 text-left font-medium">Họ và tên</th>
                            <th className="py-2.5 px-3 text-left font-medium">Ngày sinh</th>
                            <th className="py-2.5 px-3 text-left font-medium">Giới tính</th>
                            <th className="py-2.5 px-3 text-left font-medium">Email</th>
                            <th className="py-2.5 px-3 text-left font-medium">Địa chỉ</th>
                            <th className="py-2.5 px-3 text-left font-medium">Số điện thoại</th>
                            <th className="py-2.5 px-3 text-left font-medium">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockEmployees.map(emp => (
                            <tr
                                key={emp.id}
                                className="border-b last:border-b-0 hover:bg-gray-50 transition"
                            >
                                <td className="py-2.5 px-3">
                                    <input type="checkbox" className="accent-blue-600" />
                                </td>
                                <td className="py-2.5 px-3">{emp.name}</td>
                                <td className="py-2.5 px-3">{emp.dob}</td>
                                <td className="py-2.5 px-3">{emp.gender}</td>
                                <td className="py-2.5 px-3">{emp.email}</td>
                                <td className="py-2.5 px-3 max-w-[220px] truncate">{emp.address}</td>
                                <td className="py-2.5 px-3">{emp.phone}</td>
                                <td className="py-2.5 px-3">
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 rounded-md border border-gray-300 text-xs hover:bg-gray-100">
                                            Sửa
                                        </button>
                                        <button className="px-3 py-1 rounded-md bg-red-500 text-white text-xs hover:bg-red-400">
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {mockEmployees.length === 0 && (
                            <tr>
                                <td colSpan={8} className="py-10 text-center text-gray-500">
                                    Không có dữ liệu
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4 py-3">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>Hiển thị</span>
                    <select className="border rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>10 bản ghi / trang</option>
                        <option>20 bản ghi / trang</option>
                        <option>50 bản ghi / trang</option>
                    </select>
                </div>
                <div className="flex items-center gap-1 text-sm">
                    <button className="px-2 py-1 rounded hover:bg-gray-100" aria-label="Prev">
                        ‹
                    </button>
                    <button className="px-2 py-1 rounded bg-blue-600 text-white">1</button>
                    <button className="px-2 py-1 rounded hover:bg-gray-100">2</button>
                    <button className="px-2 py-1 rounded hover:bg-gray-100">3</button>
                    <span className="px-2">…</span>
                    <button className="px-2 py-1 rounded hover:bg-gray-100">10</button>
                    <button className="px-2 py-1 rounded hover:bg-gray-100" aria-label="Next">
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

function BTTH() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopBar />
                <main className="flex-1 p-6">
                    <Breadcrumb />
                    <EmployeeTable />
                </main>
                <footer className="text-center text-[11px] text-gray-500 py-3 border-t bg-white">
                    Rikkei Education ©2025 Created by NVQUY
                </footer>
            </div>
        </div>
    );
}

export default BTTH;