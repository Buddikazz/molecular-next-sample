"use client";

import { fetchTrustpilotData } from "@/services/trustpilot/trustpilot";
import { useEffect, useState } from "react";
import Trustpilot from "../atoms/Trustpilot/Trustpilot";
import TrustpilotLong from "../molecules/TrustPilot/TrustPilotLong";
import TrustpilotMini from "../molecules/TrustPilot/TrustPilotMini";
import Stars from "../atoms/Trustpilot/Stars/Stars";

export const TrustpilotBlock = ({ link, type }: any) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    Promise.resolve(fetchTrustpilotData("en")).then((res) => {
      setData(res);
    });
  }, []);

  useEffect(() => {
    if (!data) {
      console.log(
        "[TrustpilotBlock]: No Trustpilot data found. Skip rendering."
      );
    }
  }, []);

  return (
    <div>
      {data && type === "long" && (
        <TrustpilotLong
          score={data.score}
          link={link}
          totalReviews={data.totalReviews}
        />
      )}
      {data && type === "mini" && (
        <TrustpilotMini
          score={data.score}
          link={link}
          totalReviews={data.totalReviews}
        />
      )}
      {
        <div className="flex bg-white rounded-lg shadow mt-4">
          <ul className="bg-white rounded-lg">
            <li className="px-6 py-4 mb-3 bg-slate-300">
              <div className="flex justify-between">
                <div className="flex items-center justify-center flex-row mt-4 md:mt-0">
                  <Stars className="" rating={4} />
                  <p className="text-gray-500 ml-1" >{'by'}</p>
                  <p className="text-black-500 ml-1" >{'Charuty'}</p>
                </div>
              </div>
              <p className="text-gray-700 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
              </p>
            </li>
            <li className="px-6 py-4">
              <div className="flex justify-between">
              <div className="flex items-center justify-center flex-row mt-4 md:mt-0">
                  <Stars className="" rating={4} />
                  <p className="text-gray-500 ml-1" >{'by'}</p>
                  <p className="text-black-500 ml-1" >{'Charuty'}</p>
                </div>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
              </p>
            </li>
            <li className="px-6 py-4">
              <div className="flex justify-between">
              <div className="flex items-center justify-center flex-row mt-4 md:mt-0">
                <Stars className="" rating={4} />
                <p className="text-gray-500 ml-1" >{'by'}</p>
                <p className="text-black-500 ml-1" >{'Charuty'}</p>
              </div>
              </div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
              </p>
            </li>
          </ul>
        </div>
      }
    </div>
  );
};

TrustpilotBlock.blockName = "trustpilot";
