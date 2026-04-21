// ================================================================
// SHARED COMPONENTS — Dịch Thuật Số Hóa
// Chat-first: MỌI CTA đều mở live chat, không gọi/mở app ngoài
// ================================================================

function getBase() {
  const p = window.location.pathname;
  if (p.match(/\/(ngon-ngu|quoc-gia)\//)) return '../../';
  if (p.match(/\/(pages|admin|portal)\//)) return '../';
  return './';
}

// ================================================================
// GLOBAL CHAT OPENER — dùng ở mọi nơi: onclick="window.__openChat()"
// ================================================================
window.__openChat = function(topic) {
  const box = document.getElementById('chat-box');
  if (!box) { window.__chatPendingOpen = topic || true; return; }
  box.classList.add('open');
  const badge = document.getElementById('chat-unread-badge');
  if (badge) badge.style.display = 'none';
  const inp = document.getElementById('chat-input');
  if (inp) { if (topic) inp.value = topic; inp.focus(); }
  // Nếu đang ở màn quick-opts thì vẫn giữ, khách tự chọn
};

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
        <a href="javascript:void(0)" onclick="window.__openChat()" class="topbar-item">💬 Nhắn tin</a>
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
          <div class="header-phone">
            <a href="javascript:void(0)" onclick="window.__openChat()" style="cursor:pointer;text-decoration:none">
              💬 Nhắn tin tư vấn
            </a>
          </div>
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
          <div class="footer-phone">
            <a href="javascript:void(0)" onclick="window.__openChat()" style="color:var(--gold);cursor:pointer;text-decoration:none">
              💬 Nhắn tin báo giá ngay
            </a>
          </div>
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

// ================================================================
// STICKY CTA — Mobile: 3 nút đều mở chat (không gọi/mở app)
// ================================================================
export function renderStickyCTA() {
  const div = document.createElement('div');
  div.id = 'sticky-cta';
  div.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:800;display:none;background:#fff;border-top:2px solid #D1DCF0;padding:10px 16px;gap:8px';
  div.innerHTML = `
    <button onclick="window.__openChat()" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;border-radius:8px;background:linear-gradient(135deg,#1A56DB,#2563EB);color:#fff;font-weight:700;font-size:13px;border:none;cursor:pointer">💬 Nhắn tin</button>
    <button onclick="window.__openChat()" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;border-radius:8px;background:#0068FF;color:#fff;font-weight:700;font-size:13px;border:none;cursor:pointer">💙 Zalo</button>
    <button onclick="window.__openChat()" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;border-radius:8px;background:#25D366;color:#fff;font-weight:700;font-size:13px;border:none;cursor:pointer">📱 WhatsApp</button>`;
  document.body.appendChild(div);
  const update = () => { div.style.display = window.innerWidth <= 768 ? 'flex' : 'none'; };
  update(); window.addEventListener('resize', update);
  if (window.innerWidth <= 768) document.body.style.paddingBottom = '72px';
}

// ================================================================
// CHAT WIDGET — Live chat phễu tư vấn
// Quick Options: Báo giá · Đặt hàng · Hỏi thêm · Chat trực tiếp
// Sau tin đầu: xin phone/email để nhân viên gọi lại
// ================================================================
export async function renderChatWidget() {
  const style = document.createElement('style');
  style.textContent = `
    #chat-fab{position:fixed;bottom:80px;right:20px;z-index:900;width:58px;height:58px;border-radius:50%;background:linear-gradient(135deg,#1A56DB,#2563EB);border:none;cursor:pointer;box-shadow:0 4px 20px rgba(37,99,235,.5);display:flex;align-items:center;justify-content:center;font-size:26px;transition:transform .2s}
    #chat-fab:hover{transform:scale(1.12)}
    #chat-fab .chat-badge{position:absolute;top:-2px;right:-2px;background:#EF4444;color:#fff;border-radius:10px;font-size:10px;font-weight:700;padding:1px 5px;display:none}
    #chat-box{position:fixed;bottom:150px;right:20px;z-index:900;width:355px;max-width:calc(100vw - 32px);background:#fff;border-radius:18px;box-shadow:0 8px 40px rgba(0,0,0,.18);display:none;flex-direction:column;overflow:hidden;font-family:'Be Vietnam Pro',sans-serif}
    #chat-box.open{display:flex}
    .chat-head{background:linear-gradient(135deg,#1A56DB,#2563EB);color:#fff;padding:14px 16px;display:flex;align-items:center;gap:10px}
    .chat-head .av{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;font-size:18px}
    .chat-head .info{flex:1}.chat-head .info b{display:block;font-size:14px}
    .chat-head .info span{font-size:11px;opacity:.8}
    .chat-head .close-btn{background:none;border:none;color:#fff;font-size:22px;cursor:pointer;padding:0;line-height:1}
    #chat-quick-opts{padding:16px 14px 14px;background:#F8FAFF}
    #chat-quick-opts .greet{font-size:13px;color:#374151;margin:0 0 12px;text-align:center;line-height:1.6}
    .chat-opt-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}
    .chat-opt-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:13px 8px;border-radius:13px;border:1.5px solid #C7D7F8;background:#fff;cursor:pointer;font-size:12.5px;font-weight:600;color:#1e3a8a;line-height:1.35;transition:all .15s;text-align:center}
    .chat-opt-btn:hover{background:#EEF4FF;border-color:#2563EB;transform:translateY(-1px);box-shadow:0 3px 10px rgba(37,99,235,.15)}
    .chat-opt-btn .opt-icon{font-size:24px;line-height:1;margin-bottom:2px}
    .chat-msgs{flex:1;height:250px;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;background:#F8FAFF}
    .chat-msg{max-width:82%;padding:8px 12px;border-radius:12px;font-size:13px;line-height:1.55;word-break:break-word}
    .chat-msg.staff{background:#E8EFFE;color:#1e3a8a;align-self:flex-start;border-bottom-left-radius:4px}
    .chat-msg.guest{background:#2563EB;color:#fff;align-self:flex-end;border-bottom-right-radius:4px}
    .chat-msg.sys{background:#E0F2FE;color:#0369A1;align-self:center;font-size:12px;max-width:92%;text-align:center;border-radius:10px}
    .chat-msg .msg-meta{font-size:10px;opacity:.6;margin-top:3px}
    .chat-typing{font-size:12px;color:#6B7280;padding:0 12px 6px;min-height:20px}
    .chat-contact-bar{background:#FFF9E6;border-top:1px solid #FDE68A;padding:10px 12px;font-size:12px;color:#92400E}
    .chat-contact-bar p{margin:0 0 7px;font-weight:600}
    .chat-contact-bar .cb-row{display:flex;gap:6px;margin-bottom:6px}
    .chat-contact-bar input{flex:1;border:1px solid #FCD34D;border-radius:6px;padding:5px 8px;font-size:12px;outline:none;font-family:inherit}
    .chat-contact-bar button{background:#F59E0B;border:none;color:#fff;border-radius:6px;padding:5px 12px;cursor:pointer;font-size:12px;font-weight:600;white-space:nowrap}
    .chat-foot{padding:10px 12px;border-top:1px solid #E5E7EB;display:flex;gap:8px;background:#fff;align-items:flex-end}
    .chat-foot textarea{flex:1;border:1px solid #D1D5DB;border-radius:8px;padding:8px;font-size:13px;resize:none;height:38px;line-height:1.4;font-family:inherit;outline:none;transition:border-color .2s}
    .chat-foot textarea:focus{border-color:#2563EB}
    .chat-foot button{background:#2563EB;border:none;color:#fff;border-radius:8px;padding:0 14px;cursor:pointer;font-size:18px;transition:background .2s;height:38px;min-width:42px}
    .chat-foot button:hover{background:#1A56DB}
    @media(max-width:480px){#chat-box{bottom:80px;right:0;left:0;width:100%;border-radius:18px 18px 0 0}#chat-fab{bottom:90px}}
  `;
  document.head.appendChild(style);

  const QUICK_OPTS = [
    { icon: '💰', label: 'Hỏi bảng giá\n& báo giá',     msg: 'Tôi muốn hỏi bảng giá và nhận báo giá dịch vụ dịch thuật.' },
    { icon: '📋', label: 'Đặt hàng\ndịch thuật',          msg: 'Tôi muốn đặt hàng dịch thuật. Nhờ tư vấn quy trình.' },
    { icon: '❓', label: 'Hỏi thêm\nthông tin',           msg: 'Tôi muốn hỏi thêm thông tin về các dịch vụ của công ty.' },
    { icon: '💬', label: 'Chat trực tiếp\nvới tư vấn viên', msg: null },
  ];

  // FAB
  const fab = document.createElement('button');
  fab.id = 'chat-fab';
  fab.innerHTML = `💬<span class="chat-badge" id="chat-unread-badge"></span>`;
  fab.title = 'Nhắn tin tư vấn';

  // Box
  const box = document.createElement('div');
  box.id = 'chat-box';
  box.innerHTML = `
    <div class="chat-head">
      <div class="av">🧑‍💼</div>
      <div class="info"><b>Tư vấn viên Dịch Thuật Số Hóa</b><span>Phản hồi trong vài phút • T2–T7 8:00–17:30</span></div>
      <button class="close-btn" id="chat-close">✕</button>
    </div>
    <div id="chat-quick-opts">
      <p class="greet">👋 Xin chào! Bạn cần hỗ trợ gì?<br><span style="font-size:11px;color:#9CA3AF">Chọn nhanh hoặc nhập tin nhắn bên dưới</span></p>
      <div class="chat-opt-grid">
        ${QUICK_OPTS.map((o,i)=>`<button class="chat-opt-btn" data-idx="${i}"><span class="opt-icon">${o.icon}</span>${o.label.replace('\n','<br>')}</button>`).join('')}
      </div>
    </div>
    <div class="chat-msgs" id="chat-msgs" style="display:none"></div>
    <div class="chat-typing" id="chat-typing" style="display:none"></div>
    <div class="chat-contact-bar" id="chat-contact-bar" style="display:none">
      <p>📞 Để lại số điện thoại hoặc email — nhân viên sẽ liên hệ lại:</p>
      <div class="cb-row">
        <input type="tel" id="chat-phone-input" placeholder="Số điện thoại (Zalo/WhatsApp)">
        <button id="chat-phone-send">Gửi</button>
      </div>
      <div class="cb-row">
        <input type="email" id="chat-email-input" placeholder="Email nhận báo giá">
        <button id="chat-email-send">Gửi</button>
      </div>
    </div>
    <div class="chat-foot">
      <textarea id="chat-input" placeholder="Nhập tin nhắn..." rows="1"></textarea>
      <button id="chat-send">➤</button>
    </div>`;

  document.body.appendChild(fab);
  document.body.appendChild(box);

  // ── Global opener (dùng cho onclick="window.__openChat()" khắp web) ──
  window.__openChat = function(topic) {
    box.classList.add('open');
    document.getElementById('chat-unread-badge').style.display = 'none';
    if (topic) {
      const inp = document.getElementById('chat-input');
      if (inp) inp.value = topic;
    }
    document.getElementById('chat-input')?.focus();
    if (!convId) _maybeInit();
    else if (!unsubscribe) listenMessages();
  };

  let convId = localStorage.getItem('sohoa_conv_id') || null;
  let guestName = localStorage.getItem('sohoa_guest_name') || 'Khách';
  let unsubscribe = null;
  let msgCount = 0;
  let chatMode = false;

  // Returning visitor → skip quick opts
  if (convId) _enterChat();

  function _enterChat() {
    chatMode = true;
    document.getElementById('chat-quick-opts').style.display = 'none';
    document.getElementById('chat-msgs').style.display = 'flex';
    document.getElementById('chat-typing').style.display = 'block';
  }

  // FAB toggle
  fab.addEventListener('click', () => {
    box.classList.toggle('open');
    if (box.classList.contains('open')) {
      document.getElementById('chat-unread-badge').style.display = 'none';
      document.getElementById('chat-input')?.focus();
      if (!convId) _maybeInit();
      else if (!unsubscribe) listenMessages();
    }
  });
  document.getElementById('chat-close').addEventListener('click', () => box.classList.remove('open'));

  // Quick options
  box.querySelectorAll('.chat-opt-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const opt = QUICK_OPTS[parseInt(btn.dataset.idx)];
      _enterChat();
      if (opt.msg) await sendMessage(opt.msg);
      else document.getElementById('chat-input')?.focus();
    });
  });

  // Focus input → enter chat mode
  document.getElementById('chat-input').addEventListener('focus', () => {
    if (!chatMode) _enterChat();
  });

  function _maybeInit() {
    if (convId) { listenMessages(); return; }
    // Wait for first message before creating conversation
  }

  // Firebase
  async function getFS() {
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
    if (convId) return;
    const { db, collection, addDoc, serverTimestamp } = await getFS();
    const ref = await addDoc(collection(db, 'conversations'), {
      guestName, guestPhone: '', guestEmail: '',
      status: 'open', assignedTo: '', assignedName: '',
      unreadAdmin: 1, unreadGuest: 0,
      lastMessage: 'Bắt đầu cuộc trò chuyện',
      lastAt: serverTimestamp(), createdAt: serverTimestamp(),
      page: window.location.pathname,
    });
    convId = ref.id;
    localStorage.setItem('sohoa_conv_id', convId);
    listenMessages();
    // Auto greeting
    const fs2 = await getFS();
    await fs2.addDoc(fs2.collection(fs2.db, 'conversations', convId, 'messages'), {
      text: '👋 Nhân viên đã nhận tin nhắn và sẽ phản hồi sớm nhất trong giờ làm việc (T2–T7, 8:00–17:30). Bạn có thể để lại số điện thoại hoặc email bên dưới để chúng tôi chủ động liên hệ lại nhé!',
      sender: 'system', senderName: 'Bot', createdAt: fs2.serverTimestamp()
    });
  }

  async function listenMessages() {
    if (unsubscribe) return;
    const { db, collection, onSnapshot, orderBy, query } = await getFS();
    const q = query(collection(db, 'conversations', convId, 'messages'), orderBy('createdAt', 'asc'));
    unsubscribe = onSnapshot(q, snap => {
      const msgs = document.getElementById('chat-msgs');
      if (!msgs) return;
      msgs.innerHTML = '';
      let staffCount = 0;
      snap.forEach(d => {
        const m = d.data();
        if (m.sender === 'staff' || m.sender === 'admin') staffCount++;
        const div = document.createElement('div');
        const isGuest = m.sender === 'guest', isSys = m.sender === 'system';
        div.className = `chat-msg ${isSys ? 'sys' : isGuest ? 'guest' : 'staff'}`;
        const t = m.createdAt?.toDate ? m.createdAt.toDate().toLocaleTimeString('vi-VN',{hour:'2-digit',minute:'2-digit'}) : '';
        div.innerHTML = `${m.text}<div class="msg-meta">${isGuest||isSys ? '' : (m.senderName||'Nhân viên')+' · '}${t}</div>`;
        msgs.appendChild(div);
      });
      msgs.scrollTop = msgs.scrollHeight;
      // Hiện thanh liên hệ sau tin đầu tiên của khách
      if (msgCount > 0) document.getElementById('chat-contact-bar').style.display = 'block';
      // Badge khi box đóng
      if (!box.classList.contains('open') && staffCount > 0) {
        document.getElementById('chat-unread-badge').style.display = 'block';
        document.getElementById('chat-unread-badge').textContent = staffCount;
      }
    });
  }

  async function sendMessage(text) {
    if (!text.trim()) return;
    if (!chatMode) _enterChat();
    if (!convId) await initConversation();
    else if (!unsubscribe) await listenMessages();
    msgCount++;
    const { db, collection, addDoc, doc, updateDoc, serverTimestamp } = await getFS();
    await addDoc(collection(db, 'conversations', convId, 'messages'), {
      text: text.trim(), sender: 'guest', senderName: guestName, createdAt: serverTimestamp()
    });
    await updateDoc(doc(db, 'conversations', convId), {
      lastMessage: text.trim().substring(0,60), lastAt: serverTimestamp(), unreadAdmin: 1
    });
    document.getElementById('chat-contact-bar').style.display = 'block';
  }

  // Send
  document.getElementById('chat-send').addEventListener('click', async () => {
    const inp = document.getElementById('chat-input');
    await sendMessage(inp.value); inp.value = '';
  });
  document.getElementById('chat-input').addEventListener('keydown', async e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); await document.getElementById('chat-send').click(); }
  });

  // Phone submit
  document.getElementById('chat-phone-send').addEventListener('click', async () => {
    const phone = document.getElementById('chat-phone-input').value.trim();
    if (!phone) return;
    const { db, collection, addDoc, doc, updateDoc, serverTimestamp } = await getFS();
    await addDoc(collection(db, 'conversations', convId, 'messages'), {
      text: `📞 Số điện thoại (Zalo/WhatsApp): ${phone}`, sender: 'guest', senderName: guestName, createdAt: serverTimestamp()
    });
    await updateDoc(doc(db, 'conversations', convId), {
      guestPhone: phone, lastAt: serverTimestamp(), unreadAdmin: 1
    });
    document.getElementById('chat-phone-input').value = '';
    document.getElementById('chat-phone-input').placeholder = '✅ Đã lưu số: ' + phone;
    document.getElementById('chat-phone-send').disabled = true;
    localStorage.setItem('sohoa_guest_phone', phone);
  });

  // Email submit
  document.getElementById('chat-email-send').addEventListener('click', async () => {
    const email = document.getElementById('chat-email-input').value.trim();
    if (!email) return;
    const { db, collection, addDoc, doc, updateDoc, serverTimestamp } = await getFS();
    await addDoc(collection(db, 'conversations', convId, 'messages'), {
      text: `📧 Email nhận báo giá: ${email}`, sender: 'guest', senderName: guestName, createdAt: serverTimestamp()
    });
    await updateDoc(doc(db, 'conversations', convId), {
      guestEmail: email, lastAt: serverTimestamp(), unreadAdmin: 1
    });
    document.getElementById('chat-email-input').value = '';
    document.getElementById('chat-email-input').placeholder = '✅ Đã lưu: ' + email;
    document.getElementById('chat-email-send').disabled = true;
    localStorage.setItem('sohoa_guest_email', email);
  });

  // Handle pending open (called before widget loaded)
  if (window.__chatPendingOpen) {
    window.__openChat(typeof window.__chatPendingOpen === 'string' ? window.__chatPendingOpen : undefined);
    delete window.__chatPendingOpen;
  }
}

