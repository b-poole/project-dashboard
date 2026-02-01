import { useEffect, useRef, useState } from "react";
import "./IssuesFilters.css";

type IssuesFiltersProps = {
  selectedStatus: string;
  selectedPriority: string;
  onStatusChange: (status: string) => void;
  onPriorityChange: (priority: string) => void;
};

export function IssuesFilters({
  selectedStatus,
  selectedPriority,
  onStatusChange,
  onPriorityChange,
}: IssuesFiltersProps) {
  const [openFilter, setOpenFilter] = useState<0 | 1 | 2>(0);
  const filterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(0);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-bar" ref={filterRef}>
      <div className="filter-label">Filters:</div>

      <div className="filter-item">
        <button
          className="filter-button"
          onClick={() => setOpenFilter(openFilter === 1 ? 0 : 1)}
        >
          Status: {selectedStatus}
        </button>
      </div>
      
      <div className="filter-item">
        <button
          className="filter-button"
          onClick={() => setOpenFilter(openFilter === 2 ? 0 : 2)}
        >
          Priority: {selectedPriority}
        </button>
      </div>

      {openFilter === 1 && (
        <div className="filter-dropdown status">
          {["All", "Open", "In Progress", "In Review"].map((status) => (
            <button
              key={status}
              className="filter-option"
              onClick={() => {
                onStatusChange(status);
                setOpenFilter(0);
              }}
            >
              {status}
            </button>
          ))}
        </div>
      )}

      {openFilter === 2 && (
        <div className="filter-dropdown priority">
          {["All", "Urgent", "High", "Medium", "Low"].map((priority) => (
            <button
              key={priority}
              className="filter-option"
              onClick={() => {
                onPriorityChange(priority);
                setOpenFilter(0);
              }}
            >
              {priority}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
