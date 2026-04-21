// ================================================================
// SHARED COMPONENTS — Dịch Thuật Số Hóa
// ================================================================

function getBase() {
  const p = window.location.pathname;
  if (p.match(/\/(ngon-ngu|quoc-gia)\//)) return '../../';
  if (p.match(/\/(pages|admin|portal)\//)) return '../';
  return './';
}

export function renderTopbar() {
  const b = getBase();
  document.getElementById('topbar')?.insertAdjacentHTML('afterbegin', `
    <div class="container">
      <div style="display:flex;gap:20px;flex-wrap:wrap">
        <div class="topbar-item">📍 <a href="https://maps.app.goo.gl/Hkp6dFUA2Ezr3TUb7" target="_blank">35 Nguyễn Văn Tráng, Q.1, TP.HCM</a></div>
        <div class="topbar-item">⏰ T2–T7: 8:00–17:30</div>
        <div class="topbar-item">🏢 MST: 1100791068</div>
      </div>
      <div style="display:flex;gap:14px">
        <a href="mailto:sohoavn@gmail.com" class="topbar-item">📧 sohoavn@gmail.com</a>
        <a href="https://zalo.me/84909108890" class="topbar-item">💬 Zalo</a>
        <a href="${b}portal/index.html" class="topbar-item" style="color:#FFB800;font-weight:700">👤 Cổng KH</a>
      </div>
    </div>`);
}

export function renderHeader(activePage = '') {
  const b = getBase();
  document.getElementById('site-header')?.insertAdjacentHTML('afterbegin', `
    <div class="container">
      <div class="header-inner">
        <a href="${b}index.html" class="logo">
          <div class="logo-box">DT</div>
          <div>
            <div class="logo-name">Dịch Thuật Số Hóa</div>
            <div class="logo-sub">DIGITIZATION TECHNOLOGY &amp; TRANSLATION CORP.</div>
          </div>
        </a>
        <div>
          <div class="header-phone"><a href="tel:0909108890">0909.108.890</a></div>
          <div style="font-size:12px;color:var(--gray-mid);text-align:right">Tư vấn miễn phí · Báo giá 5 phút</div>
        </div>
      </div>
    </div>`);
}

export function renderNav(activePage = '') {
  const b = getBase();
  const links = [
    { href: b+'index.html', label: 'Trang Chủ' },
    { href: b+'pages/dich-thuat-cong-chung.html', label: 'Dịch Thuật CC', hot: true },
    { href: b+'pages/bang-gia.html', label: 'Bảng Giá', hot: true },
    { href: b+'pages/ngon-ngu/', label: 'Ngôn Ngữ' },
    { href: b+'pages/chuyen-nganh.html', label: 'Chuyên Ngành' },
    { href: b+'pages/danh-may-nhap-lieu.html', label: 'Đánh Máy / Nhập Liệu' },
    { href: b+'pages/hop-phap-hoa.html', label: 'Hợp Pháp Hóa' },
    { href: b+'pages/quoc-gia/', label: 'Các Quốc Gia' },
    { href: b+'pages/lien-he.html', label: 'Liên Hệ' },
    { href: b+'portal/index.html', label: '👤 Cổng KH' },
  ];
  document.getElementById('main-nav')?.insertAdjacentHTML('afterbegin',
    `<ul>${links.map(l=>`<li><a href="${l.href}">${l.label}${l.hot?`<span class="nav-hot">HOT</span>`:''}</a></li>`).join('')}</ul>`);
}

export function renderFooter() {
  const b = getBase();
  document.getElementById('site-footer')?.insertAdjacentHTML('afterbegin', `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="logo" style="margin-bottom:12px">
            <div class="logo-box">DT</div>
            <div><div class="logo-name" style="color:#fff">Dịch Thuật Số Hóa</div><div class="logo-sub">DIGITIZATION TECHNOLOGY &amp; TRANSLATION</div></div>
          </div>
          <p style="font-size:13.5px;color:rgba(255,255,255,.65);line-height:1.8">Chuyên dịch thuật công chứng uy tín tại TP.HCM từ 2007. Hơn 20 ngôn ngữ, lấy ngay trong ngày, giá rẻ nhất Sài Gòn.</p>
          <div class="footer-phone"><a href="tel:0909108890" style="color:var(--gold)">0909.108.890</a></div>
          <p style="font-size:12px;color:rgba(255,255,255,.45);margin-top:6px">35 Nguyễn Văn Tráng, P. Bến Thành, Q.1, TP.HCM</p>
        </div>
        <div class="footer-col"><h4>Dịch Vụ</h4><ul>
          <li><a href="${b}pages/dich-thuat-cong-chung.html">Dịch thuật công chứng</a></li>
          <li><a href="${b}pages/ho-so-visa.html">Hồ sơ Visa</a></li>
          <li><a href="${b}pages/ho-so-du-hoc.html">Hồ sơ Du học</a></li>
          <li><a href="${b}pages/ho-so-dinh-cu.html">Hồ sơ Định cư</a></li>
          <li><a href="${b}pages/tai-lieu-doanh-nghiep.html">Tài liệu Doanh nghiệp</a></li>
          <li><a href="${b}pages/hop-phap-hoa.html">Hợp pháp hóa lãnh sự</a></li>
          <li><a href="${b}pages/danh-may-nhap-lieu.html">Đánh máy / Nhập liệu</a></li>
        </ul></div>
        <div class="footer-col"><h4>Ngôn Ngữ</h4><ul>
          <li><a href="${b}pages/ngon-ngu/tieng-anh.html">🇺🇸 Tiếng Anh</a></li>
          <li><a href="${b}pages/ngon-ngu/tieng-nhat.html">🇯🇵 Tiếng Nhật</a></li>
          <li><a href="${b}pages/ngon-ngu/tieng-han.html">🇰🇷 Tiếng Hàn</a></li>
          <li><a href="${b}pages/ngon-ngu/tieng-trung.html">🇨🇳 Tiếng Trung</a></li>
          <li><a href="${b}pages/ngon-ngu/tieng-phap.html">🇫🇷 Tiếng Pháp</a></li>
          <li><a href="${b}pages/ngon-ngu/tieng-duc.html">🇩🇪 Tiếng Đức</a></li>
          <li><a href="${b}pages/ngon-ngu/">Xem 20+ ngôn ngữ →</a></li>
        </ul></div>
        <div class="footer-col"><h4>Quốc Gia</h4><ul>
          <li><a href="${b}pages/quoc-gia/nhat-ban.html">🇯🇵 Nhật Bản</a></li>
          <li><a href="${b}pages/quoc-gia/han-quoc.html">🇰🇷 Hàn Quốc</a></li>
          <li><a href="${b}pages/quoc-gia/trung-quoc.html">🇨🇳 Trung Quốc</a></li>
          <li><a href="${b}pages/quoc-gia/my.html">🇺🇸 Hoa Kỳ</a></li>
          <li><a href="${b}pages/quoc-gia/phap.html">🇫🇷 Pháp</a></li>
          <li><a href="${b}pages/quoc-gia/duc.html">🇩🇪 Đức</a></li>
          <li><a href="${b}pages/quoc-gia/">Xem tất cả →</a></li>
        </ul></div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        © 2007–2025 Công ty CP Công nghệ &amp; Dịch thuật Số Hóa | MST: 1100791068 |
        <a href="${b}pages/chinh-sach-bao-mat.html">Chính sách bảo mật</a> |
        <a href="${b}pages/dieu-khoan.html">Điều khoản</a> |
        <a href="${b}portal/index.html">Cổng khách hàng</a> |
        <a href="${b}admin/index.html">Quản trị</a>
      </div>
    </div>`);
}

export function showToast(msg, type = 'info', duration = 4000) {
  let container = document.getElementById('toast-container');
  if (!container) { container = document.createElement('div'); container.id = 'toast-container'; document.body.appendChild(container); }
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = msg;
  container.appendChild(t);
  setTimeout(() => t.remove(), duration);
}

export function renderStickyCTA() {
  const div = document.createElement('div');
  div.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:800;display:none;background:#fff;border-top:2px solid #D1DCF0;padding:10px 16px;gap:8px';
  div.innerHTML = `
    <a href="tel:0909108890" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;border-radius:8px;background:#D72323;color:#fff;font-weight:700;font-size:13px">📞 Gọi ngay</a>
    <a href="https://zalo.me/84909108890" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;border-radius:8px;background:#0068FF;color:#fff;font-weight:700;font-size:13px">💬 Zalo</a>
    <a href="https://wa.me/84909108890" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;border-radius:8px;background:#25D366;color:#fff;font-weight:700;font-size:13px">WhatsApp</a>`;
  document.body.appendChild(div);
  const update = () => { div.style.display = window.innerWidth <= 768 ? 'flex' : 'none'; };
  update(); window.addEventListener('resize', update);
  if (window.innerWidth <= 768) document.body.style.paddingBottom = '72px';
}

// ================================================================
// CHAT WIDGET — hiện trên mọi trang website (không dùng trong admin/portal)
// Khách nhắn tin → lưu Firestore collection "conversations" → admin/staff thấy realtime
// ================================================================
export async function renderChatWidget() {
  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    #chat-fab{position:fixed;bottom:80px;right:20px;z-index:900;width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#1A56DB,#2563EB);border:none;cursor:pointer;box-shadow:0 4px 16px rgba(37,99,235,.45);display:flex;align-items:center;justify-content:center;font-size:24px;transition:transform .2s}
    #chat-fab:hover{transform:scale(1.1)}
    #chat-fab .chat-badge{position:absolute;top:-2px;right:-2px;background:#EF4444;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:1px 5px;display:none}
    #chat-box{position:fixed;bottom:145px;right:20px;z-index:900;width:340px;max-width:calc(100vw - 32px);background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.18);display:none;flex-direction:column;overflow:hidden;font-family:'Be Vietnam Pro',sans-serif}
    #chat-box.open{display:flex}
    .chat-head{background:linear-gradient(135deg,#1A56DB,#2563EB);color:#fff;padding:14px 16px;display:flex;align-items:center;gap:10px}
    .chat-head .av{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;font-size:16px}
    .chat-head .info{flex:1}.chat-head .info b{display:block;font-size:14px}
    .chat-head .info span{font-size:11px;opacity:.8}
    .chat-head .close-btn{background:none;border:none;color:#fff;font-size:20px;cursor:pointer;padding:0;line-height:1}
    .chat-msgs{flex:1;height:280px;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;background:#F8FAFF}
    .chat-msg{max-width:80%;padding:8px 12px;border-radius:12px;font-size:13px;line-height:1.5;word-break:break-word}
    .chat-msg.staff{background:#E8EFFE;color:#1e3a8a;align-self:flex-start;border-bottom-left-radius:4px}
    .chat-msg.guest{background:#2563EB;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}
    .chat-msg .msg-meta{font-size:10px;opacity:.6;margin-top:3px}
    .chat-typing{font-size:12px;color:#6B7280;padding:0 12px 6px;min-height:20px}
    .chat-info-bar{background:#FFF9E6;border-top:1px solid #FDE68A;padding:8px 12px;font-size:12px;color:#92400E;display:flex;align-items:center;gap:6px}
    .chat-info-bar input{flex:1;border:1px solid #FCD34D;border-radius:6px;padding:4px 8px;font-size:12px;outline:none}
    .chat-info-bar button{background:#F59E0B;border:none;color:#fff;border-radius:6px;padding:4px 10px;cursor:pointer;font-size:12px;font-weight:600}
    .chat-foot{padding:10px 12px;border-top:1px solid #E5E7EB;display:flex;gap:8px;background:#fff}
    .chat-foot textarea{flex:1;border:1px solid #D1D5DB;border-radius:8px;padding:8px;font-size:13px;resize:none;height:38px;line-height:1.4;font-family:inherit;outline:none;transition:border-color .2s}
    .chat-foot textarea:focus{border-color:#2563EB}
    .chat-foot button{background:#2563EB;border:none;color:#fff;border-radius:8px;padding:0 14px;cursor:pointer;font-size:18px;transition:background .2s}
    .chat-foot button:hover{background:#1A56DB}
    .chat-empty{text-align:center;color:#9CA3AF;font-size:13px;padding:32px 16px}
    @media(max-width:480px){#chat-box{bottom:80px;right:0;left:0;width:100%;border-radius:16px 16px 0 0}#chat-fab{bottom:90px}}
  `;
  document.head.appendChild(style);

  // FAB button
  const fab = document.createElement('button');
  fab.id = 'chat-fab';
  fab.innerHTML = `💬<span class="chat-badge" id="chat-unread-badge"></span>`;
  fab.title = 'Nhắn tin tư vấn';

  // Chat box
  const box = document.createElement('div');
  box.id = 'chat-box';
  box.innerHTML = `
    <div class="chat-head">
      <div class="av">🧑‍💼</div>
      <div class="info"><b>Tư vấn viên Dịch Thuật Số Hóa</b><span>Trả lời trong vài phút • T2–T7 8:00–17:30</span></div>
      <button class="close-btn" id="chat-close">✕</button>
    </div>
    <div class="chat-msgs" id="chat-msgs">
      <div class="chat-empty">👋 Xin chào! Hãy đặt câu hỏi hoặc mô tả tài liệu cần dịch, chúng tôi sẽ báo giá ngay!</div>
    </div>
    <div class="chat-typing" id="chat-typing"></div>
    <div class="chat-info-bar" id="chat-info-bar" style="display:none">
      📞 Để lại SĐT để nhân viên gọi lại:
      <input type="tel" id="chat-phone-input" placeholder="09xxxxxxxx">
      <button id="chat-phone-send">Gửi</button>
    </div>
    <div class="chat-foot">
      <textarea id="chat-input" placeholder="Nhập tin nhắn..." rows="1"></textarea>
      <button id="chat-send">➤</button>
    </div>`;

  document.body.appendChild(fab);
  document.body.appendChild(box);

  // State
  let convId = localStorage.getItem('sohoa_conv_id') || null;
  let guestName = localStorage.getItem('sohoa_guest_name') || 'Khách';
  let unsubscribe = null;
  let msgCount = 0;

  // Toggle
  fab.addEventListener('click', () => {
    box.classList.toggle('open');
    if (box.classList.contains('open')) {
      document.getElementById('chat-unread-badge').style.display = 'none';
      document.getElementById('chat-input').focus();
      if (!convId) initConversation();
      else if (!unsubscribe) listenMessages();
    }
  });
  document.getElementById('chat-close').addEventListener('click', () => box.classList.remove('open'));

  // Firebase lazy import
  async function getFirestore() {
    const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, collection, addDoc, doc, updateDoc, onSnapshot, orderBy, query, serverTimestamp }
      = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const app = getApps().length ? getApps()[0] : initializeApp({
      apiKey:"AIzaSyCkyAJJm-kj6JReuGOcy1kj3RHn5hqRWwo",
      authDomain:"sohoa-baafc.firebaseapp.com",
      projectId:"sohoa-baafc"
    });
    return { db: getFirestore(app), collection, addDoc, doc, updateDoc, onSnapshot, orderBy, query, serverTimestamp };
  }

  async function initConversation() {
    const { db, collection, addDoc, serverTimestamp } = await getFirestore();
    const ref = await addDoc(collection(db, 'conversations'), {
      guestName, guestPhone: '', guestEmail: '',
      status: 'open',           // open | assigned | closed
      assignedTo: '',            // uid nhân viên được giao
      assignedName: '',
      unreadAdmin: 1,
      unreadGuest: 0,
      lastMessage: 'Bắt đầu cuộc trò chuyện',
      lastAt: serverTimestamp(),
      createdAt: serverTimestamp(),
      page: window.location.pathname,
    });
    convId = ref.id;
    localStorage.setItem('sohoa_conv_id', convId);
    listenMessages();
    // Gửi tin chào tự động
    await sendSystemMsg('👋 Xin chào! Nhân viên tư vấn sẽ phản hồi sớm nhất. Bạn có thể để lại số điện thoại để chúng tôi gọi lại nếu cần nhé!', db);
  }

  async function sendSystemMsg(text, db) {
    const { collection, addDoc, serverTimestamp, doc, updateDoc } = await getFirestore();
    await addDoc(collection(db, 'conversations', convId, 'messages'), {
      text, sender: 'system', senderName: 'Bot', createdAt: serverTimestamp()
    });
  }

  async function listenMessages() {
    const { db, collection, onSnapshot, orderBy, query, doc, updateDoc } = await getFirestore();
    const q = query(collection(db, 'conversations', convId, 'messages'), orderBy('createdAt', 'asc'));
    unsubscribe = onSnapshot(q, snap => {
      const msgs = document.getElementById('chat-msgs');
      msgs.innerHTML = '';
      let staffMsgCount = 0;
      snap.forEach(d => {
        const m = d.data();
        if (m.sender === 'staff' || m.sender === 'admin') staffMsgCount++;
        const div = document.createElement('div');
        const isGuest = m.sender === 'guest';
        const isSystem = m.sender === 'system';
        div.className = `chat-msg ${isGuest ? 'guest' : 'staff'}`;
        if (isSystem) div.style.cssText = 'align-self:center;background:#E0F2FE;color:#0369A1;font-size:12px;max-width:90%;text-align:center';
        const t = m.createdAt?.toDate ? m.createdAt.toDate().toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'}) : '';
        div.innerHTML = `${m.text}<div class="msg-meta">${isGuest ? '' : (m.senderName||'Nhân viên') + ' · '}${t}</div>`;
        msgs.appendChild(div);
      });
      msgs.scrollTop = msgs.scrollHeight;
      // Hiện thanh nhập SĐT sau khi khách gửi tin đầu tiên
      if (msgCount > 0) document.getElementById('chat-info-bar').style.display = 'flex';
      // Báo có tin nhắn mới khi box đóng
      if (!box.classList.contains('open') && staffMsgCount > 0) {
        document.getElementById('chat-unread-badge').style.display = 'block';
        document.getElementById('chat-unread-badge').textContent = staffMsgCount;
      }
    });
  }

  async function sendMessage(text) {
    if (!text.trim()) return;
    if (!convId) await initConversation();
    msgCount++;
    const { db, collection, addDoc, doc, updateDoc, serverTimestamp } = await getFirestore();
    await addDoc(collection(db, 'conversations', convId, 'messages'), {
      text: text.trim(), sender: 'guest', senderName: guestName,
      createdAt: serverTimestamp()
    });
    await updateDoc(doc(db, 'conversations', convId), {
      lastMessage: text.trim().substring(0, 60),
      lastAt: serverTimestamp(),
      unreadAdmin: 1
    });
    document.getElementById('chat-info-bar').style.display = 'flex';
  }

  // Send button
  document.getElementById('chat-send').addEventListener('click', async () => {
    const inp = document.getElementById('chat-input');
    await sendMessage(inp.value);
    inp.value = '';
  });
  document.getElementById('chat-input').addEventListener('keydown', async e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); await document.getElementById('chat-send').click(); }
  });

  // Phone submit
  document.getElementById('chat-phone-send').addEventListener('click', async () => {
    const phone = document.getElementById('chat-phone-input').value.trim();
    if (!phone) return;
    const { db, collection, addDoc, doc, updateDoc, serverTimestamp } = await getFirestore();
    await addDoc(collection(db, 'conversations', convId, 'messages'), {
      text: `📞 Khách để lại số điện thoại: ${phone}`, sender: 'guest', senderName: guestName,
      createdAt: serverTimestamp()
    });
    await updateDoc(doc(db, 'conversations', convId), {
      guestPhone: phone, lastMessage: `SĐT: ${phone}`, lastAt: serverTimestamp(), unreadAdmin: 1
    });
    document.getElementById('chat-info-bar').style.display = 'none';
    localStorage.setItem('sohoa_guest_phone', phone);
  });
}
