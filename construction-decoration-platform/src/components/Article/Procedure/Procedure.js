import React from "react";
import "./Procedure.scss";
import parse from "html-react-parser";

const html = `
<div class="procedure">
<div class="procedure-home">
   <a href="/">Trang chủ </a> 
   <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon">
      <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
   </svg>
   Hướng dẫn mua hàng trên C&D
</div>
<div class="procedure-title">QUY ĐỊNH ĐÓNG GÓI SẢN PHẨM DÀNH CHO NHÀ BÁN HÀNG TRÊN WEBSITE C&D</div>
<div class="procedure-bold">1. Nguyên tắc chung</div>
<div class="procedure-text">- Nhà Bán Hàng cần đóng gói sản phẩm:</div>
<div class="procedure-text">+ Tuân thủ theo tiêu chuẩn đóng gói và hướng dẫn để đảm bảo chất lượng sản phẩm, an toàn vận chuyển.</div>
<div class="procedure-text" style="margin-bottom: 30px;">+ Nguyên liệu đóng gói tuân thủ bộ nhận diện thương hiệu của WEBSITE C&D dành cho đóng gói sản phẩm được công bố tại Quy định vận hành WEBSITE C&D.</div>
<div class="procedure-bold">2. Nguyên liệu cần chuẩn bị</div>
<div class="procedure-text">Nhà Bán Hàng thực hiện đóng hàng hoá phải tuân thủ các Quy định đóng gói sản phẩm của WEBSITE C&D. Nguyên liệu bắt buộc phải chuẩn bị như sau:</div>
<div class="procedure-text">(1) Thùng giấy/thùng carton (đối với tất cả các sản phẩm được bán trên C&D, trừ thực phẩm thịt tươi sống/đông lạnh).</div>
<div class="procedure-text">(2) Thùng xốp (đối với sản phẩm thịt tươi sống/đông lạnh).</div>
<div class="procedure-text">(3) Túi giấy (đối với sản phẩm là thực phẩm chế biến sẵn/ăn ngay).</div>
<div class="procedure-text">(4) Xốp bong bóng.</div>
<div class="procedure-text">(5) Màng co.</div>
<div class="procedure-text">(6) Mút xốp.</div>
<div class="procedure-text">(7) Túi đá khô/gel.</div>
<div class="procedure-text">(8) Băng keo C&D</div>
<div class="procedure-text">(9) Tem thương hiệu C&D (đối với các sản phẩm được Nhà Bán Hàng yêu cầu giữ nguyên đóng gói kiện hàng của Nhà Cung Cấp/Nhà Sản Xuất)</div>
<div class="procedure-bold" style="margin-bottom: 30px;">Lưu ý: </div>
<div class="procedure-text">Nhà Bán Hàng đóng gói sản phẩm bằng thùng giấy hoặc thùng xốp có kích thước thùng tuỳ theo kích thước của sản phẩm;</div>
<div class="procedure-text" style="margin-bottom: 30px;">Đối với các nguyên liệu số (8) Băng keo và (9) Tem thương hiệu C&D, Nhà Bán Hàng mua từ Bộ phận Kho của WEBSITE C&D. </div>
<div class="procedure-bold">3. Các bước đóng gói cơ bản</div>
<div class="procedure-text">- Quấn xốp bong bóng hoặc mút xốp 6 mặt của sản phẩm</div>
<div class="procedure-text">- Chèn kín các khe hở giữa các sản phẩm/ sản phẩm và thùng giấy bằng mút xốp</div>
<div class="procedure-text">- Dán kín thùng giấy bằng băng keo C&D</div>
<div class="procedure-text">- Dán phiếu giao hàng hoặc viết tay mã vận đơn bên ngoài thùng carton (tùy yêu cầu của từng đơn vị vận chuyển là Ahamove và Viettel Post).</div>
<div class="procedure-text" style="margin-bottom: 30px;"><span>Lưu ý:</span> Nhà Bán Hàng cần dán nhãn hiệu Nhà Cung Cấp, tem nguồn gốc, hướng dẫn bảo quản và sử dụng trên từng sản phẩm cung cấp (không dán lên kiện hàng).</div>
<div class="procedure-bold">4. Hướng dẫn đóng gói chi tiết cho các nhóm sản phẩm thường gặp</div>
<div class="procedure-bold">3.1. Thực phẩm tươi sống &amp; đông lạnh giao</div>
<div class="procedure-text">- Rau, củ, trái cây tươi: cần đóng gói trong màn cuộn rau củ quả hoặc túi zip và đóng vào thùng giấy có dán băng keo C&D</div>
<div class="procedure-text">- Rau, củ, trái cây tươi: cần đóng gói trong màn cuộn rau củ quả hoặc túi zip và đóng vào thùng giấy có dán băng keo C&D</div>
<div class="procedure-text">- Thực phẩm đông lạnh/ Thịt/ cá tươi sống: đóng gói trong túi zip và ướp đá để sản phẩm giữ được độ tươi và không bị ảnh hưởng bởi nhiệt độ. Sản phẩm được đóng gói vào thùng xốp dán băng keo C&D, trong thùng chữa từ 1-2 túi đá khô để giữ nhiệt</div>
<div class="procedure-text">- Thực phẩm chế biến sẵn/ăn ngay có thời hạn sử dụng ngắn (HSD từ 1-5 ngày) được đóng gói theo tiêu chuẩn của Nhà Sản Xuất, C&D khuyến khích giao hàng bằng túi giấy cho Khách Hàng)</div>
<div class="procedure-text">- Trứng: bắt buộc đóng gói trong vỉ và túi nilon riêng, không để chung với sản phẩm khác khiến vỉ trứng bị móp méo hoặc vỡ trứng.</div>
<div class="procedure-bold" style="margin-bottom: 30px;">Lưu ý:</div>
<div class="procedure-text">Tuy nhiên, đối với các sản phẩm được Nhà Bán Hàng yêu cầu giữ nguyên Mẫu mã đóng gói và được sự đồng ý từ Sàn C&D về việc giữ nguyên đó thì sản phẩm đó bắt buộc phải dán tem thương hiệu C&D trên kiện hàng</div>
<div class="procedure-text">Sản phẩm cùng loại: có thể kết hợp đóng gói theo nguyên tắc sản phẩm có khối lượng nặng, cấu tạo đặc, cứng được đặt bên dưới, sản phẩm khối lượng nhẹ, dễ dập đặt phía trên</div>
<div class="procedure-text">Sản phẩm có đặc tính lý/hóa khác nhau (cấu tạo, trọng lượng, nhiệt độ…) cần đóng gói riêng biệt thành các thùng/ bịch/ túi riêng</div>
<div class="procedure-text" style="margin-bottom: 30px;">Thực phẩm đóng gói trong bịch/ túi nilon cần đảm bảo cột miệng túi và niêm phong chắc chắn.</div>
<div class="procedure-bold">3.2. Thực phẩm sấy khô</div>
<div class="procedure-text">- Đóng bao bì chống thấm, hút chân không</div>
<div class="procedure-text">- Quấn kỹ màng co quanh sản phẩm để tránh phát ra mùi</div>
<div class="procedure-text">- Quấn xốp bong bóng 2-3 lớp bên ngoài sản phẩm</div>
<div class="procedure-text">- Chèn xốp hoặc cố định bằng túi khí</div>
<div class="procedure-text">- Đóng thùng giấy và dán băng keo C&D.</div>
<div class="procedure-text" style="margin-bottom: 30px;"><span>Lưu ý:</span> Hàng không có sẵn đóng gói từ nhà sản xuất: cần quấn thêm màng co bên ngoài thùng hàng.</div>
<div class="procedure-bold">3.3. Sản phẩm có chiều dài nhất dưới 60cm, không dễ vỡ/ móp méo, không phải chất lỏng, không yêu cầu điều kiện bảo quản/ vận chuyển đặc biệt</div>
<div class="procedure-text">- Quấn xốp bong bóng 1-2 lớp hoặc quấn màng co 3-5 lớp</div>
<div class="procedure-text">- Chèn cố định bằng túi khí hoặc chèn xốp 6 mặt xung quanh sản phẩm để tránh xê dịch</div>
<div class="procedure-text">- Đóng thùng giấy hoặc bỏ vào túi xốp bong bóng (tùy yêu cầu của từng đơn vị vận chuyển).</div>
<div class="procedure-text" style="margin-bottom: 30px;"><span>Lưu ý:</span> Nếu có từ 02 sản phẩm trở lên, cần có xốp chèn ở giữa các sản phẩm.</div>
<div class="procedure-bold">3.4. Sản phẩm có chiều dài nhất dưới 60cm, dễ vỡ/ móp méo/ chứa chất lỏng (bao gồm cả sản phẩm chứa cồn) hoặc sản phẩm đóng lon/ hộp/ chai</div>
<div class="procedure-text">- Quấn băng keo hoặc xốp bong bóng bịt kín nắp sản phẩm, bọc nylon bên ngoài thân và đáy sản phẩm để tránh rò rỉ</div>
<div class="procedure-text">- Quấn xốp bong bóng 2-3 lớp bên ngoài sản phẩm</div>
<div class="procedure-text">- Chèn cố định bằng túi khí hoặc chèn xốp 6 mặt xung quanh sản phẩm để tránh xê dịch</div>
<div class="procedure-text">- Đóng thùng carton, dùng băng keo quấn kín các góc cạnh của thùng carton để tránh rò rỉ/ tránh móp méo góc do va đập</div>
<div class="procedure-text">- Dán tem "hàng dễ vỡ" trên thùng hàng.</div>
<div class="procedure-text" style="margin-bottom: 30px;"><span>Lưu ý:</span></div>
<div class="procedure-text">Nếu có từ 02 sản phẩm trở lên, cần có xốp chèn ở giữa các sản phẩm</div>
<div class="procedure-text" style="margin-bottom: 30px;">Sản phẩm là chất lỏng bán theo thùng/lốc giữ nguyên đóng gói từ nhà sản xuất: quấn 2 lớp xốp bong bóng bên ngoài thùng/lốc sản phẩm.</div>
<div class="procedure-bold">3.5. Sản phẩm có chiều dài nhất từ 60 cm trở lên, không yêu cầu điều kiện bảo quản/ vận chuyển đặc biệt</div>
<div class="procedure-text">- Bọc xốp (kích thước 2.5 cm) 6 mặt của sản phẩm</div>
<div class="procedure-text">- Quấn xốp bong bóng 2-3 lớp bên ngoài sản phẩm</div>
<div class="procedure-text">- Dùng băng keo quấn kín các góc cạnh của thùng carton để tránh rò rỉ/ tránh móp méo góc do va đập</div>
</div>
`;

const Procedure = () => {
  return parse(html);
};

export default Procedure;
