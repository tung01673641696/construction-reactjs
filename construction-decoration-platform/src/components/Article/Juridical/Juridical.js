import React from "react";
import "./Juridical.scss";
import parse from "html-react-parser";

const html = ` 
<div class="juridical">
   <div class="juridical-title"><a href="/">Trang chủ</a><img src="/static/media/arrow.359ead829f344f5ab23bc1e9e72d0e9c.svg" alt="arrow">Quy định về hồ sơ pháp lý nhà bán hàng và hàng hóa đăng tải lên WEBSITE DỊCH VỤ THIẾT KẾ SỬA CHỮA LẮP ĐẶT</div>
   <div class="juridical-big-title">QUY ĐỊNH VỀ HỒ SƠ PHÁP LÝ NHÀ BÁN HÀNG VÀ HÀNG HÓA ĐĂNG TẢI LÊN WEBSITE DỊCH VỤ THIẾT KẾ SỬA CHỮA LẮP ĐẶT</div>
   <div class="juridical-container">
      <div class="juridical-container__top">
         <p class="default"> Khi đăng bán Sản phẩm trên WEBSITE DỊCH VỤ THIẾT KẾ SỬA CHỮA LẮP ĐẶT, Nhà Bán Hàng có trách nhiệm đảm bảo rằng tất cả Sản phẩm của đều tuân thủ quy định pháp luật và chính sách đăng bán của C&D. Nhà Bán Hàng chịu toàn bộ trách nhiệm trước pháp luật về các hồ sơ mà Nhà Bán Hàng cung cấp cho WEBSITE DỊCH VỤ THIẾT KẾ SỬA CHỮA LẮP ĐẶT để đảm bảo tính hợp pháp của hoạt động bán hàng và Sản phẩm của Nhà Bán Hàng trên WEBSITE DỊCH VỤ THIẾT KẾ SỬA CHỮA LẮP ĐẶT. Nhà Bán Hàng có nghĩa vụ cập nhật và đáp ứng quy định pháp luật hiện hành về các giấy phép, cấp phép và các điều kiện kinh doanh khác đối với Sản phẩm của Nhà Bán Hàng trên WEBSITE DỊCH VỤ THIẾT KẾ SỬA CHỮA LẮP ĐẶT.</p>
         <br>
         <p class="bold">I. QUY ĐỊNH VỀ HỒ SƠ NHÀ BÁN HÀNG</p>
         Nhà Bán Hàng khi đăng ký tạo lập gian hàng trên WEBSITE DỊCH VỤ THIẾT KẾ SỬA CHỮA LẮP ĐẶT phải đảm bảo cung cấp đủ hồ sơ pháp lý của Nhà Bán Hàng cho WEBSITE DỊCH VỤ THIẾT KẾ SỬA CHỮA LẮP ĐẶT theo quy định sau đây:<br><br>
         <p class="bold">1. Hồ sơ áp dụng chung: </p>
         <p class="default">- Giấy chứng nhận đăng ký doanh nghiệp của Nhà Bán Hàng, trong đó có quy định về lĩnh vực ngành nghề kinh doanh Sản phẩm và dịch vụ phân phối, bán lẻ hàng hóa qua internet và/hoặc</p>
         <p class="default" style="margin-bottom: 30px;"> - Giấy chứng nhận đủ điều kiện kinh doanh đối với các Sản phẩm nằm trong danh mục hàng hóa, dịch vụ kinh doanh có điều kiện theo quy định của pháp luật.</p>
         <p class="bold">2. Hồ sơ cụ thể: </p>
         <p class="default"><span class="bold">2.1.</span> Đối với Nhà Bán Hàng là Chủ sở hữu nhãn hiệu hoặc Chủ sở hữu đối với các sáng chế, kiểu dáng công nghiệp : 
         <p class="default">- Giấy chứng nhận đăng ký nhãn hiệu hoặc các văn bằng bảo hộ; hoặc</p>
         <p class="default" style="margin-bottom: 30px;">- Thông báo chấp nhận đơn hợp lệ đối với đơn đăng ký sở hữu công nghiệp do cơ quan quản lý nhà nước về quyền sở hữu công nghiệp ban hành.</p>
         </p> 
      </div>
   </div>
   <div class="juridical-text"><span>2.2.</span> Đối với Nhà bán hàng là Nhà phân phối Sản phẩm trong nước:</div>
   <div class="juridical-text">- Nhà phân phối cấp 1:</div>
   <div class="juridical-text">• Giấy chứng nhận đại lý phân phối do Nhà sản xuất Sản phẩm cấp, hoặc </div>
   <div class="juridical-text">• Hợp đồng mua bán hàng hóa hoặc Hợp đồng phân phối Sản phẩm hoặc Hợp đồng đại lý với Nhà sản xuất hoặc Nhà cung cấp Sản phẩm, hoặc </div>
   <div class="juridical-text" style="margin-bottom: 30px;">• Văn bản ủy quyền hoặc văn bản thỏa thuận với Nhà sản xuất hoặc Nhà cung cấp Sản phẩm về các hình thức trung gian thương mại khác. </div>
   <div class="juridical-text">- Nhà phân phối cấp 2,3,4:</div>
   <div class="juridical-text">• Giấy chứng nhận đại lý phân phối do Nhà phân phối cấp 1 hoặc cấp trên trực tiếp cấp, hoặc </div>
   <div class="juridical-text">• Hợp đồng mua bán hàng hóa hoặc Hợp đồng phân phối Sản phẩm hoặc Hợp đồng đại lý với Nhà phân phối cấp 1 hoặc cấp trên trực tiếp, hoặc</div>
   <div class="juridical-text" style="margin-bottom: 30px;">• Văn bản ủy quyền hoặc văn bản thỏa thuận với Nhà sản xuất hoặc Nhà cung cấp Sản phẩm về các hình thức trung gian thương mại khác. </div>
   <div class="juridical-bold">Lưu ý:</div>
   <div class="juridical-text" style="margin-bottom: 30px;">Nếu nhà bán hàng hàng cung cấp được Giấy ủy quyền phân phối thương hiệu hoặc hợp đồng phân phối thương hiệu thì sẽ được By-pass chứng từ thương hiệu đó trong khoảng thời gian Giấy ủy quyền phân phối thương hiệu hoặc hợp đồng phân phối thương hiệu còn hiệu lực.</div>
   <div class="juridical-text"><span>1.3.</span> Đối với Nhà bán hàng là Nhà phân phối Sản phẩm nhập khẩu: nước:</div>
   <div class="juridical-text">- Giấy phép nhập khẩu</div>
   <div class="juridical-text">- Giấy chứng nhận lưu hành tự do đối với Sản phẩm thuộc danh mục hàng hóa phải có CFS</div>
   <div class="juridical-text">- Giấy chứng nhận xuất xứ hàng hóa của Sản phẩm nhập khẩu</div>
   <div class="juridical-text">- Tờ khai hải quan hàng hóa nhập khẩu có xác nhận thông quan bởi cơ quan hải quan</div>
   <div class="juridical-text" style="margin-bottom: 30px;">- Hợp đồng đại lý hoặc hợp đồng phân phối Sản phẩm với Nhà sản xuất hoặc Nhà cung cấp Sản phẩm nước ngoài hoặc Nhà nhập khẩu trong nước.</div>
   <div class="juridical-bold">II. QUY ĐỊNH VỀ HỒ SƠ HÀNG HÓA</div>
   <div class="juridical-bold" style="margin-bottom: 30px;">1. Thực phẩm</div>
   <table>
      <tr>
         <th>Phân loại Sản phẩm</th>
         <th>Hồ sơ yêu cầu đánh giá tiêu chí an toàn và chất lượng của Sản phẩm</th>
      </tr>
      <tr>
         <td>• Thực phẩm bảo vệ sức khỏe, thực phẩm dinh dưỡng y học, thực phẩm dùng cho chế độ ăn đặc biệt; • Sản phẩm dinh dưỡng dùng cho trẻ đến 36 tháng tuổi; • Phụ gia thực phẩm hỗn hợp có công dụng mới, phụ gia thực phẩm không thuộc trong danh mục phụ gia được phép sử dụng trong thực phẩm hoặc không đúng đối tượng sử dụng do Bộ Y tế quy định.</td>
         <td>• Giấy tiếp nhận đăng ký bản công bố Sản phẩm; • Hoặc Giấy tiếp nhận bản công bố hợp quy hoặc Giấy xác nhận công bố phù hợp quy định an toàn thực phẩm (ATTP) được cấp trước ngày 02/02/2018 và còn thời hạn. • Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm; • Và/hoặc Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm đạt yêu cầu Thực hành sản xuất tốt (GMP) hoặc chứng nhận tương đương (áp dụng đối với nhóm thực phẩm bảo vệ sức khỏe); • Và/Hoặc Phiếu kết quả kiểm nghiệm an toàn thực phẩm. • Giấy xác nhận nội dung quảng cá.</td>
      </tr>
      <tr>
         <td>• Thực phẩm đã qua chế biến bao gói sẵn (bao gồm cả thực phẩm bổ sung); • Phụ gia thực phẩm, chất hỗ trợ chế biến thực phẩm; • Dụng cụ chứa đựng thực phẩm dành cho trẻ em (bình sữa, bình tập uống, bình tập ăn…); • Bình bú, núm ti, vú ngậm nhân tạo, ngậm nướu cho trẻ em</td>
         <td>• Giấy tiếp nhận bản công bố hợp quy hoặc Giấy xác nhận công bố phù hợp quy định ATTP được cấp trước ngày 02/02/2018 và còn thời hạn; • Hoặc Bản tự công bố sản phẩm (có ký tên, đóng dấu của Nhà Bán Hàng) và Phiếu kết quả kiểm nghiệm ATTP của Sản phẩm theo quy định pháp luật. </td>
      </tr>
      <tr>
         <td>• Thức ăn cho thú cưng, thức ăn chăn nuôi</td>
         <td>- Đối với sản phẩm sản xuất trong nước: • Giấy xác nhận thức ăn chăn nuôi được phép lưu hành tại Việt Nam; • Và/hoặc Giấy chứng nhận hợp quy đối với Sản phẩm. - Và/hoặc Giấy chứng nhận hợp • Giấy xác nhận thức ăn chăn nuôi được phép lưu hành tại Việt Nam; • Văn bản xác nhận chất lượng đối với thức ăn chăn nuôi nhập khẩu; </td>
      </tr>
   </table>
   <div class="juridical-bold" style="margin: 30px 0px;">2. Làm đẹp - Sức khoẻ:</div>
   <table>
      <tr>
         <th>Phân loại Sản phẩm</th>
         <th>Hồ sơ yêu cầu đánh giá tiêu chí an toàn và chất lượng của Sản phẩm</th>
      </tr>
      <tr>
         <td>• Mỹ phẩm, hóa mỹ phẩm chăm sóc cá nhân, mỹ phẩm cho bé</td>
         <td>• Phiếu công bố sản phẩm mỹ phẩm.</td>
      </tr>
      <tr>
         <td>• Thiết bị làm đẹp/ chăm sóc sức khỏe</td>
         <td>• Phiếu tiếp nhận hồ sơ công tiêu chuẩn hoặc Giấy chứng nhận đăng ký lưu hành đối với thiết bị làm đẹp/chăm sóc sức khỏe thuộc danh mục trang thiết bị y tế theo quy định của pháp luật</td>
      </tr>
      <tr>
         <td>• Trang thiết bị y tế</td>
         <td>• Phiếu tiếp nhận hồ sơ công bố tiêu chuẩn đối với trang thiết bị y tế loại A; • Giấy chứng nhận đăng ký lưu hành đối với trang thiết bị ý tế loại B,C,D;</td>
      </tr>
   </table>
   <div class="juridical-bold" style="margin: 30px 0px;">3. Hoá phẩm:</div>
   <table>
      <tr>
         <th>Phân loại Sản phẩm</th>
         <th>Hồ sơ yêu cầu đánh giá tiêu chí an toàn và chất lượng của Sản phẩm</th>
      </tr>
      <tr>
         <td>• Sản phẩm chăm sóc nhà cửa (Chất tẩy rửa, vệ sinh, chế phẩm, hóa chất giặt rửa, diệt côn trùng,…)</td>
         <td>• Giấy chứng nhận đăng ký lưu hành đối với hóa chất diệt côn trùng, diệt khuẩn, chế phẩm diệt côn trùng, diệt khuẩn. </td>
      </tr>
      <tr>
         <td>• Sản phẩm chăm sóc đồ dùng cho bé (Nước giặt áo quần trẻ em, nước rửa bình sữa,…): </td>
         <td>• Hồ sơ đánh giá tiêu chí an toàn &amp; Chất lượng; • Tiêu chuẩn cơ sở; • Phiếu kết quả kiểm nghiệm phù hợp tiêu chuẩn cơ sở.</td>
      </tr>
   </table>
   <div class="juridical-bold" style="margin: 30px 0px;">4. Đồ chơi, đồ dùng cho bé</div>
   <table>
      <tr>
         <th>Phân loại Sản phẩm</th>
         <th>Hồ sơ yêu cầu đánh giá tiêu chí an toàn và chất lượng của Sản phẩm</th>
      </tr>
      <tr>
         <td>• Đồ chơi, đồ dùng cho em bé sản xuất trong nước</td>
         <td>• Giấy chứng nhận đồ chơi, đồ dùng đồ dùng cho em bé sản xuất trong nước;</td>
      </tr>
      <tr>
         <td>• Đồ chơi, đồ dùng cho em bé nhập khẩu</td>
         <td>• Giấy công bố hợp quy cho Sản phẩm hoặc Giấy chứng nhận hợp quy cho Sản phẩm; • Và/hoặc Giấy xác nhận chất lượng hàng hóa nhập khẩu.</td>
      </tr>
   </table>
   <div class="juridical-bold" style="margin: 30px 0px;">5. Hàng điện tử:</div>
   <table>
      <tr>
         <th>Phân loại Sản phẩm</th>
         <th>Hồ sơ yêu cầu đánh giá tiêu chí an toàn và chất lượng của Sản phẩm</th>
      </tr>
      <tr>
         <td>• Máy nước nóng; • Pin điện thoại, pin thay thế; • Điện Thoại phổ thông; • Điện thoại Smartphone; • Thiết Bị Mạng (Router Wifi và Bộ chia mạng Switch); • Máy Tính Bảng.</td>
         <td>• Giấy công bố hợp quy cho Sản phẩm hoặc Giấy chứng nhận hợp quy cho Sản phẩm; • Và/Hoặc Giấy xác nhận chất lượng hàng hóa nhập khẩu đối với Sản phẩm nhập khẩu;</td>
      </tr>
      <tr>
         <td>• Linh kiện, Phụ kiện IT • Phụ kiện điện thoại </td>
         <td>• Không yêu cầu</td>
      </tr>
   </table>
   <div class="juridical-bold" style="margin: 30px 0px;">6. Điện gia dụng:</div>
   <table>
      <tr>
         <th>Phân loại Sản phẩm</th>
         <th>Hồ sơ yêu cầu đánh giá tiêu chí an toàn và chất lượng của Sản phẩm</th>
      </tr>
      <tr>
         <td>• Điện gia dụng</td>
         <td>• Nhà bán hàng phải cung cấp được Giấy công bố hợp quy của Nhà sản xuất hoặc Giấy chứng nhận hợp quy đối với Sản phẩm đăng bán.</td>
      </tr>
   </table>
   <div class="juridical-bold" style="margin: 30px 0px;">7. Thời trang, trang sức, phụ kiện thời trang:</div>
   <table>
      <tr>
         <th>Phân loại Sản phẩm</th>
         <th>Hồ sơ yêu cầu đánh giá tiêu chí an toàn và chất lượng của Sản phẩm</th>
      </tr>
      <tr>
         <td>• Trường hợp trang sức, phụ kiện thời trang bằng vàng hoặc có hàm lượng vàng mạ từ 8k trở lên</td>
         <td>• Giấy phép đăng ký kinh doanh có ngành nghề kinh doanh vàng, trang sức, mỹ nghệ.</td>
      </tr>
      <tr>
         <td>• Khác</td>
         <td>• Không yêu cầu hồ sơ đối với Sản phẩm.</td>
      </tr>
   </table>
   <div class="juridical-bold" style="margin: 30px 0px;">8. Nhà cửa đời sống:</div>
   <table>
      <tr>
         <th>Phân loại Sản phẩm</th>
         <th>Hồ sơ yêu cầu đánh giá tiêu chí an toàn và chất lượng của Sản phẩm</th>
      </tr>
      <tr>
         <td>• Nhà cửa đời sống</td>
         <td>• Giấy công bố hợp quy/ tờ khai hải quan; • Hợp đồng mua bán hoặc phân phối với tổ chức công bố/ nhập khẩu sản phẩm, nếu nhà bán hàng không phải là tổ chức công bố/ nhập khẩu.</td>
      </tr>
   </table>
   <div class="juridical-bold" style="margin: 30px 0px;">9. Sách:</div>
   <table>
      <tr>
         <th>Phân loại Sản phẩm</th>
         <th>Hồ sơ yêu cầu đánh giá tiêu chí an toàn và chất lượng của Sản phẩm</th>
      </tr>
      <tr>
         <td>• Sách sản xuất trong nước</td>
         <td>• Danh mục hoặc bảng kê hoặc phiếu xuất kho hoặc hóa đơn GTGT có ghi tên Sản phẩm (trong 3 tháng gần nhất) và có xác nhận của Nhà xuất bản hoặc Công ty phát hành sách hoặc Nhà phân phối; • Giấy cam kết bảo lãnh từ Nhà xuất bản hoặc Công ty phát hành sách.</td>
      </tr>
      <tr>
         <td>• Sách nhập khẩu</td>
         <td>• Văn bản xác nhận đăng ký nhập khẩu và Tờ khai hải quan có xác nhận thông quan của cơ quan hải quan đối với Sản phẩm nhập khẩu; • Giấy cam kết bảo lãnh từ Nhà xuất bản hoặc Công ty phát hành sách.</td>
      </tr>
   </table>
   <div class="juridical-bold" style="margin: 30px 0px;">10. Voucher – Dịch vụ:</div>
   <table>
      <tr>
         <th>Phân loại Sản phẩm</th>
         <th>Hồ sơ yêu cầu đánh giá tiêu chí an toàn và chất lượng của Sản phẩm</th>
      </tr>
      <tr>
         <td>• Sims • Du lịch • Đồ ăn – thực phẩm • Dịch vụ Điều trị • Dịch vụ Phẫu thuật thẩm mỹ, khám chữa bệnh</td>
         <td>• Giấy phép hoặc Giấy chứng nhận hoặc Chứng chỉ theo quy định của pháp luật hiện hành.</td>
      </tr>
   </table>
</div>
`;

const Juridical = () => {
  return parse(html);
};

export default Juridical;
