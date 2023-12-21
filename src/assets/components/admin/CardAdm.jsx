import { Card, CardBody } from "@nextui-org/react";
import React, { useEffect } from "react";
import icon from "../../img/icon.png";
import { useDispatch, useSelector } from "react-redux";
import getDataCard from "../../../redux/action/admin/CardAdm";
export const CardAdm = () => {
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getDataCard());
  };

  useEffect(() => {
    getData();
  }, []);

  const dataCard = useSelector((state) => state.Card.card);

  return (
    <div className="flex flex-row gap-10 justify-center pt-[50px]">
      <Card className="bg-[#F2A227] w-[322px] h-[108px] text-white rounded-[15px]">
        <CardBody className="flex flex-row p-6 gap-3">
          <div>
            <img src={icon} alt="" />
          </div>
          <div className="flex flex-col pt-1">
            <h3 className="font-semibold">{dataCard.activeUsers}</h3>
            <p className="font-bold">Active Users</p>
          </div>
        </CardBody>
      </Card>
      <Card className="bg-[#45C440] w-[322px] h-[108px] text-white rounded-[15px]">
        <CardBody className="flex flex-row p-6 gap-3">
          <div>
            <img src={icon} alt="" />
          </div>
          <div className="flex flex-col pt-1">
            <h3 className="font-semibold">{dataCard.activeClass}</h3>
            <p className="font-bold">Active Class</p>
          </div>
        </CardBody>
      </Card>
      <Card className="bg-[#116E63] w-[322px] h-[108px] text-white rounded-[15px]">
        <CardBody className="flex flex-row p-6 gap-3">
          <div>
            <img src={icon} alt="" />
          </div>
          <div className="flex flex-col pt-1">
            <h3 className="font-semibold">{dataCard.premiumClass}</h3>
            <p className="font-bold">Premium Class</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardAdm;
