import { Lender } from "@/data/lenders";
import LenderCard from "./LenderCard";

export default function LenderGrid({ lenders }: { lenders: Lender[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {lenders.map((lender) => (
        <LenderCard key={lender.id} lender={lender} />
      ))}
    </div>
  );
}
