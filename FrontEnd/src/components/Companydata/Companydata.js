import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";
import { useRequest } from "../../hooks/request-hook";
const Companydata = (props) => {
  const { companyyyy } = props;
  const { sendRequest } = useRequest();
  const [comp, setComp] = useState("nse");
  const [time, setTime] = useState("");
  const [ret, setRet] = useState(0);
  const [ischart, setIschart] = useState(false);
  const companyname = {
    ashokley: "Ashok Leyland",
    cipla: "Cipla",
    eichermot: "Eicher Motors",
    reliance: "Reliance",
    tatasteel: "Tata Steel",
  };
  const openprice = {
    ashokley: "149.44",
    cipla: "1052.80",
    eichermot: "3150",
    reliance: "2524.85",
    tatasteel: "118.89",
  };
  const closeprice = {
    ashokley: "146.80",
    cipla: "1061.85",
    eichermot: "3103.25",
    reliance: "2471.60",
    tatasteel: "118.08",
  };
  const oneyearopenprice = {
    ashokley: "135.75",
    cipla: "918.40",
    eichermot: "2802",
    reliance: "2471.30",
    tatasteel: "113.98",
  };
  const oneyearcloseprice = {
    ashokley: "138.89",
    cipla: "906.20",
    eichermot: "2815.89",
    reliance: "2521.10",
    tatasteel: "114.72",
  };
  const currentprice = {
    ashokley: "148.70",
    cipla: "1057.65",
    eichermot: "3139.15",
    reliance: "2498.33",
    tatasteel: "118.58",
  };
  const options = [
    "YTD",
    "1 Week",
    "1 Month",
    "3 Months",
    "6 Months",
    "1 Year",
    "2 Year",
    "3 Year",
    "5 Year",
  ];
  //   const companyy = [
  //     "Reliance",
  //     "Tata Steel",
  //     "Ashok Leyland",
  //     "Eicher Motors",
  //     "Cipla",
  //   ];
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
    setTime(event.target.value);
  };
  //   const onCompanyChangeHandler = (e) => {
  //     console.log("User Selected Value - ", e.target.value);
  //   };
  const chartHandler = () => {
    setIschart(true);
  };
  const overviewHandler = () => {
    setIschart(false);
  };
  useEffect(() => {
    if (time != "") {
      const getcomp = async () => {
        const response = await sendRequest(
          "https://flipr-dzx0.onrender.com/companies/returns",
          "POST",
          JSON.stringify({
            comp: comp,
            time: time,
          }),
          { "Content-Type": "application/json" }
        );
        console.log(response);
        setRet(response[0].returns.toFixed(4));
      };
      getcomp();
    }
    console.log(time);
  }, [comp, time]);
  return (
    <div className="container">
      {console.log(ret)}
      <div className="headtop">
        <div className="nifty50">
          <h2 className="nifty50header">{companyname[companyyyy]}</h2>
        </div>
        <div className="stockvaluee">
          <div className="leftsidestock">
            <h2 className="nifty50value1">{currentprice[companyyyy]}</h2>
            {openprice[companyyyy] - currentprice[companyyyy] > 0 ? (
              <h2 className="nifty50value2" style={{ color: "#39a97c" }}>
                <span class="greenuparrow"></span>
                {(openprice[companyyyy] - currentprice[companyyyy]).toFixed(4)}
                {" " +
                  "(+" +
                  (
                    ((openprice[companyyyy] - currentprice[companyyyy]) /
                      openprice[companyyyy]) *
                    100
                  ).toFixed(2) +
                  "%)"}
              </h2>
            ) : (
              <h2 className="nifty50value2" style={{ color: "#d95858" }}>
                <span class="reddownarrow"></span>
                {(openprice[companyyyy] - currentprice[companyyyy]).toFixed(4)}
                {" " +
                  "(" +
                  (
                    ((openprice[companyyyy] - currentprice[companyyyy]) /
                      openprice[companyyyy]) *
                    100
                  ).toFixed(2) +
                  "%)"}
              </h2>
            )}

            <p className="datestock">As on 12 Jan, 2023 16:10 IST</p>
          </div>
          <div className="rightsidestock">
            <div className="toppppheaddd">Day Range</div>
            <div className="valuesssss">
              <div className="firstvalue">{openprice[companyyyy]}</div>
              <div className="secondvalue">{closeprice[companyyyy]}</div>
            </div>
            <div className="valuesssss">
              <div className="firstvalue1">O</div>
              <div className="secondvalue1">C</div>
            </div>
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={(14968.58 / 18049.65) * 100}
            />
            <div className="toppppheaddd">52 week Range</div>
            <div className="valuesssss">
              <div className="firstvalue">{oneyearopenprice[companyyyy]}</div>
              <div className="secondvalue">{oneyearcloseprice[companyyyy]}</div>
            </div>
            <div className="valuesssss">
              <div className="firstvalue1">O</div>
              <div className="secondvalue1">C</div>
            </div>
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={(14960.89 / 18887.6) * 100}
            />

            <div className="toppppheaddd">Returns</div>
            <div className="valuesssss1">
              <select
                onChange={onOptionChangeHandler}
                className="selectoptionsss"
              >
                <option>Select Time</option>
                {options.map((option, index) => {
                  console.log(index, option);
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
              {ret > 0 ? (
                <p className="percentttt">{ret}</p>
              ) : (
                <p
                  style={{
                    color: "red",
                    fontSize: "1.25rem",
                    marginLeft: "1rem",
                  }}
                >
                  {ret}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companydata;
