# Project - *Name of your app*

**Name of your app** là repository cho đồ án nhóm. Nhóm tối đa 4 thành viên.

Thành viên:
* [x] **1412520** - Nguyễn Hoàng Thi - thikhin96 - nghoangthi1@gmail.com 
* [x] **1412503** - Nguyễn Thị Thanh Thảo - thaonguyen1096 - thaonguyen1096@gmail.com

* URL: **URL hosting của đề tài**
* Báo cáo: **https://udpt-2017.github.io/project-preciousteam/**

## Yêu cầu

Trong đề tài, sinh viên cần mô tả các chức năng có thể thực hiện bên dưới. Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Làm việc nhóm:
* [x] Có sử dụng GIT.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [ ] Sử dụng GIT theo Feature Branch Workflow.
* [x] Sử dụng GIT theo Gitflow Workflow.

## Mô tả nghiệp vụ chung ứng dụng
* Quy trình đăng ký tài khoản:
  - Vào trang đăng nhập
  - Điền thông tin cá nhân
  - Đăng ký
  - Người dùng nhận được mail xác nhận tài khoản và tiến hàng xác nhận
  - Đăng ký thành công

* Quy trình chỉnh sửa thông tin cá nhân:
  - Chọn chỉnh sửa thông tin cá nhân
  - Thay đổi thông tin
  - Lưu thay đổi
  
* Quy trình đăng bài:
	- Đăng nhập. Nếu chưa có tài khoản thì phải đăng ký
	- Đăng bài: phải có số lượng, nội dung rõ ràng (Thông tin sản phẩm, số lượng, địa chỉ, giá cả, liên lạc...).
	- Chờ bài đăng được duyệt
	- Khi có người dùng đặt mua, có thông báo đến người đăng tin, người đăng sẽ duyệt đơn hàng, khi đó số lượng sản phẩm sẽ giảm xuống.
	- Người đăng có thể cập nhật số lượng sản phẩm. Nếu hết hàng, số lượng = 0 thì người dùng k thể đặt hàng được nữa.

* Quy trình chỉnh sửa bài đăng:
  - Tìm bài đăng của mình
  - Chọn chỉnh sửa
  - Thay đổi thông tn
  - Lưu thay đổi
  
* Quy trình đặt mua:
	- Đăng nhập. Nếu chưa có tài khoản thì phải đăng ký.
	- Tìm kiếm, chọn sản phẩm muốn mua và chọn số lượng. Thêm vào giỏ hàng.
	- Tiến hành đặt hàng. Mỗi đơn hàng của từng shop sẽ được tách ra riêng.
	- Sau khi đặt hàng, có thể hủy đơn hàng 
	- Chờ đơn hàng được xác nhận
	- Người đăng sẽ tự liên lạc với người đặt mua để giao hàng.
  
 * Quy trình duyệt bài:
	  - Xem danh sách bài đăng của người dùng
	  - Chọn OK hoặc Cancel để duyệt bài được đăng hay không
 
 * Gửi tin nhắn cho trang:
	  - Vào trang contact
	  - Nhập thông tin
	  - Gửi tin nhắn
  
 * Quản lý nhân viên:
	  - Thêm nhân viên mới
	  - Khóa tài khoản nhân viên
  
 * Quản lý khách hàng:
  	- Khóa tài khoản khách hàng.
 
## Lập trình server
### MVC
* [x] MVC (MSSV1)
* [x] Config (MSSV1)
* [x] REST routing (MSSV1)
* [x] Layout & partial (MSSV1)

### Lập trình dữ liệu
* [x] Thêm (MSSV1)
* [ ] Xóa (MSSV1)
* [x] Sửa (MSSV1)
* [x] Tìm kiếm (MSSV1)

### Xử lý lỗi
* [x] Xử lý lỗi trong cùng trang web (MSSV1)
* [x] Xử lý lỗi dùng trang web riêng (MSSV1)
   * [x] 401 (MSSV1)
   * [x] 404 (MSSV1)
   * [x] 500 (MSSV1)

### Tương tác API khác
Liệt kê các API nhóm đã sử dụng được ở đây
* [ ] Facebook API: mô tả (MSSV1)
* [x] Google API: mô tả (MSSV1)

## Lập trình client
* [x] Kiểm tra dữ liệu (MSSV1)
* [x] Animation (MSSV1)
* [x] Thao tác DOM (MSSV1)
* [x] AJAX (MSSV1)

## Bảo mật
* [x] Chứng thực (MSSV1)
* [x] Phân quyền sử dụng một số trang web với nhiều vai trò khác nhau (MSSV1)
   * [x] Không cho phép thao tác vào trang web khi không có quyền (MSSV1)
   * [x] Thể hiện các chức năng khác nhau trên cùng giao diện khi người dùng có quyền khác nhau (MSSV1)
   * [x] Thể hiện lỗi khi không truy xuất được trang khi không có quyền (MSSV1)

## Nâng cao
* [ ] ...

## Chức năng đã thực hiện
Các **yêu cầu chức năng**
## Database
* [x] Xây dựng và cài đặt cơ sở dữ liệu với postgres
### Lập trình server
#### MVC
* [x] Website layout theo kiến trúc MVC , config, layout and partial
* [x] Trang chủ khách hàng được thiết kế sẽ bao gồm các trang: home, fashion, about, contact
* [x] Cho phép người dùng biết họ đang ở trang nào (sử dụng breadcrumb, highlight navigation bar,...)
* [x] Trang chủ admin được thiết kế sẽ bao gồm các trang: dashboard, order list, staff management, customer management, mailbox
* [x] Xây dựng trang báo lỗi 401, 404, 500
#### Thao tác dữ liệu
* [x] Thực hiện thỏa tác CRUD trên cơ sở dữ liệu
	* [x] Tạo/đăng kí tài khoản
	* [x] Đăng bài bán sản phẩm
	* [x] Sửa thông tin cá nhân
	* [x] Khóa người dùng
#### Xử lý lỗi
* [x] Báo lỗi trong cùng trang web: báo lỗi email trùng khi đăng nhập, báo lỗi mật khẩu sai,....
* [x] Báo lỗi trong trang web riêng: 401, 404 và 500
#### Tương tác API khác
* [x] Cho phép người dùng đăng ký/đăng nhập bằng email
* [x] Xác nhận đăng ký qua email

### Lập trình client
* [x] Kiểm tra dữ liệu form thêm/sửa danh mục và sản phẩm
* [x] Kiểm tra form đăng ký, cập nhật tài khoản cá nhân
* [x] Animation thông báo thêm/sửa danh mục thành công hay lỗi
* [x] Ajax để thêm, sửa nhân viên, sản phẩm,...
* [x] Dùng DOM, Jquery để ẩn hiện các button

## Bảo mật
* [x] Cho phép người dùng đăng nhập/đăng xuất
* [x] Bảo vệ một số trang web khỏi những người chưa đăng nhập,  tự động chuyển đến trang đăng nhập
* [x] Xây dựng tính năng phân loại người dùng(admin/staff/customer/...)
 	* [x] Không cho phép thao tác vào trang web khi không có quyền 
 	* [x] Thể hiện các chức năng khác nhau trên cùng giao diện khi người dùng có quyền khác nhau
 	* [x] Thể hiện lỗi khi không truy xuất được trang khi không có quyền (Lỗi 401)


## Demo

Link ảnh GIF demo ứng dụng:

![Video Walkthrough](demo.gif)

Tạo ảnh GIF với chương trình [LiceCap](http://www.cockos.com/licecap/).


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
