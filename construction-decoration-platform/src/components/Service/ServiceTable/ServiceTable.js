import React from 'react'
import "./ServiceTable.scss"

function ServiceTable() {
  return (
    <div className='service_table'>
          <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Stt</th>
          <th scope="col">Loại nhà</th>
          <th scope="col">Gói xây dựng thô (triệu/m2)</th>
          <th scope="col">Gói xây dựng hoàn thiện mức trung bình khá (triệu/m2)</th>
          <th scope="col">Gói xây dựng hoàn thiện mức tốt (triệu/m2)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Nhà ống một mặt tiền</td>
          <td>3.2 đến 3.4</td>
          <td>5.3 đến 5.5</td>
          <td>5.5 đến 5.8</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Nhà ống một hai mặt tiền(mặt tiền trước và mặt tiền bên cạnh nhà)</td>
          <td>3.3 đến 3.5</td>
          <td>5.3 đến 5.5</td>
          <td>5.7 đến 6.0</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Nhà biệt thự song lập</td>
          <td>3.5 đến 3.8</td>
          <td>5.8 đến 6.1</td>
          <td>6.0 đến 6.5</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default ServiceTable
