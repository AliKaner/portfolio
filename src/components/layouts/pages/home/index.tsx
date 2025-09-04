// src/components/layouts/pages/home/index.tsx
`use client`;

// HomePageContent imports
import CategoryCard from "@/components/common/category-card";
import styles from "./styles.module.scss";
import CallToAction from "@/components/common/call-to-action";
import { Category } from "@/api/categories";
import { createClient } from "@/utils/supabase/client";
import { cookies } from "next/headers";

// HomePageContent component
const HomePageContent = async () => {
  // queries
  const supabase = createClient();

  const { data: categories } = await supabase.from("categories").select();

  return (
    <div>
      <CallToAction title="sa" description="as" />
      <div className={styles.content}>
        {categories &&
          categories.map((category: Category) => (
            <CategoryCard
              title={category.title}
              id={category.id}
              path="/"
              imageUrl={category.imageUrl}
              key={`CategoryCard-ID-${category.id}`}
            />
          ))}
      </div>
    </div>
  );
};

// export
export default HomePageContent;
