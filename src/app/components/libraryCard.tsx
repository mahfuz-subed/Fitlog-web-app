
import Image from 'next/image';
import { ILibrary } from '../types/libraryType';
import { FaFire, FaRegStar, FaRegCircle } from 'react-icons/fa';
import Link from 'next/link';

const LibraryCard = ({ library }: { library: ILibrary }) => {
  return (
    <Link
      href={`/${library.id}`}
      className="group block h-full no-underline"
    >
      <div
        className="
          h-full overflow-hidden rounded-xl
          bg-[#222630]
          shadow-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
          hover:shadow-black/20
        "
      >
        {/* Image */}
        <figure className="overflow-hidden">
          <Image
            src={library.image}
            alt={library.name}
            width={250}
            height={140}
            className="
              w-full
              transition-transform duration-300
              group-hover:scale-[1.03]
            "
          />
        </figure>

        {/* Card Content */}
        <div className="p-4">

          {/* Muscle Groups */}
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {library.muscleGroups.slice(0, 2).map((muscleGroup) => (
              <span
                key={muscleGroup}
                className="
                  rounded-full
                  bg-[#c2f800]
                  px-2.5 py-1
                  text-xs font-semibold
                  text-[#15171d]
                "
              >
                {muscleGroup}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2
            className="
              text-lg font-bold
              text-white
              transition-colors duration-200
              group-hover:text-[#c2f800]
            "
          >
            {library.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-[#9ca3af]">
            {library.equipment}
          </p>

          {/* Stats */}
          <div
            className="
              mt-3 flex items-center justify-between
              border-t border-white/10
              pt-3
              text-xs text-[#9ca3af]
            "
          >
            <div className="flex items-center gap-1">
              <FaRegCircle className="text-[#c2f800]" />
              <span>{library.duration} min</span>
            </div>

            <div className="flex items-center gap-1">
              <FaFire className="text-[#c2f800]" />
              <span>{library.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1">
              <FaRegStar className="text-[#c2f800]" />
              <span>{library.rating}</span>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;

