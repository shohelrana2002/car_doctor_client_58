import React from "react";

const BookingRow = ({ booking }) => {
  const { CustomerName, Price, date, img, Service_title, email } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{CustomerName}</div>
            <div className="text-sm opacity-50">{date}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <br />
      </td>
      <td>${Price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{Service_title}</button>
      </th>
    </tr>
  );
};

export default BookingRow;
