import "../../compo/questionnaire.css";
import { useEffect } from "react";
const User_hosp = (props) => {
  useEffect(() => {
    console.log(props.gopro);
  });
  return (
    <>
      <div id="hahaha">
        <table border="2px solid">
          <tr height="100">
            <th colSpan={2}>
              <h1 align="center">병원 문진표</h1>
            </th>
          </tr>
          <tr height="70">
            <td className="quest">원하시는 치료 범위는 무엇입니까?{}</td>
            <td>{props.gopro.info1}</td>
          </tr>
          <tr height="70">
            <td className="quest">저희 병원은 어떻게 알고 오셨습니까?</td>
            <td>{props.gopro.info2}</td>
          </tr>
          <tr height="70">
            <td className="quest">병원에 얼마 만에 오셨습니까?</td>
            <td>{props.gopro.info3}</td>
          </tr>
          <tr height="70">
            <td className="quest">
              과거 치료 중 불편했던 경험을 모두 표시하여 주세요
            </td>
            <td>{props.gopro.info4}</td>
          </tr>
          <tr height="70">
            <td className="quest">
              과거 또는 현재의 질환을 모두 표시하여 주세요.
            </td>
            <td>{props.gopro.info5}</td>
          </tr>
          <tr colSpan>
            <td colSpan={2} align="center">
              <button
                onClick={() => {
                  props.setModal2(false);
                }}
              >
                확인
              </button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default User_hosp;
