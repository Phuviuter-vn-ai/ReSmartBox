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
    poster: "Anh_lap_dat/1793058593230_2398951114998525015_g8308076797534140497_6dd2fde8cee98170dfd0bf63b41ec104.jpg",
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

document.querySelector("#year").textContent = new Date().getFullYear();
