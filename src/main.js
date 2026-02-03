// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
    new Product(1, "iPhone 15 Pro", 25000000, 15, "Electronics", true),
    new Product(2, "Samsung Galaxy S24", 20000000, 8, "Electronics", true),
    new Product(3, "MacBook Air M2", 28000000, 5, "Electronics", true),
    new Product(4, "Áo thun nam", 250000, 50, "Fashion", true),
    new Product(5, "Quần jean nữ", 450000, 30, "Fashion", true),
    new Product(6, "Tai nghe AirPods", 5000000, 0, "Accessories", false),
    new Product(7, "Ví da cao cấp", 800000, 20, "Accessories", true),
    new Product(8, "Giày thể thao", 1500000, 12, "Fashion", true),
    new Product(9, "Laptop Dell XPS", 35000000, 3, "Electronics", true),
    new Product(10, "Balo du lịch", 600000, 25, "Accessories", true)
];

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
function getNameAndPrice(products) {
    return products.map(product => ({
        name: product.name,
        price: product.price
    }));
}

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
function getInStockProducts(products) {
    return products.filter(product => product.quantity > 0);
}

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
function hasExpensiveProduct(products) {
    return products.some(product => product.price > 30000000);
}

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
function allAccessoriesAvailable(products) {
    return products
        .filter(product => product.category === "Accessories")
        .every(product => product.isAvailable === true);
}

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
function calculateTotalInventoryValue(products) {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
}

// Câu 8: Dùng for...of. Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
function displayProductInfo(products) {
    console.log("\n=== THÔNG TIN SẢN PHẨM ===");
    for (const product of products) {
        const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
        console.log(`${product.name} - ${product.category} - ${status}`);
    }
}

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
function displayProductProperties(product) {
    console.log("\n=== THUỘC TÍNH SẢN PHẨM ===");
    for (const key in product) {
        console.log(`${key}: ${product[key]}`);
    }
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
function getAvailableProductNames(products) {
    return products
        .filter(product => product.isAvailable === true && product.quantity > 0)
        .map(product => product.name);
}

// ============= TEST CÁC HÀM =============

console.log("========================================");
console.log("KIỂM TRA KẾT QUẢ CÁC CÂU");
console.log("========================================");

// Test Câu 3
console.log("\nCâu 3: Mảng chứa name và price:");
console.log(getNameAndPrice(products));

// Test Câu 4
console.log("\nCâu 4: Sản phẩm còn hàng trong kho:");
console.log(getInStockProducts(products));

// Test Câu 5
console.log("\nCâu 5: Có sản phẩm giá trên 30.000.000?", hasExpensiveProduct(products));

// Test Câu 6
console.log("\nCâu 6: Tất cả Accessories đang được bán?", allAccessoriesAvailable(products));

// Test Câu 7
console.log("\nCâu 7: Tổng giá trị kho hàng:", calculateTotalInventoryValue(products).toLocaleString('vi-VN'), "VNĐ");

// Test Câu 8
displayProductInfo(products);

// Test Câu 9 (với sản phẩm đầu tiên)
displayProductProperties(products[0]);

// Test Câu 10
console.log("\nCâu 10: Tên sản phẩm đang bán và còn hàng:");
console.log(getAvailableProductNames(products));

console.log("\n========================================");

//Nguyễn Quang Vinh - 2280603698