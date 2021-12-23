import React, { useContext, useState } from "react";

import { InheritContext } from "../InheritContext";
import { lcm } from "../FractionRatioProducer";
// import {AM} from '../FractionRatioProducer'
function AnswerTable(props) {
  const {
    share_mather,
    share_father,
    share_dougther,
    share_hasband,
    share_wife,
    share_son,
  } = props;

  const [families, setFamilies] = useContext(InheritContext);

  const find_mather = families.find((v) => v.inheritor_type === "mather");
  const find_father = families.find((v) => v.inheritor_type === "father");
  const find_wife = families.find((v) => v.inheritor_type === "wife");
  const find_hasband = families.find((v) => v.inheritor_type === "hasband");
  const find_son = families.find((v) => v.inheritor_type === "son");
  const find_dougther = families.find((v) => v.inheritor_type === "dougther");

  // dunuminator distributer
  const [du_1_1, setDu_1_1] = useState(1);
  const [du_1_2, setDu_1_2] = useState(1);
  const [du_1_3, setDu_1_3] = useState(1);
  const [du_1_4, setDu_1_4] = useState(1);
  const [du_1_6, setDu_1_6] = useState(1);
  const [du_1_8, setDu_1_8] = useState(1);

  const [aslNum, setAslNum] = useState(
    lcm([du_1_1, du_1_2, du_1_3, du_1_4, du_1_6, du_1_8])
  );

  // whole number distrubuter

  // const [whole_num_father, setwhole_num_father] = useState(initialState)

  ////////////////////share fixed ratio///////////////////////////////////////
  const inheritChecker = (inheritor_type) => {
    return families.some(function (el) {
      return el.inheritor_type === inheritor_type;
    });
  };
  const handleShare = () => {
    if (inheritChecker("father")) {
      find_father.share = share_father;
    }
    if (inheritChecker("mather")) {
      find_mather.share = share_mather;
    }
    if (inheritChecker("hasband")) {
      find_hasband.share = share_hasband;
    }
    if (inheritChecker("wife")) {
      find_wife.share = share_wife;
    }
    if (inheritChecker("wife")) {
      find_wife.share = share_wife;
    }
    if (inheritChecker("son")) {
      find_son.share = share_son;
    }
    if (inheritChecker("dougther")) {
      find_dougther.share = share_dougther;
    }
  };

  ////////////////////share dunumenator value for lcm calculation///////////////////////////////////////
  const shareChecker = (share) => {
    return families.some(function (el) {
      return el.share === share;
    });
  };

  const check = {
    d_1: shareChecker("1"),
    d_2: shareChecker("1/2"),
    d_3: shareChecker("1/3"),
    d_4: shareChecker("1/4"),
    d_6: shareChecker("1/6"),
    d_8: shareChecker("1/8"),
  };

  const handleDunumnatorShare = () => {
    if (check.d_2) {
      setDu_1_2(2);
    }
    if (check.d_3) {
      setDu_1_3(3);
    }
    if (check.d_4) {
      setDu_1_4(4);
    }
    if (check.d_6) {
      setDu_1_6(6);
    }
    if (check.d_1) {
      setDu_1_1(1);
    }
    if (check.d_8) {
      setDu_1_8(8);
    }

    setAslNum(lcm([du_1_1, du_1_2, du_1_3, du_1_4, du_1_6, du_1_8]));
  };

  const th_style = "  fw-light ";
  const v_style = "font-monospace fw-light text-primary";
  const g_style ="btn  btn-light border-secondary";

  return (
    <div style={{ marginTop: "50px" }} className="container">
      <div>
        <h2 style={{fontFamily:'Mukta'}} className='font-monospace fw-light text-center bg-light border'>inheritance distributer table answer</h2>
      </div>
      {/* table answer */}
      <table className="table caption-top table-hover">
        <thead className="table-light">
          <tr>
            <th className={th_style} >
              Family relation
            </th>
            <th className={th_style} >
              nheritor name
            </th>
            <th className={th_style} >
              Number of Inheritor
            </th>
            <th className={th_style} >
              inheritance type
            </th>
            <th className={th_style}>
              share in ratio{" "}
            </th>
            <th className={th_style} >
              AM-/({aslNum})
            </th>
            <th className={th_style} >
              share in percent
            </th>
          </tr>
        </thead>
        <tbody>
          {families.map((family) => (
            <tr key={family.id}>
              <th  className={v_style}>
                {family.inheritor_type}
              </th>
              <td className={v_style}>{family.inheritor_name}</td>
              <td className={v_style}>{family.inheritor_amount}</td>
              <td className={v_style}>.............</td>
              <td className={v_style}>{family.share}</td>
              <td className={v_style}>............</td>
            </tr>
          ))}
        </tbody>
      </table>

       {/*share/ dumumunator/final distribution  buttons*/}
       <div className="d-flex my-3 p-2 ">
          <button
            className={g_style}
            onClick={handleShare}
          >
            divide(share inherited)
          </button>
          <button
            className={g_style}
            onClick={handleDunumnatorShare}
          >
            dunumnator share)
          </button>
          <button
            className={g_style}
            onClick={() => {
              console.log("hello");
            }}
          >
            final distribution
          </button>
        </div>
    </div>
  );
}

export default AnswerTable;
