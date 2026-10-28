const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mainNav?.classList.toggle("is-open", !isExpanded);
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("is-open");
  });
});

const demoVideos = {
  photobooth: {
    src: "video_demo/videodemosanpham_Phototbooth.mp4",
    poster: "Anh_lap_dat/photobooth/02-dang-chup.png",
    title: "Photobooth",
  },
  "virtual-nurse": {
    src: "video_demo/videodemosanpham_virtual-nurse.mp4",
    poster: "Anh_lap_dat/virtual-nurse/02-tro-chuyen.png",
    title: "Virtual Nurse",
  },
  nhaHang: {
    src: "video_demo/videodemosanpham_nhaHang.mp4",
    poster: "Minh Chứng/Đã thử nghiệm/Eden Restaurant - Hai san Eden (anh mat tien).jpg",
    title: "Nhà hàng",
  },
};

const demoVideo = document.querySelector(".demo-video");
const demoTitle = document.querySelector("#demo-title");

document.querySelectorAll(".demo-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const demo = demoVideos[tab.dataset.video];
    if (!demo || !demoVideo || !demoTitle) return;

    document.querySelectorAll(".demo-tab").forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    demoVideo.pause();
    demoVideo.src = demo.src;
    demoVideo.poster = demo.poster;
    demoVideo.load();
    demoTitle.textContent = demo.title;
  });
});

const trialDocuments = [
  { name: "Bích tóc", category: "Dịch vụ làm đẹp", file: "Bich toc.png" },
  { name: "Công ty Cổ phần Hoàng Anh Agritech", category: "Nông nghiệp & doanh nghiệp", file: "Cong ty CP Hoang Anh Agritech.png" },
  { name: "Công ty Cổ phần Thương mại Thái Kim", category: "Thương mại & đồ uống", file: "Cong ty CP Thuong mai Thai Kim.png" },
  { name: "Công ty TNHH Thương mại và Dịch vụ Vilafa", category: "Doanh nghiệp & dịch vụ", file: "Cong ty TNHH TM va DV Vilafa.png" },
  { name: "DAV Media", category: "Truyền thông & quảng cáo", file: "DAV Media.png" },
  { name: "Eden Restaurant – Hải sản Eden", category: "Nhà hàng & ẩm thực", file: "Eden Restaurant - Hai san Eden.png" },
  { name: "Lima Coffee and Tea House", category: "Cà phê & đồ uống", file: "Lima coffee and tea house.png" },
  { name: "Mini Mart Tuấn Hậu", category: "Cửa hàng tiện lợi", file: "Mini Mart Tuan Hau.png" },
  { name: "Nhà văn hóa tổ 3, phường Phúc Yên", category: "Không gian cộng đồng", file: "Nha van hoa to 3 phuong Phuc Yen.png" },
  { name: "Phòng khám gia đình", category: "Y tế & chăm sóc sức khỏe", file: "Phong kham gia dinh.png" },
  { name: "Phúc Yên Hotel", category: "Khách sạn & lưu trú", file: "Phuc Yen Hotel.png" },
  { name: "Quân Dung Mobile", category: "Công nghệ & bán lẻ", file: "Quan Dung Mobile.png" },
  { name: "Trạm dừng nghỉ Phước An", category: "Dịch vụ & điểm dừng nghỉ", file: "Tram dung nghi Phuoc An.png" },
  { name: "Trường THCS Phúc Yên", category: "Giáo dục & thư viện", file: "Truong THCS Phuc Yen.jpg" },
  { name: "Trường THPT Hai Bà Trưng", category: "Giáo dục & thư viện", file: "Truong THPT Hai Ba Trung.png" },
  { name: "Tuan Agency", category: "Truyền thông & quảng cáo", file: "Tuan Agency.png" },
].map((document) => ({
  ...document,
  group: "trial",
  groupLabel: "ĐƠN VỊ DÙNG THỬ",
  path: `Minh Chứng/Đã thử nghiệm/${document.file}`,
}));

