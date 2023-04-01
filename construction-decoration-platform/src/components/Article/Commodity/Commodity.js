import React from "react";
import parse from "html-react-parser";
import "./Commodity.scss";

const html = `
<div class="commodity">
   <div class="commodity-home"><a href="/"> Trang chủ <img src="/static/media/arrow-right.22210902b93e77b91a0da65a5560639d.svg" alt=""> Chính sách hàng hoá trên WEBSITE DỊCH VỤ THIẾT KẾ SỬA CHỮA LẮP ĐẶT</a></div>
   <div class="commodity-title">CHÍNH SÁCH HÀNG HÓA TRÊN WEBSITE DỊCH VỤ THIẾT KẾ SỬA CHỮA LẮP ĐẶT</div>
   <div class="commodity-bold">I. QUY ĐỊNH CHUNG</div>
   <div class="commodity-text">1. Sản phẩm được đăng tải trên website phải phù hợp với loại hàng hóa, tính chất, đặc điểm, thuộc tính của Sản phẩm.</div>
   <div class="commodity-text">2. Khi thực hiện đăng tải thông tin Sản phẩm trên gian hàng, Nhà Bán Hàng phải tạo và xếp Sản phẩm vào danh mục cuối cùng theo các danh mục đã được gợi ý sẵn có trên trường danh mục của C&D.</div>
   <div class="commodity-text">3. Nhà Bán Hàng có thể tìm và tham khảo danh mục các Sản phẩm đã đươc đăng tải trên C&D để lựa chọn danh mục chính xác nhất cho Sản phẩm dự định đăng bán.</div>
   <div class="commodity-text">4. Nhà Bán Hàng không được phép giới thiệu, đăng tải và bán bán những loại hàng hóa, dịch vụ sau đây:</div>
   <div class="commodity-text">- Sản phẩm nằm trong Danh sách Sản phẩm cấm giao dịch trên C&D. Chi tiết xem tại Mục VII.2. Quy chế hoạt động của C&D.</div>
   <div class="commodity-text">- C&D KHÔNG hỗ trợ bán hàng cũ, đã qua sử dụng, like new, hàng second hand.</div>
   <div class="commodity-text">5. Nhà Bán Hàng vui lòng tôn trọng và tuân thủ các quy định về đăng bán Sản phẩm tại Chính sách hàng hóa trên C&D. C&D có quyền kiểm tra đột xuất các Sản phẩm đăng bán trên C&D theo từng mục đích khác nhau và áp dụng các biện pháp chế tài tùy vào từng trường hợp cụ thể đối với những Sản phẩm có dấu hiệu vi phạm pháp luật, vi phạm Chính sách này và Quy chế hoạt động của C&D</div>
   <div class="commodity-text" style="margin-bottom: 40px;">6. Nhà Bán Hàng chịu toàn bộ trách nhiệm trước pháp luật và Khách hàng về các nội dung, thông tin Sản phẩm đăng tải trên C&D.</div>
   <div class="commodity-bold">II. DANH MỤC HÀNG HÓA KINH DOANH TRÊN C&D</div>
   <div class="commodity-text" style="margin-bottom: 40px;">(Theo danh mục được công bố tại Website Nông Nghiệp)</div>
   <div class="commodity-bold">III. QUY CHUẨN HÀNG HÓA KINH DOANH TRÊN C&D</div>
   <div class="commodity-bold">1. Quy định về hàng hóa</div>
   <div class="commodity-text">- Không thuộc danh mục hàng hóa bị cấm lưu thông, kinh doanh, nhập khẩu theo quy định pháp luật</div>
   <div class="commodity-text">- Có nguồn gốc, xuất xứ rõ ràng, có chứng từ hợp lệ.</div>
   <div class="commodity-text">- Đáp ứng các điều kiện đầu tư kinh doanh theo quy định của pháp luật đối với từng hàng hóa, dịch vụ thuộc danh mục hàng hóa, dịch vụ kinh doanh có điều kiện.</div>
   <div class="commodity-text">- Đảm bảo phù hợp quy định của pháp luật về nhãn hàng hóa, hợp chuẩn, hợp quy, an toàn thực phẩm, tiêu chuẩn chất lượng, quy chuẩn chất lượng, và/hoặc thông số kỹ thuật tương ứng</div>
   <div class="commodity-text">- Đảm bảo thời hạn lưu kho theo hợp đồng ký gửi lưu lưu kho giữa Nhà Bán Hàng và C&D</div>
   <div class="commodity-text">- Không vi phạm pháp luật sở hữu trí tuệ, pháp luật cạnh tranh, pháp luật bảo vệ người tiêu dùng và các quy định pháp luật khác</div>
   <div class="commodity-text">- Không phải là hàng giả, hàng nhái, hàng kém chất lượng, hàng bị hư hỏng, bị lỗi</div>
   <div class="commodity-text">- Không phải là hàng hóa đã qua sử dụng, hết hạn sử dụng, hàng mẫu, hàng thử, hàng dựng hoặc hàng được tân trang lại</div>
   <div class="commodity-text">- Không bán các sản phẩm có chứa các thành phần độc hại: chất cấm, chất gây bệnh, chất độc… không được phép hoặc đang bị cơ quan chức năng thu hồi và kiểm soát trên thị trường</div>
   <div class="commodity-text">- Đảm bảo bao bì, đóng gói hàng hóa theo các tiêu chuẩn của nhà sản xuất</div>
   <div class="commodity-text">- Đảm bảo nội dung, thông tin trên bao bì, bao gói, nhãn hàng hóa trùng khớp với thông tin thực tế của hàng hóa</div>
   <div class="commodity-text" style="margin-bottom: 40px;">- Đáp ứng các điều kiện, tiêu chuẩn, quy chuẩn khác đối với hàng hóa theo quy định của pháp luật và các yêu cầu đối với Nhà Bán Hàng và Hàng Hóa trên Sàn VNA Mall</div>
   <div class="commodity-bold">2. Biểu mẫu cung cấp thông tin Sản phẩm</div>
   <table style="margin-bottom: 30px;">
      <tr>
         <th><span>Quy chuẩn về Thương hiệu/Nhãn hiệu</span></th>
         <th>
            <p>Thương hiệu/ Nhãn hiệu của Sản phẩm phải đảm bảo tuân thủ quy định của pháp luật về sở hữu trí tuệ và phải trùng khớp với hình ảnh, đặc điểm, tính năng, thuộc tính của Sản phẩm.</p>
         </th>
      </tr>
      <tr>
         <td><span>Quy chuẩn về hình ảnh Sản phẩm</span></td>
         <td>
            <p><span>– Áp dụng cho tất cả các ngành hàng:</span> <span>Cấu trúc:</span> Loại Sản phẩm + Thương hiệu/Nhãn hiệu + Tên/dòng sản phẩm + Model + Tính năng/thuộc tính cụ thể.<span> – Áp dụng cho các sản phẩm đặc biệt:</span> (i) Nếu Sản phẩm có thương hiệu/nhãn hiệu, tên gọi của Sản phẩm phải có thông tin “Hàng chính hãng” hoặc “Hàng nhập khẩu” tùy thuộc vào loại hàng hóa: <span>Cấu trúc:</span> Loại Sản phẩm + Thương hiệu/nhãn hiệu + Tên/dòng Sản phẩm + Model + Tính năng/thuộc tính cụ thể +<span> Hàng chính hãng/Hàng nhập khẩu.</span> (ii) Nếu Sản phẩm là hàng cồng kềnh và khó khăn trong việc giao hàng liên khu vực, tên gọi của Sản phẩm phải có thông tin về Khu vực giao hàng. <span>Cấu trúc:</span> Loại Sản phẩm + Thương hiệu/Nhãn hiệu + Tên/dòng Sản phẩm + Model + Tính năng/thuộc tính cụ thể + <span> Khu vực giao hàng.</span> </p>
         </td>
      </tr>
      <tr>
         <td><span>Quy chuẩn về hình ảnh Sản phẩm</span></td>
         <td>
            <p>Áp dụng theo quy chuẩn được quy định tại VNA Brand Guide (dẫn link)</p>
         </td>
      </tr>
      <tr>
         <td><span>Quy chuẩn về nội dung Sản phẩm</span></td>
         <td>
            <p><span>1. Quy chuẩn chung</span> Nội dung Sản phẩm nên bao gồm: • Chi tiết mô tả về tính năng, công dụng của Sản phẩm; • Hướng dẫn sử dụng Sản phẩm, • Bảng kích cỡ (đối với ngành hàng thời trang); • Hạn sử dụng/Cách thức bảo quản (đối với ngành hàng thực phẩm); • Thông tin bảo hành, thời hạn bảo hành. Nội dung Sản phẩm không được phép bao gồm: • Các nội dung giới thiệu, quảng váo Sản phẩm bị cấm trên C&D. • Các thông tin thô tục, thiếu văn hóa. • Thông tin dẫn link đến các website khác ngoài VNA Mall. <span>2. Quy chuẩn đối với ngành hàng Voucher/Dịch vụ</span> <span>• Bắt buộc</span> phải có thông tin, hướng dẫn việc xuất hóa đơn VAT. • Thông tin đầy đủ về điều kiện sử dụng Voucher/Dịch vụ: địa điểm sử dụng, cách thức sử dụng, thời gian sử dụng, quy trình cung cấp, các hạn chế trong việc cung cấp.</p>
         </td>
      </tr>
   </table>
</div>
`;

const Commodity = () => {
  return parse(html);
};

export default Commodity;
