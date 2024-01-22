/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import {
  fetchAverageRating,
  fetchLatestReviews,
} from "@/services/trustpilot/trustpilot";
import { useEffect, useState } from "react";
import Image from "next/image";
import TrustpilotLong from "../molecules/TrustPilot/TrustPilotLong";
import TrustpilotMini from "../molecules/TrustPilot/TrustPilotMini";
import Stars from "../atoms/Trustpilot/Stars/Stars";

import OpenQuote from "../../public/images/open-quote.svg";

export interface TrustBlockProps {
  logoType: string | null;
  listType: string | null;
  pageCount: number;
  quoteView: boolean | null;
}

export function TrustpilotBlock({
  logoType = null,
  listType = null,
  pageCount = 4,
  quoteView = false,
}: TrustBlockProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [reviewData, setReviewData] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [reviewList, setReviewList] = useState<any>(null);

  useEffect(() => {
    Promise.resolve(fetchAverageRating()).then((res) => {
      setReviewData(res);
    });

    if (listType) {
      Promise.resolve(fetchLatestReviews("en", pageCount)).then((res) => {
        setReviewList(res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!setReviewData) {
      // eslint-disable-next-line no-console
      console.log(
        "[TrustpilotBlock]: No Trustpilot data found. Skip rendering."
      );
    }
  }, []);

  return (
    <div>
      {reviewData && logoType === "long" && (
        <TrustpilotLong
          score={reviewData.score}
          link={logoType}
          totalReviews={reviewData.totalReviews}
        />
      )}
      {reviewData && logoType === "mini" && (
        <TrustpilotMini
          score={reviewData.score}
          link={reviewData.link.herf}
          totalReviews={reviewData.totalReviews}
        />
      )}
      {reviewList && listType === "list_view" && (
        <div className="flex bg-white shadow mt-4">
          <ul className="bg-white rounded-lg w-full">
            {reviewList.map((review: any) => {
              return (
                <li
                  key={review.id}
                  className="px-6 py-4 mb-3 bg-slate-100 w-full"
                >
                  <div className="flex justify-between">
                    <div className="flex items-center justify-center flex-row mt-4 md:mt-0">
                      <Stars rating={review.stars} />
                      <p className="text-gray-500 ml-1">by</p>
                      <p className="text-black-500 ml-1">{review.name}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 pt-3">{review.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {reviewList && listType === "list_link" && (
        <div className="flex bg-white shadow mt-4">
          <ul className="bg-white rounded-lg w-full">
            {reviewList.map((review: any) => {
              return (
                <li
                  key={review.id}
                  className="px-6 py-4 mb-3 bg-slate-100 w-full"
                >
                  <p className=" pb-2 pt-2">{review.name.toUpperCase()}</p>
                  <Stars rating={review.stars} />
                  <p className="font-bold pb-2 pt-4">{review.title}</p>
                  <p className="text-gray-700 pt-2 pb-1">{review.text}</p>
                  <a
                    className="pb-2 text-purple underline"
                    href={`https://uk.trustpilot.com/reviews/${review.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read this review on Trustpilot
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {quoteView && (
        <div className="mt-5 p-32 text-center item-center justify-center">
          <h1 className=" justify-center text-purple text-xl font-bold">
            Staysure to the rescue in Cologne
          </h1>
          <Image src={OpenQuote} alt="header logo" />
          <p className="text-gray-700 pl-32 pr-32 italic text-lg text-center">
            Last year my husband was taken into hospital on the morning we
            should have come home from Germany. This resulted in a 12 day stay
            in Cologne. Everything was arranged for us [by Staysure], an
            ambulance picked us up from the hotel and an ambulance was waiting
            for us at the airport when we reached England and brought us home.
            Submitting paperwork to claim back our medical expenses and hotel
            costs was very easy and Staysure paid everything without question.
          </p>
          <Image
            className="items-end rotate-180 float-right"
            src={OpenQuote}
            alt="header logo"
          />
          <div className="flex items-center justify-center mt-8 pl-16">
            <Stars className="h-10" rating={5} />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-700 pt-2 pb-1 text-xl">TrustPilot</p>
          </div>
          <div className="flex items-center justify-center ">
            <a
              className="text-purple underline text-lg"
              href="https://uk.trustpilot.com/users/57dafedc0000ff000a44cdf2"
              target="_blank"
              rel="noreferrer"
            >
              {"Janet "}
            </a>
            <p className="text-gray-700 text-lg pl-2">{" / September 2023"}</p>
          </div>
        </div>
      )}
    </div>
  );
}

TrustpilotBlock.blockName = "trustpilot";