const sponsorDocuments = [
  {
    name: "Công ty Cổ phần Hoàng Anh Agritech",
    category: "Nông nghiệp & doanh nghiệp",
    file: "Cong ty CP Hoang Anh Agritech.png",
  },
  {
    name: "Công ty Cổ phần Thương mại Thái Kim",
    category: "Thương mại & đồ uống",
    file: "Cong ty CP Thuong mai Thai Kim.png",
  },
  {
    name: "Công ty TNHH Dịch vụ Bảo vệ Chuyên nghiệp An Ninh Việt Nam",
    category: "An ninh & dịch vụ",
    file: "Cong ty TNHH DV Bao ve Chuyen nghiep An Ninh Viet Nam.png",
  },
  {
    name: "Công ty TNHH Thương mại và Dịch vụ Vilafa",
    category: "Doanh nghiệp & dịch vụ",
    file: "Cong ty TNHH TM va DV Vilafa.png",
  },
  { name: "DAV Media", category: "Truyền thông & quảng cáo", file: "DAV Media.png" },
  { name: "Trạm dừng nghỉ Phước An", category: "Dịch vụ & điểm dừng nghỉ", file: "Tram dung nghi Phuoc An.png" },
].map((document) => ({
  ...document,
  group: "sponsor",
  groupLabel: "ĐƠN VỊ TÀI TRỢ",
  path: `Minh Chứng/Tài trợ/${document.file}`,
}));

const sponsors = [
  {
    name: "Công ty Cổ phần Hoàng Anh Agritech",
    mark: "HA",
    logo: "Minh Chứng/Tài trợ/Cong ty CP Hoang Anh Agritech (logo).png",
    contribution: "100 TV Box đã qua sử dụng · quy đổi 20 triệu đồng",
    document: sponsorDocuments[0],
  },
  {
    name: "Công ty Cổ phần Thương mại Thái Kim",
    mark: "TK",
    contribution: "50 TV Box đã qua sử dụng · quy đổi 10 triệu đồng",
    document: sponsorDocuments[1],
  },
  {
    name: "Công ty TNHH DV Bảo vệ Chuyên nghiệp An Ninh Việt Nam",
    mark: "AN",
    logo: "Minh Chứng/Tài trợ/Cong ty TNHH DV Bao ve Chuyen nghiep An Ninh Viet Nam (logo ngang).png",
    contribution: "Tài trợ tiền mặt · 20 triệu đồng",
    document: sponsorDocuments[2],
  },
  {
    name: "Công ty TNHH Thương mại và Dịch vụ Vilafa",
    mark: "VI",
    contribution: "100 TV Box đã qua sử dụng · quy đổi 20 triệu đồng",
    document: sponsorDocuments[3],
  },
  {
    name: "DAV Media",
    mark: "DAV",
    logo: "Minh Chứng/Tài trợ/DAV Media (logo).png",
    contribution: "30 TV Box đã qua sử dụng",
    document: sponsorDocuments[4],
  },
  {
    name: "Trạm dừng nghỉ Phước An",
    mark: "PA",
    contribution: "Đồng hành với 100 TV Box đã qua sử dụng",
    document: sponsorDocuments[5],
  },
];

const encodeAssetPath = (path) => path.split("/").map(encodeURIComponent).join("/");
const allDocuments = [...trialDocuments, ...sponsorDocuments];
const evidenceGrid = document.querySelector("#evidence-grid");
const evidenceSearch = document.querySelector("#evidence-search");
const evidenceResult = document.querySelector("#evidence-result");
const evidenceEmpty = document.querySelector("#evidence-empty");
const evidenceToggle = document.querySelector("#evidence-toggle");
const evidenceToggleLabel = document.querySelector("#evidence-toggle-label");
const partnerGrid = document.querySelector("#partner-grid");
const evidenceFilters = document.querySelectorAll(".evidence-filter");
let activeEvidenceFilter = "all";
let evidenceExpanded = false;
const initialEvidenceLimit = 6;

