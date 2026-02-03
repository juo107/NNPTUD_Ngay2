// Hàm hiển thị tất cả sản phẩm
function showAllProducts() {
  const output = document.getElementById('output');
  let html = '<div class="output-title">Tất cả sản phẩm (' + products.length + ' sản phẩm)</div>';
  html += '<div class="product-grid">';
  
  products.forEach(product => {
    const status = product.isAvailable ? 'Đang bán' : 'Ngừng bán';
    const statusClass = product.isAvailable ? 'badge-success' : 'badge-danger';
    const stockClass = product.quantity > 0 ? 'badge-info' : 'badge-danger';
    
    html += `
      <div class="product-card">
        <div class="product-name">${product.name}</div>
        <div class="product-detail"><strong>ID:</strong> ${product.id}</div>
        <div class="product-detail"><strong>Giá:</strong> ${product.price.toLocaleString('vi-VN')} VNĐ</div>
        <div class="product-detail"><strong>Số lượng:</strong> ${product.quantity}</div>
        <div class="product-detail"><strong>Danh mục:</strong> ${product.category}</div>
        <span class="badge ${statusClass}">${status}</span>
        <span class="badge ${stockClass}">${product.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}</span>
      </div>
    `;
  });
  
  html += '</div>';
  output.innerHTML = html;
}

// Câu 3: Hiển thị Name và Price
function showNameAndPrice() {
  const output = document.getElementById('output');
  const result = getNameAndPrice(products);
  
  let html = '<div class="output-title">Câu 3: Danh sách Name & Price</div>';
  html += '<div class="product-grid">';
  
  result.forEach(item => {
    html += `
      <div class="product-card">
        <div class="product-name">${item.name}</div>
        <div class="product-detail"><strong>Giá:</strong> ${item.price.toLocaleString('vi-VN')} VNĐ</div>
      </div>
    `;
  });
  
  html += '</div>';
  output.innerHTML = html;
}

// Câu 4: Sản phẩm còn hàng
function showInStockProducts() {
  const output = document.getElementById('output');
  const result = getInStockProducts(products);
  
  let html = '<div class="output-title">Câu 4: Sản phẩm còn hàng (' + result.length + ' sản phẩm)</div>';
  html += '<div class="product-grid">';
  
  result.forEach(product => {
    html += `
      <div class="product-card">
        <div class="product-name">${product.name}</div>
        <div class="product-detail"><strong>Số lượng:</strong> ${product.quantity}</div>
        <div class="product-detail"><strong>Giá:</strong> ${product.price.toLocaleString('vi-VN')} VNĐ</div>
        <div class="product-detail"><strong>Danh mục:</strong> ${product.category}</div>
      </div>
    `;
  });
  
  html += '</div>';
  output.innerHTML = html;
}

// Câu 5: Kiểm tra sản phẩm giá > 30 triệu
function checkExpensiveProduct() {
  const output = document.getElementById('output');
  const result = hasExpensiveProduct(products);
  
  const expensiveProducts = products.filter(p => p.price > 30000000);
  
  let html = '<div class="output-title">Câu 5: Kiểm tra sản phẩm giá > 30.000.000 VNĐ</div>';
  
  if (result) {
    html += '<div class="alert alert-success">CÓ sản phẩm có giá trên 30.000.000 VNĐ</div>';
    html += '<div class="product-grid">';
    expensiveProducts.forEach(product => {
      html += `
        <div class="product-card">
          <div class="product-name">${product.name}</div>
          <div class="product-detail"><strong>Giá:</strong> ${product.price.toLocaleString('vi-VN')} VNĐ</div>
          <div class="product-detail"><strong>Số lượng:</strong> ${product.quantity}</div>
        </div>
      `;
    });
    html += '</div>';
  } else {
    html += '<div class="alert alert-warning">KHÔNG có sản phẩm nào có giá trên 30.000.000 VNĐ</div>';
  }
  
  output.innerHTML = html;
}

// Câu 6: Kiểm tra Accessories
function checkAccessoriesAvailable() {
  const output = document.getElementById('output');
  const result = allAccessoriesAvailable(products);
  const accessories = products.filter(p => p.category === 'Accessories');
  
  let html = '<div class="output-title">Câu 6: Kiểm tra tất cả Accessories</div>';
  
  if (result) {
    html += '<div class="alert alert-success">TẤT CẢ sản phẩm Accessories đang được bán</div>';
  } else {
    html += '<div class="alert alert-warning">KHÔNG phải tất cả Accessories đang được bán</div>';
  }
  
  html += '<div class="product-grid">';
  accessories.forEach(product => {
    const statusClass = product.isAvailable ? 'badge-success' : 'badge-danger';
    const status = product.isAvailable ? 'Đang bán' : 'Ngừng bán';
    
    html += `
      <div class="product-card">
        <div class="product-name">${product.name}</div>
        <div class="product-detail"><strong>Giá:</strong> ${product.price.toLocaleString('vi-VN')} VNĐ</div>
        <div class="product-detail"><strong>Số lượng:</strong> ${product.quantity}</div>
        <span class="badge ${statusClass}">${status}</span>
      </div>
    `;
  });
  html += '</div>';
  
  output.innerHTML = html;
}

