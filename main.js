// 1. Khởi tạo danh sách sách trong kho (Array of Objects)
const libraryInventory = [
  {
    bookId: "B101",
    title: "Cấu trúc dữ liệu và Giải thuật",
    totalCopies: 10,
    availableCopies: 5,
  },
  {
    bookId: "B102",
    title: "Lập trình C++ Cơ bản",
    totalCopies: 8,
    availableCopies: 2,
  },
  {
    bookId: "B103",
    title: "Hệ quản trị CSDL MySQL",
    totalCopies: 5,
    availableCopies: 0,
  },
];

console.log("================ QUẢN LÝ THƯ VIỆN ================\n");

// 2. Hàm xử lý nghiệp vụ mượn sách (Giảm số lượng an toàn)
function borrowBook(id, requestCount) {
  // Tìm sách theo ID
  const bookIndex = libraryInventory.findIndex((book) => book.bookId === id);

  if (bookIndex === -1) {
    console.log(`[LỖI] Không tìm thấy sách mã ${id}.`);
    return;
  }

  const book = libraryInventory[bookIndex];

  // Kiểm tra tính hợp lệ: Không để số lượng khả dụng < 0
  if (requestCount > book.availableCopies) {
    console.log(
      `[TỪ CHỐI] Khách mượn ${requestCount} cuốn '${book.title}'. Chỉ còn ${book.availableCopies} cuốn trong kho!`,
    );
  } else {
    book.availableCopies -= requestCount;
    console.log(
      `[THÀNH CÔNG] Đã xuất kho ${requestCount} cuốn '${book.title}'. Số lượng còn lại: ${book.availableCopies}.`,
    );
  }
}

// Giả lập các giao dịch mượn sách
console.log("--- XỬ LÝ GIAO DỊCH MƯỢN SÁCH ---");
borrowBook("B101", 2); // Hợp lệ (còn 5, mượn 2)
borrowBook("B102", 4); // Không hợp lệ (còn 2, mượn 4)
borrowBook("B103", 1); // Không hợp lệ (còn 0, mượn 1)

// 3. Sử dụng vòng lặp for để tính toán số liệu thống kê kho
let totalBooksInLibrary = 0;
let totalAvailableBooks = 0;

for (let i = 0; i < libraryInventory.length; i++) {
  totalBooksInLibrary += libraryInventory[i].totalCopies;
  totalAvailableBooks += libraryInventory[i].availableCopies;
}

// 4. In báo cáo thống kê và bảng kiểm kê
console.log("\n--- BÁO CÁO THỐNG KÊ KHO ---");
console.log(`Tổng số lượng sách sở hữu: ${totalBooksInLibrary} cuốn`);
console.log(
  `Số lượng sách đang sẵn sàng cho mượn: ${totalAvailableBooks} cuốn`,
);
console.log(
  `Số lượng sách đang được mượn: ${totalBooksInLibrary - totalAvailableBooks} cuốn`,
);

console.log("\n--- BẢNG KIỂM KÊ KHO SÁCH (ĐÓNG KHUNG) ---");
// Sử dụng console.table để xuất dữ liệu mảng đối tượng ra bảng đóng khung đẹp mắt
console.table(libraryInventory);
