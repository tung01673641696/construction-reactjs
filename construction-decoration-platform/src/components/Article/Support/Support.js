import React from "react";
import parse from "html-react-parser";
import "./Support.scss";

const html = `
<div class="support">
    <div class="support-home">
    <p>
        Trang Chủ 
        <span>
            <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowForwardIcon">
                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
        </span>
        Hướng dẫn mua hàng trên WEBSITE C&D
    </p>
    </div>
    <div class="support-title">
    <p>HƯỚNG DẪN MUA HÀNG TRÊN WEBSITE C&D</p>
    </div>
    <div class="support-text">
    <p>Khi có nhu cầu mua Sản phẩm trên WEBSITE C&D, Khách Hàng thực hiện theo các bước sau đây:</p>
    <p><span class="support-text-span">Bước 1:</span> Khách hàng tìm kiếm, tham khảo thông tin Sản phẩm và Nhà bán hàng ở khu vực mà Khách Hàng đang quan tâm bằng cách điền thông tin vào thanh <span class="support-text-span">“Tìm kiếm”</span> hoặc xem tại <span class="support-text-span">“Sản phẩm”</span> trên giao diện chính của Sàn giao dịch TMĐT Nông Nghiệp. </p>
    <p><span class="support-text-span">Bước 2:</span> Xem thông tin chi tiết về Sản phẩm của Nhà bán hàng, tham khảo thông tin giá và chính sách, điều khoản điều kiện mua Sản phẩm của Nhà bán hàng mà Khách hàng đang có nhu cầu mua.</p>
    <p><span class="support-text-span">Bước 3:</span> Sau khi tham khảo thông tin và so sánh giá cả, chất lượng Sản phẩm, Khách Hàng đặt Sản phẩm muốn mua bằng cách chọn nút <span class="support-text-span">“Thêm vào giỏ hàng”</span> rồi nhấn nút <span class="support-text-span">“Xem giỏ hàng của tôi”</span> và chọn <span class="support-text-span">“Tiến hành thanh toán”</span> để chuyển sang bước thanh toán. </p>
    <p><span class="support-text-span">Bước 4:</span> Nhập thông tin của Khách Hàng và địa chỉ nhận hàng và chọn <span class="support-text-span">“Tiếp tục đến phương thức thanh toán”</span> sau đó nhập các thông tin theo quy định và chọn <span class="support-text-span">“Hoàn tất đơn hàng”</span> để gửi đơn hàng đến Nhà bán hàng. Đơn hàng của Khách Hàng sẽ được chuyển đến Nhà bán hàng. Nhà bán hàng xác nhận đơn hàng và thực hiện chuẩn bị đơn hàng. Đơn vị vận chuyển của Sàn giao dịch TMĐT Nông Nghiệp tiến hành đến lấy hàng và giao hàng cho Khách Hàng.</p>
    </div>
</div>
`;

const Support = () => {
  return parse(html);
};

export default Support;
