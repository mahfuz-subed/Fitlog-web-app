
import Image from "next/image";
import PlanButton from "../components/buttons/planButton";
import SaveButton from "../components/buttons/saveButton";

interface ILibraryDetialsProp {
  params: Promise<{ id: string }>;
}

const LibraryDetailsPage = async ({
  params,
}: ILibraryDetialsProp) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${id}`
  );

  if (!res.ok) {
    throw new Error("Couldn't get data.");
  }

  const idData = await res.json();

  return (
    <div className="w-[90%] max-w-6xl mx-auto py-8 md:py-12">
      <div
        className="
          overflow-hidden rounded-xl
          border border-white/10
          bg-[#222630]
          text-white
          shadow-sm
          md:flex
        "
      >
        {/* Image */}
        <figure className="w-full md:w-[40%] md:shrink-0">
          <Image
            src={idData.image}
            alt={idData.name}
            width={400}
            height={400}
            className="
              h-full
              max-h-[350px]
              w-full
              object-cover
              md:max-h-none
            "
          />
        </figure>

        {/* Content */}
        <div className="flex-1 p-5 md:p-7">

          {/* Title */}
          <h2 className="text-2xl font-bold md:text-3xl">
            {idData.name}
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm leading-6 text-[#9ca3af]">
            {idData.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {idData.muscleGroups.slice(0, 2).map((muscleGroup: string) => (
              <span
                key={muscleGroup}
                className="
                  rounded-full
                  bg-[#c2f800]
                  px-3 py-1
                  text-xs font-semibold
                  text-[#15171d]
                "
              >
                {muscleGroup}
              </span>
            ))}
          </div>

          {/* Details Table */}
          <div
            className="
              mt-5
              overflow-x-auto
              rounded-lg
              border border-white/10
              bg-[#15171d]
            "
          >
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-white/10">
                  <th className="px-3 py-2 text-left font-medium text-[#9ca3af]">
                    EQUIPMENT
                  </th>
                  <td className="px-3 py-2 text-right font-semibold">
                    {idData.equipment}
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <th className="px-3 py-2 text-left font-medium text-[#9ca3af]">
                    DIFFICULTY
                  </th>
                  <td className="px-3 py-2 text-right font-semibold">
                    {idData.difficulty}
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <th className="px-3 py-2 text-left font-medium text-[#9ca3af]">
                    SETS
                  </th>
                  <td className="px-3 py-2 text-right font-semibold">
                    {idData.sets}
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <th className="px-3 py-2 text-left font-medium text-[#9ca3af]">
                    REPS
                  </th>
                  <td className="px-3 py-2 text-right font-semibold">
                    {idData.reps}
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <th className="px-3 py-2 text-left font-medium text-[#9ca3af]">
                    DURATION
                  </th>
                  <td className="px-3 py-2 text-right font-semibold">
                    {idData.duration}
                  </td>
                </tr>

                <tr className="border-b border-white/10">
                  <th className="px-3 py-2 text-left font-medium text-[#9ca3af]">
                    CALORIES
                  </th>
                  <td className="px-3 py-2 text-right font-semibold">
                    {idData.caloriesBurned}
                  </td>
                </tr>

                <tr>
                  <th className="px-3 py-2 text-left font-medium text-[#9ca3af]">
                    RATING
                  </th>
                  <td className="px-3 py-2 text-right font-semibold">
                    {idData.rating}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Instructions */}
          <div className="mt-5">
            <h2 className="mb-3 font-bold text-[#c2f800]">
              INSTRUCTIONS
            </h2>

            <div className="space-y-2 text-sm leading-6 text-[#d1d5db]">
              <p>1. {idData.instructions[0]}</p>
              <p>2. {idData.instructions[1]}</p>
              <p>3. {idData.instructions[2]}</p>
              <p>4. {idData.instructions[3]}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-2">
            <PlanButton idData={idData} />
            <SaveButton idData={idData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetailsPage;

