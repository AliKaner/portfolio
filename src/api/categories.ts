import supabase from "@/utils/supabase/client";

export interface Category {
  id: string;
  title: string;
  imageUrl: string;
}

export const getCategories = async (): Promise<{
  data: Category[] | null;
  error: string | null;
}> => {
  try {
    const { data, error } = await supabase().from("categories").select("*");

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: data || [], error: null };
  } catch (err) {
    return { data: null, error: "Failed to fetch categories" };
  }
};
