# HƯỚNG DẪN TRIỂN KHAI & QUẢN LÝ
## Dịch Thuật Số Hóa – Hệ thống Website + CRM + Portal

---

## 🚀 BƯỚC 1: UPLOAD LÊN GITHUB

```bash
git clone https://github.com/chaysaigon-app/dichthuatsohoa
# Giải nén file zip, copy toàn bộ nội dung folder dichthuat vào repo
# (Không copy folder dichthuat, copy NỘI DUNG bên trong)
cd dichthuatsohoa
git add .
git commit -m "Full website + CRM + Portal"
git push origin main
```

Sau đó vào **GitHub → Settings → Pages → Source: main branch → root**

URL website: `https://chaysaigon-app.github.io/dichthuatsohoa/`

---

## 🔐 BƯỚC 2: FIREBASE AUTHENTICATION – TẠO TÀI KHOẢN

### 2.1 Bật Email/Password Authentication
1. Vào [Firebase Console](https://console.firebase.google.com)
2. Chọn project `sohoa-baafc`
3. **Authentication → Sign-in method → Email/Password → Enable**

### 2.2 Tạo tài khoản Super Admin đầu tiên

**Cách 1: Qua Firebase Console (khuyến nghị)**
1. Firebase Console → **Authentication → Users → Add user**
2. Nhập: `admin@dichthuatsohoa.com` / `admin@SoHoa2025`
3. Sau khi tạo xong, **copy UID** của user vừa tạo
4. Vào **Firestore Database → tạo collection `users`**
5. Tạo document với **ID = UID vừa copy**
6. Thêm các field:
   ```
   name: "Super Admin"
   email: "admin@dichthuatsohoa.com"
   role: "superadmin"
   createdAt: (timestamp)
   ```

**Cách 2: Qua CRM (sau khi có 1 admin đầu tiên)**
1. Đăng nhập CRM tại `/admin/index.html`
2. Vào **Cài đặt → Thêm nhân viên**
3. Nhập thông tin và chọn role

### 2.3 Cấu trúc Roles (vai trò)

| Role | Quyền hạn |
|------|-----------|
| `superadmin` | Full quyền: xem, tạo, sửa, xóa mọi thứ |
| `admin` | Quản lý đơn hàng, hóa đơn, khách hàng. Không xóa đơn |
| `staff` | Tạo và cập nhật đơn hàng, leads, hóa đơn |
| `customer` | Chỉ xem đơn hàng của mình + gửi đánh giá |

### 2.4 Tạo tài khoản Nhân viên (Staff)
1. Đăng nhập CRM → **Cài đặt → Tài khoản nhân viên → + Thêm nhân viên**
2. Nhập: Họ tên, Email, Mật khẩu (≥8 ký tự), chọn role `staff` hoặc `admin`
3. Nhân viên đăng nhập tại: `/admin/index.html`

### 2.5 Tạo tài khoản Khách hàng thân thiết
1. Đăng nhập CRM → **Tài khoản KH → + Tạo tài khoản KH**
2. Nhập: Họ tên, Email, Số điện thoại, Mật khẩu
3. Khách hàng đăng nhập tại: `/portal/index.html`
4. Trong portal, khách hàng có thể:
   - Xem tiến trình xử lý hồ sơ theo từng bước
   - Xem lịch sử toàn bộ hoạt động xử lý
   - Xem hóa đơn
   - Gửi đánh giá / phản hồi
   - Gửi yêu cầu dịch thuật mới

---

## 🔒 BƯỚC 3: CÀI ĐẶT FIRESTORE RULES

1. Vào Firebase Console → **Firestore Database → Rules**
2. Xóa toàn bộ nội dung hiện có
3. Mở file `firestore.rules` trong repo
4. **Copy toàn bộ** và paste vào Firebase Console
5. Click **Publish**

---

## 📊 BƯỚC 4: TẠO FIRESTORE INDEXES (nếu cần)

Firebase sẽ tự tạo khi có lỗi. Hoặc tạo thủ công:
- Collection: `orders`, Fields: `email ASC, createdAt DESC`
- Collection: `orders`, Fields: `customerUid ASC, createdAt DESC`
- Collection: `invoices`, Fields: `customerUid ASC, createdAt DESC`

---

## 🌐 BƯỚC 5: CẤU TRÚC CÁC TRANG

```
dichthuatsohoa/
├── index.html                    ← Trang chủ SEO đầy đủ
├── firestore.rules               ← Copy vào Firebase Console
├── HUONG_DAN.md                  ← File này
├── assets/
│   ├── css/main.css              ← CSS dùng chung
│   └── js/
│       ├── firebase-config.js    ← Firebase config
│       └── components.js         ← Header/Footer/Nav chung
├── admin/
│   └── index.html               ← CRM Admin (login riêng)
├── portal/
│   └── index.html               ← Cổng khách hàng
└── pages/
    ├── bang-gia.html
    ├── dich-thuat-cong-chung.html
    ├── ho-so-visa.html
    ├── ho-so-du-hoc.html
    ├── ho-so-dinh-cu.html
    ├── tai-lieu-doanh-nghiep.html
    ├── chuyen-nganh.html
    ├── danh-may-nhap-lieu.html
    ├── hop-phap-hoa.html
    ├── lien-he.html
    ├── chinh-sach-bao-mat.html
    ├── dieu-khoan.html
    ├── ngon-ngu/
    │   ├── index.html            ← Danh sách 20 ngôn ngữ
    │   ├── tieng-anh.html
    │   ├── tieng-nhat.html
    │   ├── tieng-han.html
    │   ├── tieng-trung.html
    │   ├── tieng-phap.html
    │   └── ... (20 trang ngôn ngữ)
    └── quoc-gia/
        ├── index.html            ← Danh sách 30+ quốc gia
        ├── nhat-ban.html         ← Đầy đủ: địa lý, lịch sử, văn hóa
        ├── han-quoc.html
        ├── trung-quoc.html
        ├── my.html
        ├── phap.html
        ├── duc.html
        ├── uc.html
        └── ... (30 quốc gia)
```

---

## 📋 QUY TRÌNH CÔNG VIỆC (WORKFLOW)

### Nhận đơn hàng từ đầu:
1. **Khách liên hệ** → CRM: `Liên hệ mới → + Thêm liên hệ`
2. **Báo giá** → Click `📨 Báo giá` trên lead, sau đó cập nhật trạng thái
3. **Xác nhận** → Click `➕ Tạo đơn` để chuyển lead thành đơn hàng
4. **Xử lý** → Cập nhật trạng thái đơn: `Đang dịch / Xử lý`
5. **Hoàn thành** → Click `✓` để đánh dấu hoàn thành
6. **Xuất hóa đơn** → Click `🧾` trên đơn hàng
7. **Thu tiền** → Click `✓ Thu tiền` trên hóa đơn

### Mọi bước đều được **tự động ghi vào Nhật ký hoạt động** với thời gian và người thực hiện.

---

## 💰 BÁO CÁO TÀI CHÍNH

Vào CRM → **Báo cáo** để xem:
- Doanh thu tháng hiện tại
- Lợi nhuận (sau trừ chi phí nhân sự + vận hành)
- VAT 8% phải nộp
- Thống kê đơn hàng
- Top ngôn ngữ theo số lượng đơn

**Cài đặt chi phí:** CRM → Cài đặt → Nhập chi phí nhân sự/tháng và chi phí vận hành/tháng

---

## 📞 LIÊN HỆ HỖ TRỢ KỸ THUẬT

Nếu gặp vấn đề kỹ thuật:
- Email: sohoavn@gmail.com
- Zalo: 0778.752.214