if (evidenceGrid && partnerGrid) {
  evidenceGrid.innerHTML = allDocuments.map((item, index) => {
    const path = encodeAssetPath(item.path);
    const description = `${item.name} — ${item.category}`;

    return `
      <article class="evidence-card" data-group="${item.group}" data-search="${description.toLocaleLowerCase("vi")}">
        <a class="document-preview" href="${path}" target="_blank" rel="noopener noreferrer" aria-label="Mở giấy xác nhận của ${item.name} ở kích thước đầy đủ">
          <img src="${path}" alt="Giấy xác nhận của ${item.name}" loading="lazy" decoding="async">
          <span class="preview-action">Mở bản gốc <svg><use href="#icon-arrow"/></svg></span>
        </a>
        <div class="document-copy">
          <div class="document-meta"><span class="document-kind ${item.group}">${item.groupLabel}</span><span class="document-index">${String(index + 1).padStart(2, "0")}</span></div>
          <h4>${item.name}</h4>
          <p>${item.category}</p>
          <a class="document-link" href="${path}" target="_blank" rel="noopener noreferrer">Xem giấy xác nhận <svg><use href="#icon-arrow"/></svg></a>
        </div>
      </article>`;
  }).join("");

  partnerGrid.innerHTML = sponsors.map((partner) => {
    const documentPath = encodeAssetPath(partner.document.path);
    const logo = partner.logo
      ? `<img src="${encodeAssetPath(partner.logo)}" alt="" loading="lazy" decoding="async">`
      : `<span class="partner-monogram" aria-hidden="true">${partner.mark}</span>`;

    return `
      <article class="partner-card">
        <div class="partner-brand">${logo}</div>
        <div class="partner-content">
          <span class="partner-label">ĐƠN VỊ TÀI TRỢ</span>
          <h4>${partner.name}</h4>
          <p>${partner.contribution}</p>
          <a href="${documentPath}" target="_blank" rel="noopener noreferrer">Giấy xác nhận tài trợ <svg><use href="#icon-arrow"/></svg></a>
        </div>
      </article>`;
  }).join("");
}

const updateEvidenceList = () => {
  const query = evidenceSearch?.value.trim().toLocaleLowerCase("vi") ?? "";
  const matchingCards = [...(evidenceGrid?.querySelectorAll(".evidence-card") ?? [])].filter((card) => {
    const matchesGroup = activeEvidenceFilter === "all" || card.dataset.group === activeEvidenceFilter;
    const matchesQuery = card.dataset.search.includes(query);
    return matchesGroup && matchesQuery;
  });
  const visibleCount = evidenceExpanded
    ? matchingCards.length
    : Math.min(matchingCards.length, initialEvidenceLimit);
  const visibleCards = new Set(matchingCards.slice(0, visibleCount));

  evidenceGrid?.querySelectorAll(".evidence-card").forEach((card) => {
    card.hidden = !visibleCards.has(card);
  });

  if (evidenceResult) evidenceResult.textContent = `Đang hiển thị ${visibleCount} / ${matchingCards.length} giấy xác nhận`;
  if (evidenceEmpty) evidenceEmpty.hidden = matchingCards.length > 0;
  if (evidenceToggle && evidenceToggleLabel) {
    evidenceToggle.hidden = matchingCards.length <= initialEvidenceLimit;
    evidenceToggle.setAttribute("aria-expanded", String(evidenceExpanded));
    evidenceToggleLabel.textContent = evidenceExpanded
      ? "Thu gọn danh sách"
      : `Xem tất cả ${matchingCards.length} giấy xác nhận`;
  }
};

evidenceSearch?.addEventListener("input", () => {
  evidenceExpanded = false;
  updateEvidenceList();
});
evidenceToggle?.addEventListener("click", () => {
  evidenceExpanded = !evidenceExpanded;
  updateEvidenceList();
});
evidenceFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    evidenceExpanded = false;
    activeEvidenceFilter = filter.dataset.filter;
    evidenceFilters.forEach((item) => {
      const isActive = item === filter;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    updateEvidenceList();
  });
});
updateEvidenceList();

document.querySelector("#year").textContent = new Date().getFullYear();