// Câu 7: Tổng giá trị kho
function showTotalValue() {
  const output = document.getElementById('output');
  const total = calculateTotalInventoryValue(products);
  
  let html = '<div class="output-title">Câu 7: Tổng giá trị kho hàng</div>';
  html += '<div class="stats-grid">';
  html += `
    <div class="stat-card">
      <div class="stat-label">Tổng giá trị</div>
      <div class="stat-value">${total.toLocaleString('vi-VN')}</div>
      <div class="stat-label">VNĐ</div>
    </div>
  `;
  
  // Chi tiết từng sản phẩm
  html += '</div>';
  html += '<div class="output-title" style="margin-top: 30px;">Chi tiết giá trị từng sản phẩm</div>';
  html += '<div class="product-grid">';
  
  products.forEach(product => {
    const value = product.price * product.quantity;
    html += `
      <div class="product-card">
        <div class="product-name">${product.name}</div>
        <div class="product-detail"><strong>Đơn giá:</strong> ${product.price.toLocaleString('vi-VN')} VNĐ</div>
        <div class="product-detail"><strong>Số lượng:</strong> ${product.quantity}</div>
        <div class="product-detail"><strong>Thành tiền:</strong> ${value.toLocaleString('vi-VN')} VNĐ</div>
      </div>
    `;
  });
  
  html += '</div>';
  output.innerHTML = html;
}

// Câu 8: For...of
function displayProductInfo() {
  const output = document.getElementById('output');
  
  let html = '<div class="output-title">Câu 8: Duyệt mảng với for...of</div>';
  
  for (const product of products) {
    const status = product.isAvailable ? 'Đang bán' : 'Ngừng bán';
    const statusClass = product.isAvailable ? 'badge-success' : 'badge-danger';
    
    html += `
      <div class="list-item">
        <div>
          <strong>${product.name}</strong> - ${product.category}
        </div>
        <span class="badge ${statusClass}">${status}</span>
      </div>
    `;
  }
  
  output.innerHTML = html;
}

// Câu 9: For...in
function displayFirstProductProperties() {
  const output = document.getElementById('output');
  const product = products[0];
  
  let html = '<div class="output-title">Câu 9: Thuộc tính sản phẩm với for...in</div>';
  html += `<div class="alert alert-success">Hiển thị thuộc tính của: <strong>${product.name}</strong></div>`;
  
  for (const key in product) {
    let value = product[key];
    if (key === 'price') {
      value = value.toLocaleString('vi-VN') + ' VNĐ';
    } else if (typeof value === 'boolean') {
      value = value ? 'Có' : 'Không';
    }
    
    html += `
      <div class="property-display">
        <span class="property-key">${key}:</span>
        <span class="property-value">${value}</span>
      </div>
    `;
  }
  
  output.innerHTML = html;
}

// Câu 10: Sản phẩm đang bán và còn hàng
function showAvailableProducts() {
  const output = document.getElementById('output');
  const result = getAvailableProductNames(products);
  
  let html = '<div class="output-title">Câu 10: Sản phẩm đang bán và còn hàng</div>';
  html += `<div class="alert alert-success">Tổng cộng: <strong>${result.length}</strong> sản phẩm</div>`;
  
  result.forEach((name, index) => {
    html += `
      <div class="list-item">
        <div><strong>${index + 1}.</strong> ${name}</div>
      </div>
    `;
  });
  
  output.innerHTML = html;
}

// Thống kê tổng quan
function showStatistics() {
  const output = document.getElementById('output');
  
  const totalProducts = products.length;
  const inStock = products.filter(p => p.quantity > 0).length;
  const available = products.filter(p => p.isAvailable).length;
  const totalValue = calculateTotalInventoryValue(products);
  const categories = [...new Set(products.map(p => p.category))];
  
  let html = '<div class="output-title">Thống kê tổng quan</div>';
  html += '<div class="stats-grid">';
  
  html += `
    <div class="stat-card">
      <div class="stat-label">Tổng sản phẩm</div>
      <div class="stat-value">${totalProducts}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Còn hàng</div>
      <div class="stat-value">${inStock}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Đang bán</div>
      <div class="stat-value">${available}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Tổng giá trị</div>
      <div class="stat-value">${(totalValue / 1000000).toFixed(1)}M</div>
      <div class="stat-label">VNĐ</div>
    </div>
  `;
  
  html += '</div>';
  
  // Thống kê theo danh mục
  html += '<div class="output-title" style="margin-top: 30px;">Thống kê theo danh mục</div>';
  html += '<div class="stats-grid">';
  
  categories.forEach(category => {
    const count = products.filter(p => p.category === category).length;
    const categoryValue = products
      .filter(p => p.category === category)
      .reduce((sum, p) => sum + (p.price * p.quantity), 0);
    
    html += `
      <div class="stat-card">
        <div class="stat-label">${category}</div>
        <div class="stat-value">${count}</div>
        <div class="stat-label">sản phẩm</div>
        <div class="product-detail" style="margin-top: 10px;">
          <strong>Giá trị:</strong> ${categoryValue.toLocaleString('vi-VN')} VNĐ
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  output.innerHTML = html;
}

// Tự động hiển thị tất cả sản phẩm khi load trang
window.onload = function() {
  showAllProducts();
};