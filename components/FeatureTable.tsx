import { featureRows } from "@/lib/content";

function Cell({ on }: { on: boolean }) {
  return (
    <td className="px-3 py-3 text-center">
      {on ? (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal text-paper" aria-label="Included">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6.2 4.7 9 10 3" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
      ) : (
        <span className="text-ink/25" aria-label="Not included">
          —
        </span>
      )}
    </td>
  );
}

export function FeatureTable() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-ink/10">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead className="bg-ink text-paper">
          <tr>
            <th className="px-5 py-4 font-medium">Features</th>
            <th className="px-3 py-4 text-center font-medium">MailFuze Standard</th>
            <th className="px-3 py-4 text-center font-medium">MailFuze for Rent Manager</th>
          </tr>
        </thead>
        <tbody>
          {featureRows.map((row, i) => (
            <tr key={row.feature} className={i % 2 ? "bg-paper-2/60" : "bg-paper"}>
              <th className="px-5 py-3 font-normal text-ink">{row.feature}</th>
              <Cell on={row.standard} />
              <Cell on={row.rentManager} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
