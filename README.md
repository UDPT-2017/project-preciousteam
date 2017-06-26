# Project - Teehee

Teehee là repository cho đồ án nhóm. Nhóm tối đa 4 thành viên.

Thành viên:
* [x] **1412520** - Nguyễn Hoàng Thi - thikhin96 - nghoangthi1@gmail.com 
* [x] **1412503** - Nguyễn Thị Thanh Thảo - thaonguyen1096 - thaonguyen1096@gmail.com

* URL: https://project-preciousteam.herokuapp.com/
* Báo cáo: https://udpt-2017.github.io/project-preciousteam/

## Yêu cầu

Trong đề tài, sinh viên cần mô tả các chức năng có thể thực hiện bên dưới. Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Làm việc nhóm:
* [x] Có sử dụng GIT.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [ ] Sử dụng GIT theo Feature Branch Workflow.
* [x] Sử dụng GIT theo Gitflow Workflow.

## Mô tả nghiệp vụ chung ứng dụng
Ứng dụng mua bán sản phẩm phục vụ các loại người dùng như quản trị viên, nhân viên và khách hàng. Trong đó, khách hàng vừa có thể đăng bán sản phẩm hoặc xem tất cả các sản phẩm của các người dùng khác và đặt hàng, có thể nêu đánh giá về mỗi loại sản phẩm cũng như gửi ý kiến về cho web. Ứng dụng cho phép mọi người xem danh sách các sản phẩm đang hiện có, tuy nhiên chỉ cho phép khách hàng nào là thành viên của web mới được đặt hàng. Người dùng  Quản trị viên có toàn quyền như thêm nhân viên mới, khóa tài khoản của một nhân viên hoặc khách hàng nào đó. nhân viên được quyền xem thông tin khách hàng, khóa tài khoản khách hàng, xem danh sách order, xem dánh sách các bài post duyệt đăng hay không, xem chi tiết bài đăng, xem hộp thư góp ý của khách hàng. 
Các luồng xử lý chính là:
* Đăng ký tài khoản:
  Người dùng vào trang đăng nhập, nhập các thông tin cần thiết như tên, email, số điện thoại, ảnh đại diện, hệ thống sẽ ghi nhận và sau khi người dùng submit, hệ thống gửi email về email người dùng đã đăng ký để chờ xác thực tài khoản. Người dùng chỉ có thể sử dụng tài khoản khi vào link trong email mà hệ thống gửi và chọn activate tài khoản.
  Ở đây luồng xử lý phụ là hệ thống gửi mail xác nhận về email của người dùng.
* Đăng nhập:
  Ứng với mỗi loại người dùng sẽ có giao diện khác nhau, khi người dùng nhập tên đăng nhập và mật khẩu, hệ thống kiểm tra tài khoản có trong hệ thống và tùy vào loại người dùng mà dẫn đến các trang chủ khác nhau, khách hàng sẽ không thể truy cập màn hình quản lý của admin hay nhân viên, nếu truy cập đường link này sẽ dẫn đến màn hình 401.
* Chỉnh sửa thông tin cá nhân:
   Sau khi tài khoản có hiệu lực, người dùng có toàn quyền của một khách hàng như đăng sản phẩm, xem danh sách các sản phẩm đã đăng,.. cũng nhu chỉnh sửa thông tin cá nhân. Khi chọn chỉnh sửa thông tin cá nhân, chỉ có thể thay đổi mật khẩu, số điện thoại và ảnh đại diện. Nếu người dùng chưa đăng nhập mà nhập đường dẫn này, hệ thống sẽ tự động chuyển sang trang đăng nhập.
* Đăng bài:
  Trong trang thông tin cá nhân, người dùng có thể chọn đăng sản phẩm mới, mỗi một bài đăng ứng với một sản phẩm, mỗi sản phẩm người dùng được đăng tối thiểu 1 ảnh và tối đa là 3. Thông tin của mỗi sản phẩm như tên, mô tả, giá cả, loại sản phẩm, hình ảnh và số lượng. Các thông tin này đều bắt buộc. Sau khi đăng bài, người dùng có thể xem lại danh sách các bài đăng của mình và xóa sản phẩm nếu không còn bán nữa, khi này sản phẩm sẽ không hiện trong danh sách các sản phẩm đang bán của hệ thống nhưng admin vẫn có thể xem thông tin về các đơn hàng có các sản phẩm này trong quá khứ của khách hàng. Tương tự như màn hình sửa thông tin, nếu người dùng nhập địa chỉ trang này khi chưa đăng nhập, hệ thống sẽ tự động chuyển sang trang đăng nhập.
  Ngoải ra, người dùng còn có thể thêm thông tin khuyến mãi cho sản phẩm mà họ đã đăng, các thông tin gồm ngày bắt đầu, ngày kết thúc và chiết khấu bao nhiêu phần trăm.
* Đặt mua:
  Sau khi đăng nhập, để đặt mua một sản phẩm, người dùng chọn sản phẩm, hệ thống hiện thông báo cho sản phẩm vào giỏ hàng. Khi người dùng chọn chấp nhận, hệ thống đọc thông tin sản phẩm và các khuyến mãi còn hiệu lực của sản phẩm. Để xem danh sách các sản phẩm trong giỏ hảng, người dùng có thể chọn xem thông tin cá nhân và chọn giỏ hàng hoặc chọn giỏ hàng trên màn hình. Màn hình chi tiết giỏ hàng hiện rõ thông tin, hình ảnh, khuyến mãi và tổng tiền của các sản phẩm, người dùng có thể chọn xóa sản phẩm khỏi giỏ hàng. Khi người dùng chọn đặt hàng, hệ thống tự động trừ vào số lượng tồn của các sản phẩm, cho đến khi hết số lượng sản phẩm, sản phẩm vẫn hiện trong danh sách các sản phẩm đang bán tuy nhiên khi khách chọn đặt hàng, hệ thống sẽ báo lỗi. 
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
 Ngoài ra còn một số chức năng khác như:
 * Phản hồi về chất lượng sản phẩm:
   Đối với những người dùng đã đăng nhập vào hệ thống, ở mỗi bài đăng sẽ cho phép họ điền ý kiến cá nhân về chất lượng sản phẩm, mỗi phần bình luận hiện tên, ảnh đại diện và thời gian cách đây đã bao lâu.
 * Gửi phản hồi về chất lượng sản phẩm hoặc dịch vụ cho hệ thống:
   Đối với chức năng này, người dùng không cần đăng nhâp, chỉ cần điền email và ý kiến của bản thân, sau khi hệ thống ghi nhận, admin và nhân viên có thể xem các ý kiến đóng góp này trong màn hình quản lý của họ.
  
  Tài khoản admin: 
  email: admin@gmail.com
  password: admin654321
 
## Lập trình server
### MVC
* [x] MVC (MSSV1)
* [x] Config (MSSV1)
* [x] REST routing (MSSV1)
* [x] Layout & partial (MSSV1)

### Lập trình dữ liệu
* [x] Thêm (MSSV1)
* [x] Xóa (MSSV1)
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
* [x] Google API: Cho phép truy cập tài khoản gmail để gửi mail tới các địa chỉ mail của người dùng.

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
