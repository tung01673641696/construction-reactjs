import React from 'react';
import "./Policy.scss";
import parse from "html-react-parser";

const html = `
<div class="policy">
<div class="policy-container">
   <div class="policy-home">
      <p>
         Trang Chủ 
         <span>
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon">
               <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
         </span>
         Chính sách đổi trả
      </p>
   </div>
   <div class="policy-title">
      <p>CHÍNH SÁCH ĐỔI TRẢ</p>
   </div>
   <div class="policy-support">
      <p style="font-weight: 700;">Điều 1. Hướng dẫn đổi, trả Sản phẩm và hoàn tiền đối với Khách Hàng</p>
      <p>1. Áp dụng đối với tất cả các đơn hàng được thực hiện trên Sàn giao dịch TMĐT C&D (được tính bằng các đơn hàng có mã đơn hàng được ghi nhận/cấu thành bởi hệ thống của Sàn giao dịch TMĐT C&D). Chính sách và quy trình xử lý đổi, trả hàng và hoàn tiền (sau đây gọi là “Chính sách”) không áp dụng đối với trường hợp Khách Hàng thỏa thuận với Nhà Bán Hàng không thông qua Sàn giao dịch TMĐT C&D và đặt mua ngoài dịch vụ do Sàn giao dịch VNA Mall cung cấp.</p>
      <p>2. Sản phẩm chỉ được đổi, trả khi thoả mãn một trong những điều kiện đã được nêu tại Điều 2 của Chính sách này. Khi chắc chắn Sản phẩm thỏa mãn một trong các điều kiện đã được nêu tại Điều 2 Chính sách này, Khách Hàng thực hiện theo trình tự được quy định tại Điều 4 Chính sách này để được Sàn giao dịch TMĐT C&D hỗ trợ tốt nhất. </p>
      <p style="font-weight: 700;">Điều 2: Chính sách đổi, trả Sản phẩm của Sàn giao dịch TMĐT C&D</p>
      <p style="font-weight: 700;">1.Mục đích:</p>
      <p>Nhằm đảm bảo quyền lợi người tiêu dùng, nâng cao chất lượng dịch vụ và uy tín của Vietnam Airlines, Sàn giao dịch TMĐT C&D sẽ hỗ trợ Khách Hàng đổi Sản phẩm mới cùng loại hoặc trả sản phẩm nếu Sản phẩm mà Nhà Bán Hàng giao cho Khách Hàng gặp sự cố không thể khắc phục được ngay và/hoặc bị khiếm khuyến, hư hỏng tại thời điểm nhận hàng mà không phải do lỗi của Khách Hàng. Sản phẩm chỉ được đổi, trả khi đáp ứng đầy đủ các điều kiện quy định dưới đây. </p>
      <p style="font-weight: 700;">2.Điều kiện áp dụng</p>
      <p>Khách Hàng được quyền đồng kiểm tất cả các Sản phẩm được cung cấp bởi Sàn giao dịch TMĐT C&D ngay tại thời điểm nhận hàng. Sàn giao dịch TMĐT VNA Mall và Nhà Bán Hàng sẽ không chịu trách nhiệm giải quyết khiếu nại về việc giao thiếu Sản phẩm hoặc giao sai Sản phẩm của Khách Hàng sau khi Khách Hàng đã ký nhận hàng thành công. Sàn giao dịch TMĐT C&D không chấp nhận đổi - trả Sản phẩm hoặc hoàn tiền đối với trường hợp Khách Hàng thay đổi nhu cầu mua hàng. Khách Hàng có quyền đổi Sản phẩm khác hoặc trả Sản phẩm cho Nhà Bán Hàng và được hoàn tiền thông qua Sàn giao dịch TMĐT C&D (sau đây gọi tắt là “VNAMall”) khi thỏa mãn đầy đủ các điều kiện sau đây:</p>
   </div>
   <div class="policy-condition">
      <p style="font-weight: 700; font-style: italic;">2.1, Điều kiện về hình thức, chất lượng và số lượng Sản phẩm:</p>
      <table>
         <tr>
            <th>STT</th>
            <th>Điều kiện</th>
            <th>Đơn vị chịu trách nhiệm</th>
         </tr>
         <tr>
            <td>1</td>
            <td>Sản phẩm giao đến Khách Hàng không nguyên vẹn, hư hại do quá trình vận chuyển. Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ, dập nát...</td>
            <td> C&D (Cụ thể là đơn vị Vận chuyển của C&D)</td>
         </tr>
         <tr>
            <td>2</td>
            <td>Sản phẩm giao không đúng về số lượng, mẫu mã, chủng loại so với đơn đặt hàng của Khách Hàng đã đặt trên C&D.</td>
            <td>Nhà Bán Hàng</td>
         </tr>
         <tr>
            <td>3</td>
            <td>Sản phẩm đã hết hạn sử dụng trước hoặc vào ngày giao hàng, trừ các sản phẩm có hạn sử dụng trong ngày và đã được thông báo khi đặt mua hàng.</td>
            <td> Nhà Bán Hàng</td>
         </tr>
         <tr>
            <td>4</td>
            <td>Sản phẩm bị hỏng do lỗi của Nhà Sản Xuất (khác biệt so với tiêu chuẩn chất lượng đã công bố của Nhà Sản Xuất). Trường hợp này áp dụng đối với các Sản phẩm thuộc loại hàng hóa sản xuất, chế biến đóng gói.</td>
            <td> Nhà Bán Hàng</td>
         </tr>
         <tr>
            <td>5</td>
            <td>Khách Hàng nhận Sản phẩm từ Đơn vị Vận chuyển có sự khác biệt một cách rõ rệt so với thông tin về Sản phẩm mà Nhà Bán Hàng đăng tải trên VNA Mall.</td>
            <td> Nhà Bán Hàng</td>
         </tr>
         <tr>
            <td>6</td>
            <td>Khách Hàng đã thanh toán nhưng không nhận được Sản phẩm đúng thời gian theo đơn hàng.</td>
            <td> Nhà Bán Hàng</td>
         </tr>
      </table>
   </div>
   <div class="policy-condition">
      <p style="font-weight: 700; font-style: italic;">2.1, Điều kiện về hình thức, chất lượng và số lượng Sản phẩm:</p>
      <table>
         <tr>
            <th>STT</th>
            <th>Sản phẩm</th>
            <th>Thời gian yêu cầu đổi trả sau khi nhận hàng (tính kể từ thời điểm nhận hàng)</th>
            <th> Ghi chú</th>
         </tr>
         <tr>
            <td>1</td>
            <td>Rau, củ, quả, trái cây, đồ tươi sống</td>
            <td>Tối đa 24 giờ</td>
            <td>Yêu cầu bảo quản ngăn mát tủ lạnh.</td>
         </tr>
         <tr>
            <td>2</td>
            <td>Thực phẩm đông lạnh</td>
            <td>Tối đa 24 giờ</td>
            <td>Yêu cầu bảo quản ngăn mát tủ lạnh.</td>
         </tr>
         <tr>
            <td>3</td>
            <td>Thực phẩm chế biến sẵn/ăn ngay có thời hạn sử dụng ngắn (HSD từ 01-05 ngày)</td>
            <td>Tối đa 24 giờ</td>
            <td>Yêu cầu bảo quản ngăn mát tủ lạnh.</td>
         </tr>
         <tr>
            <td>4</td>
            <td>Thực phẩm khô</td>
            <td>Tối đa 24 giờ</td>
            <td>Bảo quản nơi khô ráo, thoáng mát</td>
         </tr>
         <tr>
            <td>5</td>
            <td>Nước giải khát</td>
            <td>Tối đa 24 giờ</td>
            <td>Bảo quản ở nhiệt độ phòng</td>
         </tr>
         <tr>
            <td>6</td>
            <td>Đồ uống có cồn</td>
            <td> Tối đa 05 ngày</td>
            <td>Bảo quản ở nhiệt độ phòng</td>
         </tr>
         <tr>
            <td>7</td>
            <td>Đối với các mặt hàng còn lại</td>
            <td> Tối đa 07 ngày</td>
            <td>Áp dụng Chính sách khi xác nhận nguyên nhân lỗi là do Nhà Bán Hàng, VNA Mall hoặc Đơn vị Vận chuyển của C&D.</td>
         </tr>
      </table>
   </div>
   <div class="policy-condition">
      <p style="font-weight: 700; font-style: italic;">2.1, Điều kiện về hình thức, chất lượng và số lượng Sản phẩm:</p>
      <p>Sản phẩm mà Khách Hàng yêu cầu đổi - trả phải là Sản phẩm được mua tại VNA Mall. Khách Hàng phải cung cấp các thông tin sau để xác định nguồn gốc mua</p>
      <p>Sản phẩm: </p>
      <p>- Hoá đơn điện tử mà Nhà Bán Hàng tại C&D xuất cho Khách Hàng; </p>
      <p>- Email xác nhận đã thanh toán đơn hàng do VNA Mall gửi tự động về Email của Khách Hàng sau khi cổng thanh toán của C&D xác nhận. </p>
      <p><span style="font-weight: 700;">Lưu ý :</span> Sản phẩm được xác định nguồn gốc mua tại C&D khi Khách Hàng cung cấp được một trong hai bằng chứng nêu trên.</p>
   </div>
   <div class="policy-condition">
      <p style="font-weight: 700; font-style: italic;">2.4. Điều kiện về tình trạng Sản phẩm</p>
      <p>Tất cả các Sản phẩm yêu cầu đổi - trả phải chưa qua sử dụng, còn nguyên bao bì, tem, mác hoặc niêm phong của C&D, trừ trường hợp Sản phẩm bị hư hại trong quá trình vận chuyển hoặc Sản phẩm bị lỗi, không đạt chất lượng đã cam kết mà chỉ có thể biết được sau khi sử dụng Sản phẩm.</p>
   </div>
   <div class="policy-condition-italic">
      <div>
         <p style="font-weight: 700; font-style: italic;">3. Trường hợp không chấp nhận đổi – trả Sản phẩm</p>
      </div>
      <p>3.1.Không thỏa mãn các điều kiện đổi – trả Sản phẩm theo quy định tại Điều 2 Chính sách. </p>
      <div>
         <p>3.2. Khách Hàng muốn thay đổi chủng loại, mẫu mã Sản phẩm sang loại Sản phẩm khác Sản phẩm mà Khách Hàng đã đặt mua trên C&D.</p>
      </div>
      <div>
         <p>3.3. Khách hàng thay đổi ý định mua hàng hoặc tính năng và công dụng của Sản phẩm không như ý hoặc không thích Sản phẩm đã đặt mua.</p>
      </div>
      <p>3.4. Khách Hàng không thực hiện đúng theo cách thức bảo quản, hướng dẫn sử dụng dẫn tới hư hỏng Sản phẩm, chất lượng Sản phẩm không bảo đảm. </p>
      <p>3.5. Khách Hàng không tuân theo quy trình đổi - trả Sản phẩm được quy định tại Điều 4 Chính sách.</p>
      <p>3.6. Tình trạng bên ngoài Sản phẩm không còn nguyên vẹn như rách bao bì, trầy, xước, dập, vỡ, cháy, hỏng... thuộc về lỗi của Khách Hàng. </p>
      <p>3.7. Sản phẩm đã được Khách Hàng kiểm tra và ký xác nhận tình trạng vào phiếu giao hàng và đồng ý nhận hàng tại thời điểm giao hàng nhưng sau đó Khách Hàng yêu cầu đổi, trả hàng hóa vì lý do lỗi về ngoại quan (trầy xước, móp méo, ố vàng, vỡ...).</p>
      <p>3.8. Sản phẩm bị thiếu số lượng hoặc thiếu phụ kiện đi kèm (nếu có ) so với lúc xác nhận đã nhận hàng/giao hàng. Ví dụ: sản phẩm đã được bóc mở/ sử dụng 1 phần mà không xác minh được chất lượng của phần đã bị bóc mở/ sử dụng. </p>
      <p>3.9. Thời gian đổi – trả Sản phẩm quá thời gian yêu cầu theo quy định tại Điều 2 Chính sách. </p>
      <p>3.10. Sản phẩm bị hỏng hóc ngoại quan do nguyên nhân xuất phát từ các sự kiện bất khả kháng nằm ngoài khả năng kiểm soát của Nhà Bán Hàng, C&D và Đơn vị Vận chuyển bao gồm nhưng không giới hạn thiên tai, dịch bệnh, chiến tranh, bạo động, cấm vận, hỏa hoạn, các quyết định của các cơ quan nhà nước có thẩm quyền. </p>
   </div>
   <div class="policy-condition-italic">
      <p style="font-weight: 700; height: 7px; font-style: italic;">4. Quy trình xử lý thủ tục đổi - trả Sản phẩm.</p>
      <p>4.1. Khách Hàng liên hệ trực tiếp và yêu cầu với Nhà Bán Hàng hoặc khiếu nại thông qua Bộ phận Chăm sóc khách hàng (sau đây gọi là “CSKH”) của C&D. </p>
      <p>4.2. Sau khi cung cấp đầy đủ thông tin theo yêu cầu và được xác nhận đáp ứng đủ điều kiện đổi – trả Sản phẩm theo quy định tại Điều 2 Chính sách, việc đổi - trả Sản phẩm và/hoặc hoàn tiền sẽ được thực hiện theo đúng quy định của C&D tại Chính sách này.</p>
      <p style="margin-top: 70px;">4.3. Quy định về thời gian xử lý toàn bộ quy trình đổi - trả Sản phẩm cho Khách Hàng được quy định sau đây:</p>
   </div>
   <div class="policy-condition policy-mob">
      <table>
         <tr>
            <th class="stt">STT</th>
            <th>Sản phẩm</th>
            <th>Thời gian tối đa để C&D/Nhà bán hàng tiếp nhận và xử lý yêu cầu, khiếu nại của Khách Hàng</th>
            <th>Thời gian tối đa để Khách Hàng phản hồi, xác nhận về phương án xử lý</th>
            <th>Phương án xử lý</th>
            <th> Thời gian thực hiện phương án xử lý</th>
         </tr>
         <tr>
            <td rowspan="2">1</td>
            <td rowspan="2"> • Rau, củ, quả, trái cây, đồ tươi sống;<br> • Thực phẩm đông lạnh;<br>• Các thực phẩm từ sữa;<br> • Thực phẩm chế biến sẵn/ăn ngay có thời hạn sử dụng ngắn (HSD từ 1-5 ngày);<br> • Nước gỉải khát; •<br>Đồ uống có cồn; <br>• Thực phẩm khô. </td>
            <td><span style="font-weight: 700;">Thời gian tiếp nhận yêu cầu: </span> phản hồi về việc đã tiếp nhận chậm nhất trong vòng 01 ngày kể từ khi nhận được yêu cầu. <br><span style="font-weight: 700;">Thời gian xử lý yêu cầu:</span> trong vòng tối đa 01 ngày tính từ khi nhận đủ thông tin theo quy định từ phía Khách Hàng</td>
            <td>Trong vòng tối đa 03 ngày tính từ khi Khách Hàng nhận được kết quả về phương án xử lý khiếu nại của Nhà Bán Hàng. </td>
            <td>Hoàn tiền cho Khách hàng</td>
            <td>Thời gian thực hiện giao dịch hoàn tiền: trong vòng tối đa 03 ngày kể từ khi Khách Hàng gửi xác nhận chấp nhận kết quả xử lý khiếu nại. Thời gian tiền được hoàn về tài khoản thanh toán ban đầu của Khách Hàng phụ thuộc vào phương thức thanh toán và chính sách của ngân hàng.</td>
         </tr>
         <tr>
            <td><span style="font-weight: 700;">Thời gian tiếp nhận yêu cầu: </span> phản hồi về việc đã tiếp nhận chậm nhất trong vòng 01 ngày kể từ khi nhận được yêu cầu. <br><span style="font-weight: 700;">Thời gian xử lý yêu cầu:</span> trong vòng tối đa 01 ngày tính từ khi nhận đủ thông tin theo quy định từ phía Khách Hàng</td>
            <td>Trong vòng tối đa 03 ngày tính từ khi Khách Hàng nhận được kết quả về phương án xử lý khiếu nại của Nhà Bán Hàng. </td>
            <td>Đổi Sản phẩm cho Khách Hàng. </td>
            <td>Thời gian Khách Hàng được nhận được Sản phẩm đổi trả là trong vòng 03 ngày kể từ khi Khách hàng gửi xác nhận chấp nhận kết quả xử ký khiếu nại. Trong trường hợp C&D/Nhà Bán hàng thực hiện sớm hoặc trễ hơn thời gian trên thì Bộ phận CSKH của C&D/Nhà Bán Hàng sẽ gọi điện thông báo trước cho Khách Hàng ngay sau khi nhận được phản hồi của Khách Hàng về kết quả phương án xử lý khiếu nại từ Nhà Bán Hàng.</td>
         </tr>
         <tr>
            <td rowspan="2">2</td>
            <td rowspan="2">Đối với các mặt hàng còn lại</td>
            <td><span style="font-weight: 700;">Thời gian tiếp nhận yêu cầu: </span> phản hồi đã tiếp nhận chậm nhất trong vòng 1 ngày kể từ khi nhận được yêu cầu.<br> <span style="font-weight: 700;">Thời gian xử lý yêu cầu:</span> Trong vòng tối đa 02 ngày tính từ khi nhận đủ thông tin theo quy định từ phía Khách Hàng.</td>
            <td>Trong vòng tối đa 03 ngày tính từ khi Khách Hàng nhận được kết quả xử lý khiếu nại của Nhà Bán Hàng.</td>
            <td>Hoàn tiền cho Khách hàng</td>
            <td>Thời gian thực hiện giao dịch hoàn tiền: trong vòng tối đa 03 ngày kể từ khi Khách Hàng gửi xác nhận chấp nhận phương án xử lý khiếu nại. Thời gian tiền được hoàn lại về tài khoản thanh toán ban đầu của Khách Hàng phụ thuộc vào phương thức thanh toán và chính sách của ngân hàng.</td>
         </tr>
         <tr>
            <td><span style="font-weight: 700;">Thời gian tiếp nhận yêu cầu: </span> phản hồi đã tiếp nhận chậm nhất trong vòng 1 ngày kể từ khi nhận được yêu cầu.<br> <span style="font-weight: 700;">Thời gian xử lý yêu cầu:</span> Trong vòng tối đa 02 ngày tính từ khi nhận đủ thông tin theo quy định từ phía Khách Hàng.</td>
            <td>Trong vòng tối đa 03 ngày tính từ khi Khách Hàng nhận được kết quả xử lý khiếu nại của Nhà Bán Hàng.</td>
            <td>Đổi Sản phẩm cho Khách Hàng. </td>
            <td>Thời gian Khách Hàng được nhận được Sản phẩm đổi trả là trong vòng 03-05 ngày kể từ khi Khách hàng gửi xác nhận chấp nhận phương án xử lý khiếu nại. Trong trường hợp C&D/Nhà Bán hàng thực hiện sớm hoặc trễ hơn thời gian trên thì Bộ phận CSKH của C&D/Nhà Bán Hàng sẽ gọi điện thông báo trước cho Khách Hàng ngay sau khi nhận được phản hồi của Khách Hàng về kết quả phương án xử lý khiếu nại từ Nhà Bán Hàng.</td>
         </tr>
      </table>
   </div>
   <p style="font-weight: 700; font-style: italic;">4.4. Quy trình đổi - trả Sản phẩm:</p>
   <p style="font-weight: 700; font-style: italic;">• Phương án 1: Khách Hàng gửi yêu cầu qua C&D</p>
   <img src="/static/media/policy.5f4a413594eb2ab6e818.png" alt="" style="width: 100%;">
   <p style="margin-top: 40px; font-weight: 700;">Mô tả quy trình</p>
   <div class="policy-condition policy-mob">
      <p style="font-weight: 700; height: 7px; font-style: italic;">2.1, Điều kiện về hình thức, chất lượng và số lượng Sản phẩm:</p>
      <table>
         <tr>
            <th>Bước</th>
            <th style="width: 320px;">Thực hiện</th>
            <th style="width: 506px;">Mô tả</th>
            <th> Ghi chú</th>
         </tr>
         <tr>
            <td>1</td>
            <td>Khách hàng</td>
            <td>Khách Hàng có nhu cầu đổi - trả Sản phẩm phải tìm hiểu về quy trình xử lý đổi - trả Sản phẩm được cập nhật trên www.C&D.vietnamairlines.com và chuẩn bị thông tin cần thiết cho việc thực hiện đổi hoặc trả Sản phẩm.</td>
         </tr>
         <tr>
            <td>2</td>
            <td>Khách hàng</td>
            <td>Khách Hàng liên hệ Bộ phận CSKH của C&D để thông báo yêu cầu đổi - trả Sản phẩm. Khách Hàng phải gửi kèm yêu cầu Hóa đơn của đơn hàng hoặc Email xác nhận thanh toán thanh công cho đơn hàng và các hình ảnh chứng minh đủ điều kiện đổi – trả Sản phẩm.</td>
            <td></td>
         </tr>
         <tr>
            <td>3</td>
            <td>C&D</td>
            <td>Bộ phận CSKH của C&D tiếp nhận yêu cầu đổi hoặc trả hàng của Khách Hàng.</td>
            <td></td>
         </tr>
         <tr>
            <td>4</td>
            <td>C&D</td>
            <td>Bộ phận CSKH của C&D gửi yêu cầu của Khách Hàng đến Nhà Bán Hàng thông qua việc gọi điện trực tiếp và gửi kèm email thông báo.</td>
            <td></td>
         </tr>
         <tr>
            <td>5</td>
            <td>C&D</td>
            <td>Nhà Bán Hàng tiếp nhận yêu cầu đổi - trả từ C&D.</td>
            <td></td>
         </tr>
         <tr>
            <td>6</td>
            <td>Nhà Bán Hàng</td>
            <td> Nhà Bán Hàng xác thực yêu cầu đổi - trả:<br> • Trường hợp 1: Yêu cầu đổi - trả cần Khách Hàng gửi lại Sản phẩm để chứng minh điều kiện đổi - trả thì Nhà Bán Hàng chuyển sang thực hiện bước 7. <br>• Trường hợp 2: Yêu cầu đổi - trả không cần Khách Hàng gửi lại Sản phẩm để chứng minh yêu cầu đổi - trả thì Nhà Bán Hàng chuyển sang thực hiện bước 10.<br> • Trường hợp 3: Nhà Bán Hàng và Khách Hàng xác nhận nguyên nhân đổi - trả là do lỗi hệ thống của C&D hoặc lỗi giao hàng của Đơn vị Vận chuyển thì được xử lý theo 02 trường hợp sau:<br> + Trường hợp Khách Hàng yêu cầu đổi Sản phẩm và Nhà Bán Hàng đồng ý thực hiện: C&D hoặc Đơn vị Vận chuyển sẽ phải chịu toàn bộ trách nhiệm về chi phí đổi Sản phẩm bao gồm tiền Sản phẩm, phí vận chuyển trả Sản phẩm và giao Sản phẩm mới.<br> + Trường hợp Khách Hàng yêu cầu đổi Sản phẩm nhưng Nhà Bán Hàng từ chối thực hiện và trường hợp Khách Hàng yêu cầu Trả hàng để được hoàn tiền thì C&D hoặc Đơn vị Vận chuyển sẽ phải hoàn trả tổng số tiền mà Khách Hàng đã thanh toán qua cổng thanh toán của C&D (tham khảo Điều 3 của Chính sách này).<br> + Trong trường hợp Nhà Bán Hàng không đồng ý đổi Sản phẩm do nguyên nhân đã hết Sản phẩm để đổi nhưng Khách Hàng vẫn muốn được đổi Sản phẩm thay vì trả Sản phẩm để hoàn tiền thì Nhà Bán Hàng sẽ thực hiện đổi Sản phẩm cho Khách Hàng trong thời gian nhanh nhất là 14 ngày kể từ ngày Khách Hàng xác nhận đồng ý chờ nhận Sản phẩm đổi thông qua email giữa Nhà Bán Hàng và Khách Hàng.<br> + Tùy từng trường hợp, Sản phẩm được trả về do lỗi của C&D hoặc Đơn vị Vận chuyển của C&D sẽ được C&D xử lý theo một trong các phương án sau đây: (i) xử lý và tiêu huỷ rác đối với các mặt hàng thực phẩm tươi sống/ đông lạnh/ khô nếu hư hỏng trên 90%; (ii) phân loại Sản phẩm để tiếp tục lựa chọn và sử dụng nếu đạt yêu cầu; (iii) thực hiện bảo hành đối với các Sản phẩm còn lại nếu Sản phẩm được Nhà Bán Hàng/Nhà Sản Xuất quy định được bảo hành.</td>
            <td></td>
         </tr>
         <tr>
            <td>7</td>
            <td>Nhà Bán Hàng</td>
            <td> Tối đa 07 ngày</td>
            <td></td>
         </tr>
         <tr>
            <td>8</td>
            <td>Khách hàng</td>
            <td> Khách Hàng gửi trả lại Sản phẩm cho Nhà Bán Hàng. Chi phí gửi Sản phẩm do Nhà Bán Hàng chịu trách nhiệm. </td>
            <td> Về phía Khách Hàng, Sản phẩm gửi trả lại phải bao gồm Hoá đơn đã mua hàng từ Nhà Bán Hàng trên C&D. Việc đóng gói các loại Sản phẩm để đổi - trả được quy định tại Khoản 4.4 Điều 4 Chính sách.</td>
         </tr>
         <tr>
            <td>9</td>
            <td>Nhà Bán Hàng</td>
            <td> Nhà Bán Hàng nhận Sản phẩm được yêu cầu đổi - trả và kiểm tra Sản phẩm.</td>
            <td></td>
         </tr>
         <tr>
            <td>10</td>
            <td>Nhà Bán Hàng</td>
            <td>Nhà Bán Hàng quyết định phương án xử lý với yêu cầu đổi - trả của Khách Hàng.<br>• Trường hợp 1: Đồng ý yêu cầu đổi-trả.<br>• Trường hợp 2: Từ chối yêu cầu đổi-trả.</td>
            <td></td>
         </tr>
         <tr>
            <td>11</td>
            <td>Nhà Bán Hàng</td>
            <td>Nhà Bán Hàng gửi phản hồi về phương án xử lý yêu cầu đổi - trả đến Khách Hàng và C&D qua email để các bên theo dõi tình trạng giải quyết đổi - trả Sản phẩm để hoàn tiền.</td>
            <td></td>
         </tr>
         <tr>
            <td>12</td>
            <td>Khách hàng</td>
            <td>Khách Hàng xác nhận phản hồi về kết quả xử lý của Nhà Bán Hàng.<br>• Trường hợp 1: Đồng ý kết quả xử lý đổi - trả. Khách Hàng chuyển sang thực hiện bước 13.<br>• Trường hợp 2: Từ chối kết quả xử lý đổi - trả. Khách Hàng chuyển sang thực hiện bước 14.</td>
            <td></td>
         </tr>
         <tr>
            <td>13</td>
            <td>Khách hàng</td>
            <td>02 phương án được thực hiện khi Khách Hàng được đồng ý kết quả xử lý đổi - trả:<br>• Phương án 1: Khách Hàng được nhận Sản phẩm thay thế: Sản phẩm thay thế được giao cho Khách Hàng trong thời hạn trong 03 ngày kể từ ngày Khách Hàng xác nhận phản hồi của Nhà Bán Hàng. <br>• Phương án 2: Khách Hàng được hoàn tiền: Thời gian thực hiện giao dịch hoàn tiền là trong vòng tối đa 03 ngày kể từ khi Khách Hàng xác nhận phản hồi của Nhà Bán Hàng. Thời gian tiền được hoàn lại về tài khoản thanh toán ban đầu của Khách Hàng phụ thuộc vào phương thức thanh toán và chính sách của ngân hàng. <br>• Nhà Bán Hàng và Khách Hàng lựa chọn một trong hai phương án trên theo thương lượng của hai bên.</td>
            <td></td>
         </tr>
         <tr>
            <td>14</td>
            <td>C&D</td>
            <td>Khách Hàng gửi yêu cầu, khiếu nại đến C&D.</td>
            <td></td>
         </tr>
         <tr>
            <td>15</td>
            <td>C&D</td>
            <td>Tiếp nhận khiếu nại từ Khách Hàng.</td>
            <td></td>
         </tr>
         <tr>
            <td>16</td>
            <td>C&D</td>
            <td>Làm việc trực tiếp với Khách Hàng và Nhà Bán Hàng. C&D sẽ xem xét và xử lý dựa trên yêu cầu của Khách Hàng và thông tin từ Nhà Bán Hàng.</td>
            <td></td>
         </tr>
         <tr>
            <td>17</td>
            <td>C&D</td>
            <td>C&D xử lý theo quy trình giải quyết khiếu nại được quy định tại Quy chế hoạt động của Sàn giao dịch TMĐT C&D được đăng tải tại www.C&D.vietnamairlines.com</td>
            <td></td>
         </tr>
      </table>
   </div>
   <p style="font-weight: 700; font-style: italic;">• Phương án 2: Khách hàng gửi yêu cầu trực tiếp đến Nhà Bán Hàng:</p>
   <img src="/static/media/policy2.f2e57079b4b54d244a08.png" alt="" style="width: 100%;">
   <p style="margin-top: 40px; font-weight: 700;">Mô tả quy trình</p>
   <div class="policy-condition policy-mob">
      <table>
         <tr>
            <th>Bước</th>
            <th style="width: 320px;">Thực hiện</th>
            <th style="width: 506px;">Mô tả</th>
            <th> Ghi chú</th>
         </tr>
         <tr>
            <td>1</td>
            <td>Khách hàng</td>
            <td>Khách Hàng có nhu cầu đổi - trả Sản phẩm phải tìm hiểu về quy trình xử lý đổi - trả Sản phẩm được cập nhật trên www.C&D.vietnamairlines.com và chuẩn bị thông tin cần thiết cho việc thực hiện đổi hoặc trả Sản phẩm.</td>
         </tr>
         <tr>
            <td>2</td>
            <td>Khách hàng</td>
            <td>Khách Hàng liên hệ trực tiếp đến Nhà Bán Hàng theo thông tin Nhà Bán Hàng được gửi kèm Email Xác nhận thanh toán thành công hoặc Hoá đơn điện tử mà Nhà Bán Hàng đã xuất cho Khách Hàng khi thanh toán thành công. Thông tin của Nhà Bán Hàng bao gồm: Tên Nhà Bán Hàng; Địa chỉ trụ sở; Số điện thoại liên hệ; Email hỗ trợ Khách Hàng. C&D khuyến nghị hình thức gửi yêu cầu, khiếu nại qua Email của Nhà Bán Hàng. Trong Email yêu cầu đổi - trả, Khách Hàng phải gửi kèm Hóa đơn của đơn hàng hoặc Email xác nhận thanh toán thanh công cho đơn hàng và các hình ảnh chứng minh đủ điều kiện đổi – trả Sản phẩm.</td>
            <td></td>
         </tr>
         <tr>
            <td>3</td>
            <td>Nhà Bán Hàng</td>
            <td>Nhà Bán Hàng tiếp nhận yêu cầu đổi - trả từ Khách Hàng.</td>
            <td></td>
         </tr>
         <tr>
            <td>4</td>
            <td>Nhà Bán Hàng</td>
            <td>Nhà Bán Hàng xác thực yêu cầu đổi - trả:<br><br>• Trường hợp 1: Yêu cầu đổi - trả cần Khách Hàng gửi lại Sản phẩm để chứng minh đủ điều kiện đổi - trả thì Nhà Bán Hàng chuyển sang thực hiện bước 5.<br>• Trường hợp 2: Yêu cầu đổi/trả không cần Khách Hàng gửi lại Sản phẩm để chứng minh đủ điều kiện đổi - trả thì Nhà Bán Hàng chuyển sang thực hiện bước 8.<br>• Trường hợp 3: Nhà Bán Hàng và Khách Hàng xác nhận nguyên nhân đổi - trả là do lỗi hệ thống của C&D hoặc lỗi giao hàng của Đơn vị Vận chuyển thì được xử lý theo 02 trường hợp sau:<br>+ Trường hợp Khách Hàng yêu cầu đổi Sản phẩm và Nhà Bán Hàng đồng ý thực hiện. Sàn C&D hoặc Đơn vị Vận chuyển sẽ phải chịu toàn bộ trách nhiệm về chi phí đổi Sản phẩm bao gồm tiền hàng, phí vận chuyển hoàn và giao hàng mới.<br>+ Trường hợp Khách Hàng yêu cầu đổi Sản phẩm nhưng Nhà Bán Hàng từ chối thực hiện hoặc trường hợp Khách Hàng yêu cầu trả Sản phẩm để được hoàn tiền thì C&D hoặc Đơn vị Vận chuyển sẽ phải hoàn trả tổng số tiền mà Khách Hàng đã thanh toán qua cổng thanh toán của C&D (tham khảo Điều 3 Chính sách này).<br>+ Trong trường hợp Nhà Bán Hàng không đồng ý đổi Sản phẩm do nguyên nhân đã hết Sản phẩm để đổi nhưng Khách Hàng vẫn muốn được đổi Sản phẩm thay vì trả hàng để hoàn tiền thì Nhà Bán Hàng sẽ thực hiện đổi Sản phẩm cho Khách Hàng trong thời gian nhanh nhất là 14 ngày kể từ ngày Khách Hàng xác nhận đồng ý chờ nhận Sản phẩm đổi qua email giữa Nhà Bán Hàng và Khách Hàng.<br>+ Tùy từng trường hợp, Sản phẩm được trả về do lỗi của C&D hoặc Đơn vị Vận chuyển của C&D sẽ được C&D xử lý theo một trong các phương án sau đây: (i) xử lý và tiêu huỷ rác đối với các mặt hàng thực phẩm tươi sống/ đông lạnh/ khô nếu hư hỏng trên 90%; (ii) phân loại SẢn phẩm để tiếp tục lựa chọn và sử dụng nếu đạt yêu cầu; (iii) thực hiện bảo hành đối với các Sản phẩm còn lại nếu Sản phẩm được Nhà Bán Hàng/Nhà Sản Xuất quy định được bảo hành.</td>
            <td></td>
         </tr>
         <tr>
            <td>5</td>
            <td>Nhà Bán Hàng</td>
            <td>Nhà Bán Hàng xác nhận yêu cầu đổi - trả xuất phát do lỗi của Nhà Bán Hàng và yêu cầu Khách Hàng gửi trả Sản phẩm.</td>
            <td></td>
         </tr>
         <tr>
            <td>6</td>
            <td>Khách hàng</td>
            <td>Khách Hàng gửi trả lại Sản phẩm cho Nhà Bán Hàng. Chi phí gửi Sản phẩm do Nhà Bán Hàng chịu trách nhiệm.</td>
            <td>Về phía Khách hàng, Sản phẩm gửi trả lại phải bao gồm Hoá đơn đã mua hàng từ Nhà bán hàng trên C&D.</td>
         </tr>
         <tr>
            <td>7</td>
            <td>Nhà Bán Hàng</td>
            <td>Nhà Bán Hàng nhận Sản phẩm yêu cầu đổi-trả và kiểm tra Sản phẩm.</td>
            <td></td>
         </tr>
         <tr>
            <td>8</td>
            <td>Nhà Bán Hàng</td>
            <td>Nhà Bán Hàng quyết định phương án xử lý với yêu cầu đổi-trả của Khách Hàng.<br>• Trường hợp 1: Đồng ý yêu cầu đổi-trả.<br>• Trường hợp 2: Từ chối yêu cầu đổi-trả.</td>
            <td></td>
         </tr>
         <tr>
            <td>9</td>
            <td>Nhà Bán Hàng</td>
            <td>Nhà Bán Hàng gửi phản hồi về phương án xử lý yêu cầu đổi-trả đến Khách Hàng và C&D qua email.</td>
            <td></td>
         </tr>
         <tr>
            <td>10</td>
            <td>Khách hàng</td>
            <td>Khách Hàng xác nhận về phản hồi của Nhà Bán Hàng:<br>• Trường hợp 1: Đồng ý kết quả xử lý yêu cầu đổi - trả. Khách Hàng chuyển sang thực hiện bước 11.<br>• Trường hợp 2: Từ chối kết quả xử lý yêu cầu đổi - trả. Khách Hàng chuyển sang thực hiện bước 12.</td>
            <td></td>
         </tr>
         <tr>
            <td>11</td>
            <td>Khách hàng</td>
            <td>02 phương án được thực hiện khi Khách Hàng được đồng ý kết quả xử lý yêu cầu đổi – trả:<br>• Phương án 1: Khách Hàng được nhận Sản phẩm thay thế: Sản phẩm thay thế được giao cho Khách Hàng trong thời hạn trong 03 ngày kể từ ngày Khách hàng xác nhận phản hồi từ Nhà Bán Hàng.<br>• Phương án 2: Khách Hàng được hoàn tiền. Thời gian thực hiện giao dịch hoàn tiền là trong vòng tối đa 03 ngày kể từ khi Khách Hàng xác nhận phản hồi từ Nhà Bán Hàng.<br>Thời gian tiền được hoàn lại về tài khoản thanh toán ban đầu của Khách Hàng phụ thuộc vào phương thức thanh toán và chính sách của ngân hàng.<br>• Nhà Bán Hàng và Khách Hàng lựa chọn một trong hai phương án trên theo thương lượng của hai bên.</td>
            <td></td>
         </tr>
         <tr>
            <td>12</td>
            <td>Khách hàng</td>
            <td>Khách Hàng gửi yêu cầu, khiếu nại đến C&D.</td>
            <td></td>
         </tr>
         <tr>
            <td>13</td>
            <td>C&D</td>
            <td>Khách Hàng gửi yêu cầu, khiếu nại đến C&D.</td>
            <td></td>
         </tr>
         <tr>
            <td>14</td>
            <td>C&D</td>
            <td>VNA Mall Làm việc trực tiếp với Khách Hàng và Nhà Bán Hàng. C&D sẽ xem xét và xử lý dựa trên yêu cầu của Khách Hàng và thông tin từ Nhà Bán Hàng.</td>
            <td></td>
         </tr>
         <tr>
            <td>15</td>
            <td>C&D</td>
            <td>C&D xử lý theo quy trình giải quyết khiếu nại được quy định tại Quy chế hoạt động của Sàn giao dịch TMĐT C&D được đăng tải trên www.C&D.vietnamairlines.com</td>
            <td></td>
         </tr>
      </table>
   </div>
   <p style="font-weight: 700;">4.4. Chi phí đổi – trả Sản phẩm</p>
   <div class="policy-bottom">
      <p><span>- Trường hợp 1: </span> Đối với các Sản phẩm đổi - trả do lỗi của Nhà Bán Hàng, Khách Hàng sẽ được miễn phí chuyển Sản phẩm tới địa điểm nhận Sản phẩm đổi-trả. Đối với các yêu cầu đổi-trả được xác nhận ban đầu lỗi là do Nhà Bán Hàng và Nhà Bán Hàng đã xác nhận đồng ý nhận Sản phẩm về để kiểm tra và thực hiện việc đổi-trả nhưng sau khi Nhà Bán Hàng nhận hàng lại và kiểm tra thì yêu cầu đổi-trả của Khách Hàng không đáp ứng được điều kiện đổi-trả thì Nhà Bán Hàng vẫn phải chịu phí vận chuyển Sản phẩm. </p>
      <p><span> - Trường hợp 2:</span> Đối với các Sản phẩm đổi - trả do lỗi của VNA Mall, C&D sẽ phải chịu toàn bộ chi phí đổi trả bao gồm tiền Sản phẩm và phí vận chuyển tới địa điểm nhận Sản phẩm đổi - trả.</p>
      <p><span> - Trường hợp 3:</span> Đối với các Sản phẩm đổi - trả do lỗi của Đơn vị Vận chuyển của C&D, Đơn vị Vận chuyển sẽ phải chịu toàn bộ chi phí đổi trả bao gồm bao gồm tiền Sản phẩm và phí vận chuyển tới địa điểm nhận Sản phẩm đổi - trả.</p>
   </div>
   <div class="policy-bottom">
      <p><span>4.5. Quy định về đóng gói Sản phẩm đổi - trả</span></p>
      <p>- Khách Hàng chỉ gửi Sản phẩm về cho C&D hoặc Nhà Bán Hàng sau khi nhận được thông báo đồng ý cho Khách Hàng trả Sản phẩm qua Email và điện thoại.</p>
      <p>- Khách Hàng cần gửi trả Sản phẩm về kho của C&D hoặc Nhà Bán Hàng trong vòng 03 (ba) ngày kể từ khi nhận được thông báo đồng ý cho Khách Hàng trả Sản phẩm. Quá thời hạn trên, nếu chưa trả Sản phẩm, yêu cầu đổi - trả Sản phẩm của Khách Hàng sẽ bị hủy.</p>
      <p>- Khách Hàng xác nhận lựa chọn trả Sản phẩm theo 02 hình thức sau:</p>
      <p style="margin-top: 30px;"><span style="font-weight: normal; font-style: italic;"> • Hình thức 1:</span> Đối với các Sản phẩm thực phẩm tươi sống, đông lạnh: Khách Hàng gửi trả sản phẩm qua Đơn vị vận chuyển Ahamove. Ahamove sẽ đến lấy Sản phẩm theo địa chỉ và thời gian Khách Hàng đã cung cấp qua Email hoặc điện thoai.</p>
      <p><span style="font-weight: normal; font-style: italic;"> • Hình thức 2:</span> Đối với các mặt hàng còn lại: Khách Hàng gửi trả Sản phẩm qua Đơn vị vận chuyển Viettel Post. Khách hàng mang Sản phẩm đến bưu cục bất kỳ của Viettel Post để gửi trả. </p>
      <p>- Hướng dẫn đóng gói chi tiết cho các nhóm Sản phẩm đủ điều kiện đổi - trả thường gặp:</p>
   </div>
   <div class="policy-bottom">
      <p><span>Thực phẩm tươi sống &amp; đông lạnh: </span></p>
      <p>• Rau, củ, trái cây tươi: quấn quanh các loại rau củ quả bằng màng bọc thực phẩm và đóng gói trở lại bằng thùng giấy mà C&D đã đóng gói khi giao hàng.</p>
      <p>• Thịt/cá tươi sống/đồ đông lạnh: giữ lạnh sản phẩm được độ tươi và đóng gói trở lại bằng thùng xốp mà C&D đã đóng gói khi giao hàng;</p>
      <p>• Sản phẩm từ sữa: đóng gói trở lại bằng thùng giấy mà C&D đã đóng gói khi giao hàng.</p>
      <p>• Thực phẩm chế biến sẵn/ăn ngay: trường hợp đổi trả này chỉ áp dụng khi sản phẩm này chưa được Khách Hàng sử dụng. Các thực phẩm này được đóng gói theo túi giấy mà Nhà Bán Hàng đã đóng gói khi giao hàng;</p>
   </div>
   <div class="policy-bottom">
      <p><span>Lưu ý: </span></p>
      <p>• Sản phẩm cùng loại: có thể kết hợp đóng gói theo nguyên tắc sản phẩm có khối lượng nặng, cấu tạo đặc, cứng được đặt bên dưới, sản phẩm khối lượng nhẹ, dễ dập đặt phía trên;</p>
      <p>• Sản phẩm có đặc tính lý/hóa khác nhau (cấu tạo, trọng lượng, nhiệt độ…) cần đóng gói riêng biệt thành các thùng/ bịch/ túi riêng;</p>
      <p>• Thực phẩm đóng gói trong bịch/ túi nilon cần đảm bảo cột miệng túi và niêm phong chắc chắn.</p>
   </div>
   <div class="policy-bottom">
      <p><span>Thực phẩm khô Hoàn trả: </span></p>
      <p>• Quấn kỹ màng co quanh sản phẩm để tránh phát ra mùi;</p>
      <p>• Quấn xốp bong bóng 2-3 lớp bên ngoài sản phẩm;</p>
      <p>• Đóng thùng giấy.</p>
   </div>
   <div class="policy-bottom">
      <p>Đối với các mặt hàng còn lại:</p>
      <p>- Sản phẩm đổi - trả có chiều dài nhất dưới 60cm, không dễ vỡ / móp méo, không phải chất lỏng, không yêu cầu điều kiện bảo quản / vận chuyển đặc biệt:</p>
   </div>
   <div class="policy-bottom">
      <p>Quấn xốp bong bóng 1-2 lớp hoặc quấn màng co 3-5 lớp.</p>
      <p>Chèn cố định bằng túi khí hoặc chèn xốp 6 mặt xung quanh sản phẩm để tránh xê dịch.</p>
      <p>Đóng thùng giấy hoặc bỏ vào túi xốp bong bóng (tùy yêu cầu của từng đơn vị vận chuyển).</p>
   </div>
   <div class="policy-bottom">- Sản phẩm đổi - trả có chiều dài nhất dưới 60cm, dễ vỡ/ móp méo/ chứa chất lỏng (bao gồm cả sản phẩm chứa cồn) hoặc sản phẩm đóng lon/ hộp/ chai:</div>
   <div class="policy-bottom">
      <p>Quấn băng keo hoặc xốp bong bóng bịt kín nắp sản phẩm, bọc nylon bên ngoài thân và đáy sản phẩm để tránh rò rỉ;</p>
      <p>Quấn xốp bong bóng 2-3 lớp bên ngoài sản phẩm;</p>
      <p>Chèn cố định bằng túi khí hoặc chèn xốp 6 mặt xung quanh sản phẩm để tránh xê dịch;</p>
      <p>Đóng thùng carton, dùng băng keo quấn kín các góc cạnh của thùng carton để tránh rò rỉ/ tránh móp méo góc do va đập;</p>
      <p>Dán tem "hàng dễ vỡ" trên thùng hàng.</p>
   </div>
   <div class="policy-bottom">
      <p>- Sản phẩm có chiều dài nhất từ 60 cm trở lên, không yêu cầu điều kiện bảo quản / vận chuyển đặc biệt</p>
   </div>
   <div class="policy-bottom">
      <p>Bọc xốp (kích thước 2.5 cm) 6 mặt của sản phẩm;</p>
      <p>Quấn màng co hoặc xốp bong bóng;</p>
      <p>Dùng băng keo quấn kín các góc cạnh của thùng carton để tránh rò rỉ/ tránh móp méo góc do va đập.</p>
      <p style="font-style: italic;"> Lưu ý: </p>
   </div>
   <div class="policy-bottom">
      <p>Nếu có từ 02 Sản phẩm trở lên, cần có xốp chèn ở giữa các Sản phẩm;</p>
      <p>Sản phẩm là chất lỏng bán theo thùng/lốc giữ nguyên đóng gói từ nhà sản xuất: quấn 2 lớp xốp bong bóng bên ngoài thùng/lốc Sản phẩm.</p>
   </div>
   <div class="policy-bottom">
      <p><span>Điều 3: Chính sách hoàn tiền của C&D </span></p>
      <p>3.1. Hoàn tiền cho Sản phẩm trả lại theo yêu cầu trả Sản phẩm - hoàn tiền của Khách Hàng: C&D và Nhà Bán Hàng chỉ hoàn tiền cho Khách Hàng khi đã nhận được Sản phẩm trả lại (đối với hàng thực phẩm tươi/khô, hư hại không quá 50%).</p>
   </div>
   <div class="policy-bottom">
      <p><span>Lưu ý:</span></p>
      <p>- Với đơn hàng đã được thanh toán trực tuyến, C&D sẽ hoàn tiền cho Khách Hàng qua cổng thanh toán.</p>
      <p>- Với đơn hàng COD (nếu có áp dụng), trước khi tiến hành hoàn tiền, Nhà Bán Hàng sẽ liên hệ với Khách hàng để thống nhất phương thức hoàn tiền.</p>
      <p>- Trong trường hợp Nhà Bán Hàng thương lượng với Khách Hàng và quyết định hoàn tiền cho Khách Hàng:</p>
   </div>
   <div class="policy-bottom">
      <p>Số tiền hoàn bằng tổng số tiền mà Khách Hàng đã thanh toán trước cho VNA Mall.</p>
      <p>Số tiền hoàn, phí hoàn tiền qua cổng thanh toán của C&D và các phí phát sinh khác sẽ được một trong ba bên (Nhà Bán Hàng hoặc C&D hoặc Đơn vị vận chuyển của VNA) chịu trách nhiệm tùy vào việc xác định lỗi thuộc về bên nào. </p>
      <p>Phí hoàn tiền qua cổng thanh toán là 10.000 đồng/đơn. Khách Hàng sẽ không chịu bất kỳ chi phí gì nếu xác định chính xác nguyên nhân lỗi không phải từ phía Khách Hàng. </p>
      <p>Số tiền hoàn trả cho Khách Hàng được Sàn C&D hoàn trả bằng hình thức chuyển khoản về tài khoản mà Khách Hàng thanh toán ban đầu.</p>
      <p>Thời gian thực hiện giao dịch hoàn tiền: trong vòng tối đa 03 ngày kể từ khi Khách Hàng xác nhận phản hồi về kết quả xử lý yêu cầu từ Nhà Bán Hàng. Thời gian tiền được hoàn lại về tài khoản thanh toán ban đầu của Khách Hàng phụ thuộc vào phương thức thanh toán và chính sách của ngân hàng.</p>
   </div>
   <div class="policy-bottom">
      <p>3.2. Nguyên tắc hoàn tiền: Số tiền cần hoàn không vượt quá 100% giá trị tổng đơn hàng hoặc không vượt quá 100% giá trị Sản phẩm bị khiếu nại cấu thành trong đơn hàng.</p>
   </div>
</div>
</div>
`

const Policy = () => {
    return parse(html);
}

export default Policy