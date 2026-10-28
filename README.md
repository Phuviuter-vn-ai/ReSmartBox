# ReSmartBox landing page

Static Vietnamese landing page for the ReSmartBox project, including 16 trial
certificates and six sponsorship certificates.

## Publish with GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the site whenever code is pushed to `main`.

1. Push the website files and folders to the `main` branch of the GitHub repository.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Open **Actions** and wait for **Publish ReSmartBox landing page** to complete.
4. The deployed URL will appear in the workflow run and in **Settings → Pages**.

The site uses the custom domain `resmartbox.com`, recorded in `CNAME`. In the
domain registrar's DNS settings, point the apex domain to GitHub Pages with A
records for `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and
`185.199.111.153`. Point `www` to `phuviuter-vn-ai.github.io` with a CNAME
record. After DNS propagates, verify the custom domain in **Settings → Pages**
and enable **Enforce HTTPS** when GitHub makes it available.

Keep the `Anh_lap_dat`, `Anh_thanhvien_va_chuyengia`, `video_demo`, and
`Minh Chứng` folders in the repository so the page can load its images,
videos, and supporting documents. Each certificate in the evidence archive
opens its full-resolution original in a new tab.
The document archive initially shows six records; visitors can expand the list
or use the search and category filters to find more.

The restaurant demo uses `video_demo/videodemosanpham_nhaHang.mp4`. Its poster
uses the Eden Restaurant trial photo so the restaurant tab is recognizable
before playback.
