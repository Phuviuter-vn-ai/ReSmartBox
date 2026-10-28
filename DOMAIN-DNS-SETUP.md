# Cấu hình tên miền `resmartbox.com`

Tài liệu này dành cho agent có quyền quản lý tên miền. Mục tiêu là trỏ
`resmartbox.com` và `www.resmartbox.com` tới website GitHub Pages của
ReSmartBox.

## Thông tin dự án

- Tên miền chính (apex): `resmartbox.com`
- Tên miền `www`: `www.resmartbox.com`
- Repository: `Phuviuter-vn-ai/ReSmartBox`
- Nhánh publish: `main`
- Nguồn GitHub Pages: GitHub Actions
- CNAME trong repository: `resmartbox.com`
- GitHub Pages đã được cấu hình custom domain: `resmartbox.com`
- URL GitHub Pages dự phòng: `https://phuviuter-vn-ai.github.io/ReSmartBox/`

## 1. Kiểm tra tài khoản quản lý DNS

Kiểm tra nameserver hiện tại trước khi sửa DNS. Lần kiểm tra gần nhất cho thấy:

- `dns1.registrar-servers.com`
- `dns2.registrar-servers.com`

Các nameserver này thường là DNS của Namecheap. Nếu nameserver đã thay đổi,
hãy cấu hình ở nhà cung cấp DNS mà nameserver hiện tại chỉ tới; không đổi
nameserver chỉ để làm theo tài liệu này.

Trong trang quản lý DNS, kiểm tra bản ghi hiện tại. Lần kiểm tra gần nhất:

- `www` đang là CNAME tới `parkingpage.namecheap.com` — cần thay thế.
- Apex `resmartbox.com` đã từng phân giải tới IP Cloudflare — kiểm tra và thay
  các bản ghi xung đột nếu chúng còn tồn tại.

## 2. Cấu hình DNS

Trong **Advanced DNS** hoặc trang quản lý DNS tương đương, cấu hình các bản
ghi sau:

| Type | Host | Value / Target | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | Automatic |
| A | `@` | `185.199.109.153` | Automatic |
| A | `@` | `185.199.110.153` | Automatic |
| A | `@` | `185.199.111.153` | Automatic |
| CNAME | `www` | `phuviuter-vn-ai.github.io` | Automatic |

Nếu trang DNS yêu cầu điền tên miền đầy đủ thay cho `@`, nhập `resmartbox.com`.

Trước khi lưu:

1. Xóa/thay thế các A record cũ của apex không nằm trong danh sách trên.
2. Xóa AAAA record của apex nếu có; GitHub Pages hiện cần các A record ở trên
   và AAAA cũ có thể khiến một số thiết bị đi tới máy chủ sai.
3. Thay CNAME `www` đang trỏ tới `parkingpage.namecheap.com` bằng target ở
   bảng trên. Không tạo nhiều CNAME cùng host `www`.
4. Không xóa các bản ghi MX, TXT, DKIM, SPF hoặc bản ghi email/dịch vụ khác.
5. Nếu dùng proxy DNS/CDN, tắt proxy cho các bản ghi website trong lúc xác
   minh/cấp chứng chỉ; để chế độ DNS-only nếu nhà cung cấp có lựa chọn này.

## 3. Kiểm tra GitHub Pages

Mở repository **Phuviuter-vn-ai/ReSmartBox → Settings → Pages** và xác nhận:

1. **Build and deployment → Source** đang là **GitHub Actions**.
2. **Custom domain** là `resmartbox.com` (không nhập đường dẫn hay `https://`).
   Nếu cài đặt đã bị thay đổi, nhập lại domain và lưu.
3. Chờ trạng thái domain được xác minh và chứng chỉ HTTPS được cấp.
4. Khi tùy chọn khả dụng, bật **Enforce HTTPS**.
5. Kiểm tra workflow **Publish ReSmartBox landing page** trên nhánh `main`
   hoàn tất thành công.

Không cần commit token, mật khẩu, cookie hoặc thông tin đăng nhập vào
repository. Nếu cần đăng nhập hoặc xác nhận quyền quản lý DNS, yêu cầu chủ
tên miền thực hiện thao tác đó trên trình duyệt của họ.

## 4. Xác minh sau khi cập nhật

Chạy các lệnh sau trên Windows sau khi lưu DNS:

```powershell
Resolve-DnsName resmartbox.com -Type A
Resolve-DnsName www.resmartbox.com -Type CNAME
```

Kết quả cần có đủ bốn địa chỉ A của GitHub Pages ở bảng cấu hình. CNAME của
`www` cần là `phuviuter-vn-ai.github.io`.

DNS có thể cần thời gian để cập nhật. Sau khi các bản ghi đúng, kiểm tra:

```powershell
curl.exe -I https://resmartbox.com/
curl.exe -I https://www.resmartbox.com/
```

Trang chính cần trả HTTP 200 hoặc chuyển hướng HTTPS hợp lệ tới
`https://resmartbox.com/`. Kiểm tra trên trang Pages rằng HTTPS đã được cấp và
**Enforce HTTPS** đang bật. Nếu DNS đã đúng nhưng chứng chỉ chưa sẵn sàng, chờ
rồi kiểm tra lại trong Settings → Pages; không thay DNS sang địa chỉ khác.

## Việc cần chủ tên miền hỗ trợ nếu agent bị chặn

- Đăng nhập vào tài khoản nhà cung cấp DNS của `resmartbox.com`.
- Phê duyệt thay đổi DNS nếu có yêu cầu xác nhận.
- Cấp quyền quản trị repository hoặc quyền quản lý Pages nếu GitHub từ chối
  lưu custom domain.
- Không gửi mật khẩu hoặc mã xác thực qua chat; tự nhập chúng tại trang đăng
  nhập chính thức của nhà cung cấp.
