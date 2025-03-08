import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';
import { BsDownload } from 'react-icons/bs';

const MoreInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-3">
        <IoMdNotificationsOutline size={20} />
        <h3>Notification Preferances</h3>
      </div>
      <div className="flex gap-3">
        <TfiHeadphoneAlt size={17} />
        <h3>24x7 Customer Care</h3>
      </div>
      <div className="flex gap-3">
        <HiMiniArrowTrendingUp size={17} />
        <h3>Advertise</h3>
      </div>
      <div className="flex gap-3">
        <BsDownload size={17} />
        <h3>Download App</h3>
      </div>
    </div>
  );
};

export default MoreInfo;