// ================================================================
// MODAL BÁO GIÁ NGAY — mở khi click nút đỏ "💰 Báo Giá Ngay"
// Form: SĐT · Email · Upload file (hoặc Google Drive) · Dịch vụ · Giao nhận · Ngày hoàn thành
// Gửi → lưu Firestore collection "quotes"
// ================================================================
(function() {

const CSS = `
  #baogia-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.55);display:none;align-items:center;justify-content:center;padding:16px}
  #baogia-overlay.open{display:flex}
  #baogia-box{background:#fff;border-radius:18px;width:100%;max-width:520px;max-height:90vh;overflow-y:auto;box-shadow:0 12px 48px rgba(0,0,0,.25);font-family:'Be Vietnam Pro',sans-serif}
  .bg-head{background:linear-gradient(135deg,#D72323,#FF4444);color:#fff;padding:18px 20px;border-radius:18px 18px 0 0;display:flex;align-items:center;justify-content:space-between}
  .bg-head h3{margin:0;font-size:17px;font-weight:700}
  .bg-head p{margin:4px 0 0;font-size:12px;opacity:.85}
  .bg-head .bg-close{background:none;border:none;color:#fff;font-size:24px;cursor:pointer;line-height:1;padding:0}
  .bg-body{padding:20px}
  .bg-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
  .bg-row.full{grid-template-columns:1fr}
  .bg-field{display:flex;flex-direction:column;gap:5px}
  .bg-field label{font-size:12px;font-weight:600;color:#374151}
  .bg-field input,.bg-field select,.bg-field input[type=date]{border:1.5px solid #D1D5DB;border-radius:8px;padding:9px 11px;font-size:13px;outline:none;font-family:inherit;transition:border-color .2s;width:100%;box-sizing:border-box}
  .bg-field input:focus,.bg-field select:focus{border-color:#D72323}
  .bg-field .hint{font-size:11px;color:#9CA3AF;margin-top:2px}
  .bg-section{font-size:12px;font-weight:700;color:#6B7280;text-transform:uppercase;letter-spacing:.5px;margin:16px 0 10px;padding-bottom:6px;border-bottom:1px solid #F3F4F6}
  /* Upload zone */
  .bg-upload-zone{border:2px dashed #D1D5DB;border-radius:10px;padding:16px;text-align:center;cursor:pointer;transition:border-color .2s;background:#FAFAFA;position:relative}
  .bg-upload-zone:hover{border-color:#D72323;background:#FFF5F5}
  .bg-upload-zone input[type=file]{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}
  .bg-upload-zone .uz-icon{font-size:28px;margin-bottom:6px}
  .bg-upload-zone .uz-text{font-size:13px;color:#6B7280;font-weight:600}
  .bg-upload-zone .uz-sub{font-size:11px;color:#9CA3AF;margin-top:3px}
  .bg-upload-list{margin-top:8px;display:flex;flex-direction:column;gap:4px}
  .bg-upload-item{display:flex;align-items:center;gap:7px;background:#F0FDF4;border:1px solid #BBF7D0;border-radius:6px;padding:5px 9px;font-size:12px;color:#166534}
  .bg-upload-item .rm{background:none;border:none;color:#DC2626;cursor:pointer;font-size:14px;margin-left:auto;padding:0;line-height:1}
  /* Google Drive tip */
  .bg-gdrive-tip{background:#EFF6FF;border:1px solid #BFDBFE;border-radius:10px;padding:12px 14px;margin-top:10px;font-size:12px;color:#1e40af;line-height:1.7}
  .bg-gdrive-tip b{display:block;margin-bottom:4px;font-size:13px}
  .bg-gdrive-tip .gdrive-btn{display:inline-flex;align-items:center;gap:5px;margin-top:8px;background:#4285F4;color:#fff;border:none;border-radius:6px;padding:6px 12px;font-size:12px;font-weight:600;cursor:pointer;text-decoration:none}
  /* Checkbox options */
  .bg-checks{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:4px}
  .bg-check{display:flex;align-items:center;gap:8px;padding:10px 12px;border:1.5px solid #E5E7EB;border-radius:10px;cursor:pointer;transition:all .15s;font-size:13px;font-weight:500;color:#374151;user-select:none}
  .bg-check:hover{border-color:#D72323;background:#FFF5F5}
  .bg-check input{display:none}
  .bg-check.checked{border-color:#D72323;background:#FFF5F5;color:#D72323;font-weight:700}
  .bg-check .ck-icon{font-size:18px}
  /* Delivery address */
  #bg-delivery-addr{margin-top:8px;display:none}
  #bg-delivery-addr input{width:100%;box-sizing:border-box}
  /* Submit */
  .bg-submit{width:100%;padding:14px;background:linear-gradient(135deg,#D72323,#FF4444);color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;margin-top:16px;transition:opacity .2s;font-family:inherit}
  .bg-submit:hover{opacity:.9}
  .bg-submit:disabled{opacity:.6;cursor:not-allowed}
  .bg-success{text-align:center;padding:32px 20px}
  .bg-success .sc-icon{font-size:52px;margin-bottom:12px}
  .bg-success h4{font-size:18px;font-weight:700;color:#065F46;margin:0 0 8px}
  .bg-success p{font-size:13px;color:#6B7280;line-height:1.7;margin:0}
  @media(max-width:480px){.bg-row{grid-template-columns:1fr}.bg-checks{grid-template-columns:1fr}}
`;

const HTML = `
<div id="baogia-overlay">
  <div id="baogia-box">
    <div class="bg-head">
      <div>
        <h3>💰 Yêu Cầu Báo Giá</h3>
        <p>Điền thông tin — nhân viên báo giá trong 5 phút</p>
      </div>
      <button class="bg-close" id="bg-close">✕</button>
    </div>
    <div class="bg-body" id="bg-body">

      <div class="bg-section">Thông tin liên hệ</div>
      <div class="bg-row">
        <div class="bg-field">
          <label>Họ tên</label>
          <input type="text" id="bg-name" placeholder="Nguyễn Văn A">
        </div>
        <div class="bg-field">
          <label>Số điện thoại *</label>
          <input type="tel" id="bg-phone" placeholder="09xx.xxx.xxx" required>
          <span class="hint">Zalo / WhatsApp để nhận báo giá</span>
        </div>
      </div>
      <div class="bg-row full">
        <div class="bg-field">
          <label>Email</label>
          <input type="email" id="bg-email" placeholder="email@example.com">
          <span class="hint">Nhận báo giá & hóa đơn qua email</span>
        </div>
      </div>

      <div class="bg-section">Tài liệu cần dịch</div>
      <div class="bg-upload-zone" id="bg-upload-zone">
        <input type="file" id="bg-file-input" multiple accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip,.rar">
        <div class="uz-icon">📎</div>
        <div class="uz-text">Nhấn để chọn file hoặc kéo thả vào đây</div>
        <div class="uz-sub">PDF, Word, ảnh — tối đa 10MB/file</div>
      </div>
      <div class="bg-upload-list" id="bg-upload-list"></div>

      <div class="bg-gdrive-tip" id="bg-gdrive-tip" style="display:none">
        <b>📁 File lớn hơn 10MB?</b>
        Vui lòng upload lên <strong>Google Drive</strong> và chia sẻ với chúng tôi:<br>
        ① Upload file lên Google Drive của bạn<br>
        ② Click chuột phải → <em>Chia sẻ</em> → Thêm email: <strong>sohoavn@gmail.com</strong><br>
        ③ Dán link Google Drive vào ô bên dưới:
        <div style="margin-top:8px">
          <input type="text" id="bg-gdrive-link" placeholder="https://drive.google.com/..." style="width:100%;box-sizing:border-box;border:1.5px solid #BFDBFE;border-radius:6px;padding:7px 10px;font-size:12px;outline:none;font-family:inherit">
        </div>
      </div>
      <button type="button" id="bg-gdrive-toggle" style="margin-top:8px;background:none;border:1.5px dashed #93C5FD;border-radius:8px;width:100%;padding:8px;font-size:12px;color:#2563EB;cursor:pointer;font-family:inherit">
        📁 File lớn? Upload Google Drive & chia sẻ với chúng tôi →
      </button>

      <div class="bg-section">Dịch vụ yêu cầu</div>
      <div class="bg-checks" id="bg-services">
        <label class="bg-check" data-val="Dịch thuật"><input type="checkbox"><span class="ck-icon">📝</span>Dịch thuật</label>
        <label class="bg-check" data-val="Dịch thuật + Công chứng"><input type="checkbox"><span class="ck-icon">🔏</span>Dịch thuật + Công chứng</label>
        <label class="bg-check" data-val="Hợp pháp hóa lãnh sự"><input type="checkbox"><span class="ck-icon">🏛️</span>Hợp pháp hóa lãnh sự</label>
        <label class="bg-check" data-val="Đánh máy / Nhập liệu"><input type="checkbox"><span class="ck-icon">⌨️</span>Đánh máy / Nhập liệu</label>
      </div>

      <div class="bg-section">Nhận hàng</div>
      <div class="bg-checks" id="bg-delivery">
        <label class="bg-check" data-val="Lấy tại văn phòng"><input type="checkbox"><span class="ck-icon">🏢</span>Lấy tại văn phòng</label>
        <label class="bg-check" data-val="Giao hàng tận nơi"><input type="checkbox"><span class="ck-icon">🛵</span>Giao hàng tận nơi</label>
      </div>
      <div id="bg-delivery-addr">
        <div class="bg-field">
          <label>Địa chỉ giao hàng *</label>
          <input type="text" id="bg-addr" placeholder="Số nhà, đường, phường, quận, TP...">
        </div>
      </div>

      <div class="bg-section">Ngày hoàn thành mong muốn</div>
      <div class="bg-row full">
        <div class="bg-field">
          <input type="date" id="bg-date">
          <span class="hint">Để trống nếu cần càng sớm càng tốt</span>
        </div>
      </div>

      <div class="bg-row full">
        <div class="bg-field">
          <label>Ghi chú thêm</label>
          <input type="text" id="bg-note" placeholder="Loại giấy tờ, ngôn ngữ, yêu cầu đặc biệt...">
        </div>
      </div>

      <button class="bg-submit" id="bg-submit">🚀 Gửi Yêu Cầu Báo Giá</button>
    </div>
  </div>
</div>
`;

// Inject style + HTML
const s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s);
document.body.insertAdjacentHTML('beforeend', HTML);

const overlay = document.getElementById('baogia-overlay');
const gdriveTip = document.getElementById('bg-gdrive-tip');
let selectedFiles = [];

// Open/close
window.__openBaoGia = function() { overlay.classList.add('open'); };
document.getElementById('bg-close').addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

// File upload
const fileInput = document.getElementById('bg-file-input');
const uploadList = document.getElementById('bg-upload-list');
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

fileInput.addEventListener('change', () => {
  Array.from(fileInput.files).forEach(f => {
    if (f.size > MAX_SIZE) {
      gdriveTip.style.display = 'block';
      return;
    }
    if (!selectedFiles.find(x => x.name === f.name)) selectedFiles.push(f);
  });
  renderFileList();
  fileInput.value = '';
});

function renderFileList() {
  uploadList.innerHTML = selectedFiles.map((f,i) => `
    <div class="bg-upload-item">
      📄 ${f.name} <span style="color:#6B7280">(${(f.size/1024).toFixed(0)}KB)</span>
      <button class="rm" data-i="${i}">✕</button>
    </div>`).join('');
  uploadList.querySelectorAll('.rm').forEach(btn => {
    btn.addEventListener('click', () => { selectedFiles.splice(+btn.dataset.i, 1); renderFileList(); });
  });
}

// Google Drive toggle
document.getElementById('bg-gdrive-toggle').addEventListener('click', () => {
  gdriveTip.style.display = gdriveTip.style.display === 'none' ? 'block' : 'none';
});

// Checkbox toggles (single-select per group for delivery, multi for services)
document.querySelectorAll('#bg-services .bg-check').forEach(lbl => {
  lbl.addEventListener('click', () => { lbl.classList.toggle('checked'); lbl.querySelector('input').checked = lbl.classList.contains('checked'); });
});

document.querySelectorAll('#bg-delivery .bg-check').forEach(lbl => {
  lbl.addEventListener('click', () => {
    document.querySelectorAll('#bg-delivery .bg-check').forEach(l => { l.classList.remove('checked'); l.querySelector('input').checked = false; });
    lbl.classList.add('checked'); lbl.querySelector('input').checked = true;
    document.getElementById('bg-delivery-addr').style.display = lbl.dataset.val === 'Giao hàng tận nơi' ? 'block' : 'none';
  });
});

// Submit
document.getElementById('bg-submit').addEventListener('click', async () => {
  const phone = document.getElementById('bg-phone').value.trim();
  if (!phone) { document.getElementById('bg-phone').focus(); document.getElementById('bg-phone').style.borderColor='#D72323'; return; }

  const services = [...document.querySelectorAll('#bg-services .bg-check.checked')].map(l => l.dataset.val);
  const delivery = document.querySelector('#bg-delivery .bg-check.checked')?.dataset.val || '';
  const addr = document.getElementById('bg-addr').value.trim();
  if (delivery === 'Giao hàng tận nơi' && !addr) { document.getElementById('bg-addr').focus(); document.getElementById('bg-addr').style.borderColor='#D72323'; return; }

  const btn = document.getElementById('bg-submit');
  btn.disabled = true; btn.textContent = '⏳ Đang gửi...';

  const payload = {
    name: document.getElementById('bg-name').value.trim(),
    phone,
    email: document.getElementById('bg-email').value.trim(),
    services: services.join(', ') || 'Chưa chọn',
    delivery,
    deliveryAddr: addr,
    deadline: document.getElementById('bg-date').value || 'Càng sớm càng tốt',
    note: document.getElementById('bg-note').value.trim(),
    gdriveLink: document.getElementById('bg-gdrive-link')?.value.trim() || '',
    fileNames: selectedFiles.map(f => f.name).join(', '),
    page: window.location.pathname,
    status: 'new',
    createdAt: null,
  };

  try {
    const { initializeApp, getApps } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, collection, addDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const app = getApps().length ? getApps()[0] : initializeApp({
      apiKey:"AIzaSyCkyAJJm-kj6JReuGOcy1kj3RHn5hqRWwo",
      authDomain:"sohoa-baafc.firebaseapp.com",
      projectId:"sohoa-baafc"
    });
    const db = getFirestore(app);
    payload.createdAt = serverTimestamp();
    await addDoc(collection(db, 'quotes'), payload);

    // Success screen
    document.getElementById('bg-body').innerHTML = `
      <div class="bg-success">
        <div class="sc-icon">✅</div>
        <h4>Yêu cầu đã được gửi!</h4>
        <p>Chúng tôi sẽ báo giá qua <strong>Zalo/WhatsApp ${phone}</strong>${payload.email ? ` hoặc email <strong>${payload.email}</strong>` : ''} trong vòng <strong>5–15 phút</strong> trong giờ làm việc.<br><br>
        Văn phòng: 35 Nguyễn Văn Tráng, Q.1, TP.HCM<br>T2–T7 · 8:00–17:30</p>
        <button onclick="document.getElementById('baogia-overlay').classList.remove('open')" style="margin-top:20px;padding:11px 28px;background:#D72323;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit">Đóng</button>
      </div>`;
  } catch(err) {
    btn.disabled = false; btn.textContent = '🚀 Gửi Yêu Cầu Báo Giá';
    alert('Có lỗi xảy ra, vui lòng thử lại hoặc nhắn tin trực tiếp qua chat.');
    console.error(err);
  }
});

})();
