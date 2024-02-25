import React from "react";
import DomainCard from "./DomainCard";

function DomainCards() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1200px] mx-auto px-10 gap-8">
      <div>
        <DomainCard
          image={"https://deepnapsoftech.com/assets/B2B%20_%20B2C-K3wlkpqU.png"}
          title={`B2B & B2C`}
        />
      </div>
      <div>
        <DomainCard
          image={"https://deepnapsoftech.com/assets/Doctor-rWtPsEpa.png"}
          title={`Medical`}
        />
      </div>
      <div>
        <DomainCard
          image={"https://deepnapsoftech.com/assets/e-Coomerce-jL95iHJa.png"}
          title={`E-Commerce`}
        />
      </div>
      <div>
        <DomainCard
          image={"https://deepnapsoftech.com/assets/Education-LdoLfsg6.png"}
          title={`Education`}
        />
      </div>
      <div>
        <DomainCard
          image={"https://deepnapsoftech.com/assets/Finance-OHHm_Hqf.png"}
          title={`Finance`}
        />
      </div>
      <div>
        <DomainCard
          image={"https://deepnapsoftech.com/assets/hospital-L8G9jTi0.png"}
          title={`Hospital

          `}
        />
      </div>
      <div>
        <DomainCard
          image={"https://deepnapsoftech.com/assets/hotel-sQmHyut8.png"}
          title={`Hotel`}
        />
      </div>
      <div>
        <DomainCard
          image={"https://deepnapsoftech.com/assets/industrial-1HcV-FEt.png"}
          title={`Indusrtries`}
        />
      </div>
    </div>
  );
}

export default DomainCards;
