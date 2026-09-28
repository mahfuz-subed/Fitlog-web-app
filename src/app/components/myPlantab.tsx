"use client";

import { useContext } from "react";
import MyPlanTab from "../components/myPlantab";
import { LibraryContext } from "@/LibraryContext/LibraryProvider";

const MyPlanPage = () => {
  const { todaysPlan, saved, activeTab } = useContext(LibraryContext);

  const currentPlan = activeTab === "today" ? todaysPlan : saved;

  const totalMinutes = currentPlan.reduce(
    (total, exercise) => total + exercise.duration,
    0
  );

  const totalCalories = currentPlan.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0
  );

  return (
    <div className="my-8 mx-auto w-[90%] max-w-6xl text-white md:my-10">

      <div className="mb-5">
        <h2 className="text-2xl font-bold md:text-3xl">
          MY PLAN
        </h2>

        <p className="mt-2 text-sm text-[#9ca3af] md:text-base">
          Keep track of your exercises for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-3 rounded-xl border border-white/10 bg-[#222630] px-3 py-4 md:px-6 md:py-5">

        <div className="text-center">
          <p className="text-xs text-[#9ca3af] md:text-sm">
            Exercises
          </p>

          <h3 className="mt-1 text-2xl font-bold text-[#c2f800] md:text-4xl">
            {currentPlan.length}
          </h3>
        </div>

        <div className="text-center">
          <p className="text-xs text-[#9ca3af] md:text-sm">
            Minutes
          </p>

          <h3 className="mt-1 text-2xl font-bold text-[#c2f800] md:text-4xl">
            {totalMinutes}
          </h3>
        </div>

        <div className="text-center">
          <p className="text-xs text-[#9ca3af] md:text-sm">
            Calories
          </p>

          <h3 className="mt-1 text-2xl font-bold text-[#c2f800] md:text-4xl">
            {totalCalories}
          </h3>
        </div>

      </div>

      <div className="mt-6">
        <MyPlanTab />
      </div>

    </div>
  );
};

export default MyPlanPage;