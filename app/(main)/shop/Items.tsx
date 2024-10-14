"use client";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { FULL_HEARTS, POINTS_TO_REFILL } from "@/constants";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();
  const OnRefillHearts = () => {
    if (pending || hearts === FULL_HEARTS || points < POINTS_TO_REFILL) {
      return;
    }

    startTransition(() => {
      refillHearts().catch(() => toast.error("something went terribly wrong"));
    });
  };

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
        })
        .catch(() => toast.error("something went wrong"));
    });
  };
  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src="/heart.svg" alt="heart" height={60} width={60} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill your Hearts
          </p>
        </div>
        <Button
          onClick={OnRefillHearts}
          disabled={
            pending || hearts === FULL_HEARTS || points < POINTS_TO_REFILL
          }
        >
          {hearts === 5 ? (
            "full"
          ) : (
            <div className="flex items-center gap-x-2">
              <Image alt="points" src="/points.svg" height={20} width={20} />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
          src="/unlimited_hearts.svg"
          alt="unlimited"
          height={50}
          width={50}
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Unlimited Hearts
          </p>
        </div>
        <Button onClick={onUpgrade} disabled={pending}>
          {hasActiveSubscription ? "Settings" : "upgrade"}
        </Button>
      </div>
    </ul>
  );
};
