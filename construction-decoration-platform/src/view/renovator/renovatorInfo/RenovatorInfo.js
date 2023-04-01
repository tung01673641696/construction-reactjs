import React from 'react'
import "./RenovatorInfo.scss"
import ButtonFor from '../../../components/Button/ButtonFor/ButtonFor'

function RenovatorInfor() {
  return (
    <div className='info'>
      <div className='info_title'>
        <ButtonFor text="NHỮNG LÍ DO KHIẾN NGÔI NHÀ BẠN PHẢI ĐƯỢC SỬA CHỮA" />
      </div>
      <div className='info_content'>
        <ul>
          <li>Ngôi nhà đi vào hoạt động và khai thác từ lâu, xuống cấp, không đáp ứng được nhu cầu cơ bản</li>
          <li>Chọn nhà thầu thi công kém chất lượng, thi công không đảm bảo chất lượng thi công</li>
          <li>Chọn vật liệu thi công kém chất lượng</li>
          <li>Gia đình bạn ở trong vùng thời tiết khắc nghiệt: nắng, mưa lâu dài gây ẩm mốc…</li>
          <li>Công năng sử dụng ngôi nhà không còn phù hợp.</li>
          <li>Hoặc đơn giản bạn muốn thay đổi ngôi nhà của bạn sau một thời gian dài tích góp.</li>
          <li>Còn rất nhiều lý do khác…</li>
        </ul>
      </div>

      <ButtonFor text="LỢI ÍCH KHI SỬ DỤNG DỊCH VỤ CẢI TẠO NHÀ" />
      <div className='info_content'>
        <ul>
          <li>Bạn sẽ không cần phải bận tâm tới bất cứ một công việc gì từ vấn đề mua vật liệu, khảo sát thi công,… Mọi vấn đề sẽ được Nhà Thầu lo liệu từ đầu tới cuối.</li>
          <li>Công việc sửa nhà trọn gói sẽ được thực hiện bởi đội ngũ thợ kinh nghiệm, chuyên môn cao thực hiện. Đảm bảo tiêu chuẩn Bền – Đẹp cho ngôi nhà.</li>
          <li>Hạn chế tối đa tình trạng phát sinh chi phí so với dự tính bởi trước khi thực hiện chúng tôi sẽ giúp bạn hạch toán cũng như đánh giá kinh phí để có được giải pháp tối ưu cho ngôi nhà</li>
          <li>Gia đình bạn ở trong vùng thời tiết khắc nghiệt: nắng, mưa lâu dài gây ẩm mốc…</li>
          <li>Công năng sử dụng ngôi nhà không còn phù hợp.</li>
          <li>Nhà Thầu chúng tôi hoạt động trong lĩnh vực xây dựng rất lâu năm do đó chúng tôi luôn có những địa chỉ để lấy vật liệu tiêu chuẩn với giá rẻ hơn, giúp bạn tiết kiệm tối đa chi phí xây dựng.</li>
          <li>Giúp bạn tiết kiệm thời gian thi công với kế hoạch thi công chi tiết, chính xác cùng chất lượng hiệu quả nhất.</li>
        </ul>
      </div>

      <ButtonFor text="QUY TRÌNH CẢI TẠO" />
      <div className='info_content'>
        <ul>
          <li>Bước 1 : Quý khách gọi điện hoặc để lại thông tin yêu cầu, SĐT liên hệ hoặc nhắn tin trực tiếp cho chúng tôi.</li>
          <li>Bước 2: Bộ phận công ty tiếp nhận yêu cầu, sắp xếp KTS, đội ngũ KTS sẽ trực tiếp làm việc với chủ nhà trên cơ sở hiện trạng đã khảo sát để nắm bắt được yêu cầu của khách hàng.</li>
          <li>Bước 3: Lên phương án thiết kế cụ thể. Đây là công việc quan trọng để tìm ra phương án phù hợp nhất trong quá trình hoàn thiện công trình. </li>
          <li>Bước 4: Báo giá và gửi báo giá chi tiết cụ thể đối với khách hàng trên cơ sở phương án đã được thống nhất. Căn cứ vào hiện trạng, các phương án đã đồng ý để tiến hành bóc tách báo giá từng hạng mục lên dự toán.</li>
          <li>Bước 5: Khách hàng tiếp nhận bảng báo giá, xem có chỗ nào không hợp lý còn thiếu sót, nếu khách hàng muốn bổ sung thêm các hạng mục nào thì hãy liên hệ đến AKINA để chúng tôi có thể điều chỉnh bảng báo giá để hai bên cùng thống nhất.</li>
          <li>Bước 6: Báo giá hợp lý các hạng mục rõ ràng hai bên đồng ý, thì chúng tôi sẽ tiến hành gửi hợp đồng mẫu cho khách hàng tham khảo. Hai bên cùng xem hợp đồng, nếu khách hàng đồng ý thì ký hợp đồng.</li>
          <li>Bước 7: Tiến hành triển khai thi công sửa chữa. Khách hàng có thể trực tiếp cử người thân giám sát công việc thi công cũng như kiểm soát tài sản trong nhà. Đôi bên cùng kết hợp để công việc sửa chữa nhà tiến hành theo đúng kế hoạch,trong thời gian sớm nhất theo yêu cầu khách hàng.</li>
          <li>Bước 8: Bàn giao công trình và khách hàng thanh toán theo hợp đồng đã kí kết</li>
        </ul>
      </div>
    </div>
  )
}

export default RenovatorInfor
