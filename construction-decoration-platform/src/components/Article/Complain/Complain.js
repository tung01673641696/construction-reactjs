import React from "react";
import "./Complain.scss";
import parse from "html-react-parser";

const html = `
<div class="complain">
   <div class="complain-title">
      Trang chủ 
      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon" style="margin: 0px 5px;">
         <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </svg>
      Chính sách giải quyết thắc mắc, khiếu nại trên sàn giao dịch TMĐT C&D
   </div>
   <div class="complain-body">
      <div class="complain-body-title">CHÍNH SÁCH GIẢI QUYẾT THẮC MẮC, KHIẾU NẠI TRÊN SÀN GIAO DỊCH TMĐT C&D</div>
      <div class="complain-body-content">
         <div class="complain-bold">A. QUY TRÌNH GIẢI QUYẾT KHIẾU NẠI CỦA KHÁCH HÀNG</div>
         <div class="complain-text">Sàn giao dịch TMĐT C&D luôn có trách nhiệm tiếp nhận và xử lý khiếu nại của Khách Hàng liên quan đến các giao dịch tại Sàn giao dịch TMĐT C&D. Khi phát sinh các khiếu nại, tranh chấp, Sàn giao dịch TMĐT C&D đề cao giải pháp thương lượng, hòa giải giữa các bên nhằm duy trì mối quan hệ, sự tin cậy của Khách Hàng vào chất lượng dịch vụ của Sàn giao dịch TMĐT VNA Mall.</div>
         <div class="complain-bold" style="margin-top: 30px; margin-bottom: 30px;">Quy trình khiếu nại thực hiện theo các bước sau: </div>
         <div class="complain-text"><span>Bước 1</span>: Khách Hàng khiếu nại về Sản phẩm của Nhà Bán Hàng trên Sàn giao dịch TMĐT C&D thông qua 02 kênh thông tin sau:</div>
         <div class="complain-text" style="margin-bottom: 20px;">- Kênh số 1: Bộ phận Chăm sóc Khách hàng của Sàn giao dịch TMĐT C&D:</div>
         <div class="complain-text">• Gửi thư đến địa chỉ Email: C&D@vietnamairlines.com.</div>
         <div class="complain-text" style="margin-bottom: 20px;"> • Gọi điện đến Hotline: 1900 1033.</div>
         <div class="complain-text" style="margin-bottom: 30px;">- Kênh số 2: Liên hệ trực tiếp với Nhà Bán Hàng thông qua các thông tin trên email Xác nhận thanh toán hàng thành công hoặc hoá đơn điện tử mà Nhà Bán Hàng đã xuất cho Khách Hàng hoặc phiếu biên nhận giao hàng/hóa đơn được đính kèm Sản phẩm. </div>
         <div class="complain-text"><span>Bước 2:</span>Khi nhận được thông tin khiếu nại từ Khách Hàng, Bộ phận Chăm sóc Khách hàng của Sàn giao dịch TMĐT C&D sẽ tiếp nhận, liên hệ làm rõ các yêu cầu của Khách hàng trong thời gian sớm nhất có thể và không quá 01 ngày làm việc, kể từ ngày nhận được khiếu nại. Tùy theo tính chất và mức độ của vụ việc, Sàn giao dịch TMĐT C&D sẽ:</div>
         <div class="complain-text" style="margin-bottom: 30px;"><span>(i) </span> Đưa ra biện pháp xử lý, phương án cụ thể để giải quyết khiếu nại, tranh chấp của Khách Hàng trên cơ sở đạt được sự đồng thuận với Khách Hàng hoặc</div>
         <div class="complain-text"><span>(ii) </span> Chuyển khiếu nại của Khách Hàng đến Nhà Bán Hàng để Nhà Bán Hàng trực tiếp giải quyết và báo cho Khách Hàng biết. Sàn giao dịch TMĐT C&D vẫn tiếp tục theo dõi quá trình giải quyết khiếu nại của Nhà Bán Hàng. Trong trường hợp Khách Hàng không đồng ý với phương án giải quyết khiếu nại của Nhà Bán Hàng, Khách Hàng có thể gửi lại yêu cầu, khiếu nại về Sàn giao dịch TMĐT C&D. Sàn giao dịch TMĐT C&D sẽ xem xét, trực tiếp giải quyết và quyết định phương án giải quyết yêu cầu, khiếu nại cuối cùng.</div>
         <div class="complain-text" style="margin-bottom: 30px;">Trong trường hợp Khách Hàng liên hệ trực tiếp với Nhà Bán Hàng hoặc Nhà Bán Hàng nhận thông tin về khiếu nại từ Sàn giao dịch TMĐT C&D, Nhà Bán Hàng có trách nhiệm tiếp nhận; thu thập thông tin, chứng cứ từ các bên liên quan; đưa ra phán quyết và hướng khắc phục sau đó thống nhất phương án giải quyết khiếu nại với Khách Hàng và báo cho Sàn giao dịch TMĐT C&D.</div>
         <div class="complain-text" style="margin-bottom: 30px;"><span>Bước 3:</span>Nhà Bán Hàng và/hoặc Sàn giao dịch TMĐT C&D và Khách Hàng thực hiện các công việc đã thống nhất để giải quyết khiếu nại, sau đó xác nhận kết quả và tiến hành đóng khiếu nại.</div>
         <div class="complain-text"><span>Lưu ý:</span></div>
         <div class="complain-text">- Sàn giao dịch TMĐT C&D có thể yêu cầu Khách hàng và/hoặc Nhà Bán Hàng cung cấp các thông tin, bằng chứng liên quan đến giao dịch, Sản phẩm để xác minh, làm rõ vụ việc và đưa ra phương hướng xử lý, giải quyết phù hợp. </div>
         <div class="complain-text">- Trong trường hợp Sàn giao dịch TMĐT C&D đã nỗ lực giải quyết khiếu nại, tranh chấp nhưng vụ việc vượt quá khả năng và thẩm quyền của Sàn giao dịch TMĐT C&D, Sàn giao dịch TMĐT C&D sẽ yêu cầu Khách hàng đưa vụ việc ra cơ quan Nhà nước có thẩm quyền giải quyết theo quy định của pháp luật.</div>
         <div class="complain-text" style="margin-bottom: 30px;">- Trong trường hợp giao dịch phát sinh khiếu nại, tranh chấp mà được xác định lỗi thuộc về Nhà Bán Hàng, tùy vào mức độ vi phạm của Nhà Bán Hàng, Sàn giao dịch TMĐT C&D có quyền áp dụng các biện pháp, chế tài bao gồm nhưng không giới hạn nhắc nhở, tạm khóa Sản phẩm, giảm quảng cáo, giảm hiển thị Sản phẩm, giảm các chương trình hỗ trợ, khóa tài khoản hoặc chuyển sai phạm cho cơ quan nhà nước có thẩm quyền xử lý đồng thời yêu cầu Nhà Bán Hàng bồi thường cho Khách Hàng thỏa đáng trên cơ sở thỏa thuận với Khách hàng.</div>
         <div class="complain-bold">B. QUY TRÌNH GIẢI QUYẾT KHIẾU NẠI CỦA NHÀ BÁN HÀNG</div>
         <div class="complain-bold">Điều 1. Khi nào Nhà Bán Hàng có thể gửi khiếu nại trên Sàn giao dịch TMĐT</div>
         <div class="complain-text">1. Sàn giao dịch TMĐT C&D khuyến khích Nhà Bán Hàng chủ động thương lượng với Khách Hàng để xử lý nhanh chóng, kịp thời các yêu cầu đổi - trả Sản phẩm và hoàn tiền, các khiếu nại của Khách Hàng. Trong trường hợp Nhà Bán Hàng và Khách Hàng không thể đi đến thỏa thuận chung, Nhà Bán Hàng có thể gửi khiếu nại tới Sàn giao dịch TMĐT C&D. Sàn giao dịch TMĐT sẽ xem xét, trực tiếp giải quyết và quyết định phương án giải quyết yêu cầu, khiếu nại cuối cùng.</div>
         <div class="complain-text">2. Trường hợp Nhà Bán Hàng có thể khiếu nại tới Sàn giao dịch TMĐT C&D:</div>
         <div class="complain-text">• Không thể thương lượng với Khách Hàng;</div>
         <div class="complain-text">• Khách Hàng thông báo chưa nhận được Sản phẩm;</div>
         <div class="complain-text">• Sản phẩm trả về không đáp ứng điều kiện được đổi – trả và hoàn tiền;</div>
         <div class="complain-text">• Gần hết thời hạn quy định nhưng vẫn chưa nhận được Sản phẩm trả về;</div>
         <div class="complain-text" style="margin-bottom: 30px;">• Các trường hợp khác phát sinh trên thực tế.</div>
         <div class="complain-bold">Điều 2. Quy trình giải quyết khiếu nại của Sàn giao dịch TMĐT C&D</div>
         <div class="complain-text" style="margin-bottom: 30px;"><span>Bước 1:</span> Nhà Bán Hàng gửi yêu cầu khiếu nại về Bộ phận Chăm sóc Khách hàng của Sàn giao dịch TMĐT C&D để thông báo yêu cầu giải quyết khiếu nại. Nhà Bán Hàng cần nêu lý do khiếu nại và các bằng chứng chứng minh.</div>
         <div class="complain-text">• Gửi thư điện tử đến địa chỉ Email: C&D@vietnamairlines.com.</div>
         <div class="complain-text" style="margin-bottom: 30px;">• Gọi điện đến Hotline: 1900 1033.</div>
         <div class="complain-text" style="margin-bottom: 30px;"><span>Bước 2:</span> Sau khi nhận được khiếu nại từ Nhà Bán Hàng, Sàn giao dịch TMĐT C&D sẽ xem xét kỹ càng khiếu nại. Sàn giao dịch TMĐT C&D có thể yêu cầu Khách Hàng và/hoặc Nhà Bán Hàng cung cấp các thông tin, bằng chứng liên quan đến giao dịch, Sản phẩm để xác minh, làm rõ vụ việc và đưa ra phương án xử lý thích hợp.</div>
         <div class="complain-text"><span>Bước 3:</span> Sàn giao dịch TMĐT C&D quyết định phương án giải quyết khiếu nại cuối cùng.</div>
         <div class="complain-text">Bốn kết quả có thể xảy ra sau khi kết thúc quy trình giải quyết khiếu nại:</div>
         <div class="complain-text">• Khách Hàng được hoàn tiền một phần/toàn phần giá trị Sản phẩm;</div>
         <div class="complain-text">• Khách Hàng gửi trả một phần/tất cả Sản phẩm và được hoàn tiền;</div>
         <div class="complain-text">• Khách Hàng được đổi sang Sản phẩm khác thay cho Sản phẩm đã nhận;</div>
         <div class="complain-text" style="margin-bottom: 40px;">• Yêu cầu đổi – trả Sản phẩm và hoàn tiền của Khách Hàng bị hủy và đơn hàng sẽ được thanh toán cho Nhà Bán Hàng.</div>
         <div class="complain-bold">Điều 3. Các trường hợp Nhà Bán Hàng được coi là vi phạm Chính sách đổi – trả Sản phẩm và hoàn tiền</div>
         <div class="complain-text">1. Sau khi Nhà Bán Hàng nhận thông tin về yêu cầu đổi - trả Sản phẩm từ Sàn giao dịch TMĐT C&D nhưng sau 24 giờ, Nhà Bán Hàng không xử lý yêu cầu của Khách Hàng. Sàn giao dịch TMĐT C&D sẽ tự động quyết định phương án xử lý yêu cầu đổi - trả Sản phẩm là hoàn tiền/yêu cầu Khách Hàng gửi trả Sản phẩm. Trường hợp tự động hoàn tiền cho Khách Hàng, Khách Hàng không cần gửi trả Sản phẩm và số tiền hoàn do Nhà Bán Hàng chịu trách nhiệm.</div>
         <div class="complain-text">2. Tại bước Nhà Bán Hàng nhận lại và kiểm tra Sản phẩm để xác nhận yêu cầu đổi - trả Sản phẩm cho Khách Hàng: Sau 24 giờ, Nhà Bán Hàng không phản hồi kết quả kiểm tra cho Khách Hàng và Khách Hàng gửi yêu cầu khiếu nại về việc này đến Sàn giao dịch TMĐT C&D. Trong trường hợp này, Sàn giao dịch TMĐT C&D sẽ tự động hoàn tiền cho Khách Hàng. Số tiền hoàn do Nhà Bán Hàng chịu trách nhiệm.</div>
      </div>
   </div>
</div>
`;

const Complain = () => {
  return parse(html);
};

export default Complain;
