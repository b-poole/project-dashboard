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
  const optionRefs = useRef<HTMLButtonElement[]>([]);


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

  useEffect(() => {
    if (openFilter !== 0) {
      optionRefs.current[0]?.focus();
    }
  }, [openFilter]);

  function handleKeyDown(
    event: React.KeyboardEvent,
    index: number
    ) {
      const options = optionRefs.current;

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          options[index + 1]?.focus();
          break;

        case "ArrowUp":
          event.preventDefault();
          options[index - 1]?.focus();
          break;

        case "Escape":
          setOpenFilter(0);
          break;

        case "Enter":
        case " ":
          event.preventDefault();
          options[index]?.click();
          break;
      }
    }

  return (
    <div className="filter-bar" ref={filterRef}>
      <div className="filter-label">Filters:</div>

      <div className="filter-item">
        <button
          className="filter-button"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpenFilter(0);
            }
          }}
          onClick={() => setOpenFilter(openFilter === 1 ? 0 : 1)}
        >
          Status: {selectedStatus}
        </button>
      </div>
      
      <div className="filter-item">
        <button
          className="filter-button"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpenFilter(0);
            }
          }}
          onClick={() => setOpenFilter(openFilter === 2 ? 0 : 2)}
        >
          Priority: {selectedPriority}
        </button>
      </div>

      {openFilter === 1 && (
        <div className="filter-dropdown status">
          {["All", "Open", "In Progress", "In Review"].map((status, index) => (
            <button
              key={status}
              ref={(el) => {
                if (el) optionRefs.current[index] = el;
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
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
          {["All", "Urgent", "High", "Medium", "Low"].map((priority, index) => (
            <button
              key={priority}
              ref={(el) => {
                if (el) optionRefs.current[index] = el;
              }}
              onKeyDown={(e) => handleKeyDown(e, index)}
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
