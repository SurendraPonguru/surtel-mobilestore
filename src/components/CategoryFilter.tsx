
import { Link, useLocation } from "react-router-dom";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

const CategoryFilter = ({ className }: { className?: string }) => {
  const location = useLocation();
  const currentCategory = new URLSearchParams(location.search).get("category") || "all";
  
  return (
    <div className={cn("flex overflow-auto pb-2 no-scrollbar", className)}>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/products${category.id === "all" ? "" : `?category=${category.id}`}`}
          className={cn(
            "whitespace-nowrap px-4 py-2 text-sm transition-colors mr-2 rounded-full border",
            currentCategory === category.id
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background hover:bg-secondary border-border"
          )}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryFilter;
