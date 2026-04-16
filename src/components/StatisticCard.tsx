import { StatisticCardItem } from "@/lib/statistic";

type StatisticCardProps = {
  data: StatisticCardItem[];
};

const StatisticCard = ({ data }: StatisticCardProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((stats, i) => {
        const Icon = stats.icon;

        return (
          <div
            key={i}
            className="flex flex-col justify-between gap-4 bg-white py-6 px-8 rounded-lg border border-gray-200"
          >
            <div className="flex gap-4 items-center">
              <Icon className={stats.color} />
              <h1 className="text-gray-500 text-sm">{stats.label}</h1>
            </div>

            <div>
              <h1 className="font-semibold text-2xl">{stats.total}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatisticCard;
