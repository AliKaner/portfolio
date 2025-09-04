import React from "react";
import { createClient } from "@/utils/supabase/server";
import MainLayout from "../components/layouts/MainLayout";
import CategoryCard from "../components/modules/CategoryCard";
import styles from "./page.module.scss";

export default async function Home() {
  console.log("🏠 Home component - Starting data fetch...");

  try {
    const supabase = await createClient();
    console.log("✅ Supabase client created in Home component");

    console.log("📡 Making Supabase query from Home component...");
    const { data: categories, error } = await supabase
      .from("categories")
      .select("*");

    console.log("📊 Home component query result:");
    console.log("  - Data:", categories);
    console.log("  - Error:", error);
    console.log("  - Data length:", categories?.length || 0);

    if (error) {
      console.error("❌ Error loading categories:", error);
      return (
        <MainLayout>
          <div className={styles.error}>
            <h2>Error loading categories</h2>
            <p>{error.message}</p>
          </div>
        </MainLayout>
      );
    }

    console.log("✅ Categories loaded successfully:", categories);

    return (
      <MainLayout>
        <div className={styles.page}>
          <div className={styles.categoriesGrid}>
            {categories?.map((category: any) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {categories?.length === 0 && (
            <div className={styles.empty}>
              <p>No categories found.</p>
            </div>
          )}
        </div>
      </MainLayout>
    );
  } catch (err) {
    console.error("💥 Exception in Home component:", err);
    return (
      <MainLayout>
        <div className={styles.error}>
          <h2>Error loading categories</h2>
          <p>{err instanceof Error ? err.message : "Unknown error"}</p>
        </div>
      </MainLayout>
    );
  }
}
