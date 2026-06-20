// Shared header + footer for all YCompass pages.
// Each page sets <body data-page="..."> to highlight the active nav item.

const HEADER_HTML = `
<header class="site-header" id="header">
  <div class="container header-inner">
    <a href="index.html" class="brand" aria-label="YCompass trang chủ">
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="28" height="28">
          <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M16 5 L20 16 L16 27 L12 16 Z" fill="var(--gold)"/>
          <circle cx="16" cy="16" r="2.2" fill="#fff"/>
        </svg>
      </span>
      <span class="brand-text">Y<span>Compass</span></span>
    </a>

    <nav class="main-nav" aria-label="Điều hướng chính">
      <ul class="nav-list">
        <li class="nav-item has-menu" data-nav="resources">
          <button class="nav-link" aria-expanded="false">Tài nguyên <span class="caret"></span></button>
          <div class="dropdown mega">
            <div class="mega-col">
              <span class="mega-title">Nội dung</span>
              <a href="resources.html">Bài viết</a>
              <a href="resources.html">Video</a>
              <a href="resources.html">Podcast</a>
              <a href="resources.html">Sách trắng</a>
              <a href="resources.html">Báo cáo</a>
            </div>
            <div class="mega-col">
              <span class="mega-title">Tư liệu chuyên sâu</span>
              <a href="resources.html">Bản ghi hội thảo</a>
              <a href="resources.html">Webcast theo yêu cầu</a>
              <a href="resources.html">Case study</a>
              <a href="resources.html">Thư viện YCompass</a>
            </div>
            <a class="mega-feature" href="resources.html">
              <span class="thumb">
                <svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="240" height="130" fill="#161B27"/>
                  <rect x="74" y="28" width="92" height="74" rx="6" fill="#6A2EC9"/>
                  <rect x="62" y="38" width="92" height="74" rx="6" fill="#fff" opacity=".92"/>
                  <rect x="74" y="52" width="58" height="6" rx="3" fill="#161B27"/>
                  <rect x="74" y="66" width="68" height="5" rx="2.5" fill="#9aa0b0"/>
                  <rect x="74" y="77" width="50" height="5" rx="2.5" fill="#9aa0b0"/>
                  <circle cx="150" cy="86" r="14" fill="#F4B400"/>
                  <path d="M145 86 l4 4 l7 -8" fill="none" stroke="#161B27" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="fcap"><strong>Thư viện YCompass</strong><span>Kho insight chuyên gia, sẵn sàng mọi lúc →</span></span>
            </a>
          </div>
        </li>
        <li class="nav-item has-menu" data-nav="business">
          <button class="nav-link" aria-expanded="false">Dành cho Doanh nghiệp <span class="caret"></span></button>
          <div class="dropdown">
            <a href="business.html">Giải pháp cho doanh nghiệp</a>
            <a href="business.html#how">Cách thức hoạt động</a>
            <a href="industries.html">Lĩnh vực phục vụ</a>
            <a href="business.html#cases">Câu chuyện khách hàng</a>
          </div>
        </li>
        <li class="nav-item has-menu" data-nav="experts">
          <button class="nav-link" aria-expanded="false">Dành cho Chuyên gia <span class="caret"></span></button>
          <div class="dropdown">
            <a href="experts.html">Trở thành chuyên gia</a>
            <a href="experts.html">Cách thức hoạt động</a>
            <a href="experts.html">Câu hỏi thường gặp</a>
            <a href="experts.html">Giới thiệu chuyên gia</a>
            <a href="experts.html">Tuân thủ</a>
          </div>
        </li>
        <li class="nav-item has-menu" data-nav="about">
          <button class="nav-link" aria-expanded="false">Về chúng tôi <span class="caret"></span></button>
          <div class="dropdown">
            <a href="about.html">Câu chuyện của chúng tôi</a>
            <a href="about.html">Ban lãnh đạo</a>
            <a href="about.html">Hội đồng quản trị</a>
            <a href="about.html">Phạm vi toàn cầu</a>
            <a href="about.html">Trách nhiệm xã hội</a>
            <a href="about.html">Tin tức</a>
          </div>
        </li>
        <li class="nav-item has-menu" data-nav="careers">
          <button class="nav-link" aria-expanded="false">Tuyển dụng <span class="caret"></span></button>
          <div class="dropdown">
            <a href="careers.html">Cơ hội nghề nghiệp</a>
            <a href="careers.html">Văn hóa & con người</a>
            <a href="careers.html">Phúc lợi</a>
          </div>
        </li>
      </ul>
    </nav>

    <div class="header-actions">
      <a href="index.html#contact" class="link-login">Đăng nhập / Đăng ký</a>
      <button class="menu-toggle" aria-label="Mở menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <span class="brand-text">Y<span>Compass</span></span>
      <p>Nền tảng hàng đầu cho chuyên môn con người đáng tin cậy, đồng hành cùng doanh nghiệp Việt ra quyết định tốt hơn.</p>
    </div>
    <div class="footer-col">
      <h5>Khám phá</h5>
      <a href="industries.html">Lĩnh vực</a>
      <a href="resources.html">Tài nguyên</a>
      <a href="experts.html">Chuyên gia</a>
    </div>
    <div class="footer-col">
      <h5>Công ty</h5>
      <a href="about.html">Về chúng tôi</a>
      <a href="careers.html">Tuyển dụng</a>
      <a href="index.html#contact">Liên hệ</a>
    </div>
    <div class="footer-col">
      <h5>Liên hệ</h5>
      <a href="mailto:yen@ycompass.vn">yen@ycompass.vn</a>
      <a href="https://ycompass.vn">ycompass.vn</a>
      <a href="experts.html">Trở thành chuyên gia</a>
    </div>
  </div>
  <div class="container footer-bottom">
    <p>© 2026 YCompass. Bảo lưu mọi quyền.</p>
    <div class="footer-legal">
      <a href="#">Chính sách bảo mật</a>
      <a href="#">Điều khoản sử dụng</a>
    </div>
  </div>
</footer>`;

(function () {
  const h = document.getElementById('site-header');
  const f = document.getElementById('site-footer');
  if (h) h.outerHTML = HEADER_HTML;
  if (f) f.outerHTML = FOOTER_HTML;

  // Highlight active top-level nav item
  const page = document.body.dataset.page;
  if (page) {
    const active = document.querySelector('.nav-item[data-nav="' + page + '"] .nav-link');
    if (active) active.classList.add('active');
  }
})();
