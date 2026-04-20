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
        <a href="https://zalo.me/84778752214" class="topbar-item">💬 Zalo</a>
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
          <div class="header-phone"><a href="tel:0778752214">0778.752.214</a></div>
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
          <div class="footer-phone"><a href="tel:0778752214" style="color:var(--gold)">0778.752.214</a></div>
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
    <a href="tel:0778752214" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;border-radius:8px;background:#D72323;color:#fff;font-weight:700;font-size:13px">📞 Gọi ngay</a>
    <a href="https://zalo.me/84778752214" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;border-radius:8px;background:#0068FF;color:#fff;font-weight:700;font-size:13px">💬 Zalo</a>
    <a href="https://wa.me/84909108890" style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:12px;border-radius:8px;background:#25D366;color:#fff;font-weight:700;font-size:13px">WhatsApp</a>`;
  document.body.appendChild(div);
  const update = () => { div.style.display = window.innerWidth <= 768 ? 'flex' : 'none'; };
  update(); window.addEventListener('resize', update);
  if (window.innerWidth <= 768) document.body.style.paddingBottom = '72px';
}
