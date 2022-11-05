import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import Res_button from "./Res_button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <form>
      <table>
        <tr>
          <td align="right"> - 원하는 날짜를 선택해주세요</td>
        </tr>

        <tr>
          {/* <td align="left" id="date1">
            <DatePicker
              // 한국어설정
              locale={ko}
              // 날짜 형식 변경
              dateFormat={"yyyy년 MM월 dd일"}
              // 처음에 맨 위에 표시된 input에 나오는게 지금 날짜
              selected={startDate}
              // 내가 선택한 날짜가 맨 위에 표시 됨
              onChange={(date) => setStartDate(date)}
              selectsStart
              // 이전 날짜 선택 불가능
              minDate={new Date()}
              startDate={startDate}
              // 스크롤 하면 선택box 닫히게
              closeOnScroll={true}
            />
          </td> */}
          <td>
            <button
              type="button"
              style={{
                border: "none",
                color: "gray",
                backgroundColor: "white",
                padding: "0",
              }}
              onClick={() => {
                document.querySelector("#date1>div>div>input").focus();
                document.querySelector("#date1>div>div>input").click();
              }}
            >
              {/* <CalendarMonthIcon /> */}
            </button>
          </td>
        </tr>
        <br></br>
        <tr>
          <td align="right"> - 원하는 시간을 선택해주세요</td>
        </tr>

        <tr>
          <td id="date2">
            {/* <DatePicker
              locale={ko}
              dateFormat="h:mm aa"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minTime={setHours(setMinutes(new Date(), 0), 9)}
              showTimeSelect
              showTimeSelectOnly
              maxTime={setHours(setMinutes(new Date(), 0), 17)}
              timeCaption="시간"
              filterTime={filterPassedTime}
              excludeTimes={[setHours(setMinutes(new Date(), 30), 12)]}
              closeOnScroll={true}
            /> */}
          </td>
          <td>
            <button
              type="button"
              style={{
                border: "none",
                color: "gray",
                backgroundColor: "white",
                padding: "0",
              }}
              onClick={() => {
                document.querySelector("#date2>div>div>input").focus();
                document.querySelector("#date2>div>div>input").click();
              }}
            >
              {/* <AccessTimeIcon /> */}
            </button>
          </td>
        </tr>

        <tr>
          <td align={"center"}>{/* <Res_button /> */}</td>
        </tr>
      </table>
    </form>
  );
};

export default Example;
