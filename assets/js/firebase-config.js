// ============================================================
// FIREBASE CONFIG — DỊCH THUẬT SỐ HÓA
// Dùng chung cho toàn bộ hệ thống (website, CRM, portal)
// ============================================================
export const firebaseConfig = {
  apiKey: "AIzaSyCkyAJJm-kj6JReuGOcy1kj3RHn5hqRWwo",
  authDomain: "sohoa-baafc.firebaseapp.com",
  projectId: "sohoa-baafc",
  storageBucket: "sohoa-baafc.firebasestorage.app",
  messagingSenderId: "523020863823",
  appId: "1:523020863823:web:6634451caa743ef5dddd3a"
};

// ============================================================
// CHAT / CONVERSATIONS — collection "conversations"
// conversations/{convId}: guestName, guestPhone, guestEmail,
//   status (open|assigned|closed), assignedTo (uid), assignedName,
//   unreadAdmin, unreadGuest, lastMessage, lastAt, createdAt, page
// conversations/{convId}/messages/{msgId}: text, sender (guest|staff|admin|system),
//   senderName, senderUid, createdAt
// ============================================================
export const CONV_STATUS = {
  open:     { label: 'Chờ phản hồi', color: '#EF4444' },
  assigned: { label: 'Đang xử lý',   color: '#F59E0B' },
  closed:   { label: 'Đã đóng',      color: '#6B7280' }
};

// ============================================================
// STATUS MAPS — dùng chung
// ============================================================
export const ORDER_STATUS = {
  new:       { label: 'Mới – Chờ báo giá',  color: '#06B6D4', cls: 'new' },
  quoted:    { label: 'Đã báo giá',          color: '#F59E0B', cls: 'quoted' },
  confirmed: { label: 'Xác nhận – Đặt cọc', color: '#2563EB', cls: 'confirmed' },
  processing:{ label: 'Đang xử lý / Dịch',  color: '#8B5CF6', cls: 'processing' },
  done:      { label: 'Hoàn thành',          color: '#10B981', cls: 'done' },
  invoiced:  { label: 'Đã xuất hóa đơn',    color: '#FBBF24', cls: 'invoiced' },
  paid:      { label: 'Đã thanh toán',       color: '#34D399', cls: 'paid' },
  cancelled: { label: 'Đã hủy',             color: '#EF4444', cls: 'cancelled' }
};

export const ROLES = {
  superadmin: 'Super Admin',
  admin:      'Admin',
  staff:      'Nhân viên',
  customer:   'Khách hàng'
};

// ============================================================
// HELPERS
// ============================================================
export function fmtMoney(n) {
  return Number(n || 0).toLocaleString('vi-VN') + 'đ';
}
export function fmtDate(d) {
  if (!d) return '—';
  const dt = d?.toDate ? d.toDate() : new Date(d);
  return dt.toLocaleDateString('vi-VN');
}
export function fmtDateTime(d) {
  if (!d) return '—';
  const dt = d?.toDate ? d.toDate() : new Date(d);
  return dt.toLocaleString('vi-VN', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
}
export function genId(prefix = 'DT') {
  return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
}
