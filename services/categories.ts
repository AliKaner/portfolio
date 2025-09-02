import {
  Category,
  CreateCategoryRequest,
  UpdateCategoryRequest,
} from "../types/supabaseTypes";

// Get all categories via API route
export const getCategories = async (): Promise<Category[]> => {
  console.log("🚀 getCategories() called - Using API route");

  try {
    console.log("📡 Making API call to /api/categories...");
    const response = await fetch("/api/categories");

    console.log("📊 API Response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ API error:", errorData);
      throw new Error(errorData.error || "Failed to fetch categories");
    }

    const result = await response.json();
    console.log("📊 API result:", result);
    console.log("  - Data length:", result.data?.length || 0);

    console.log("✅ API call successful, returning data");
    return result.data || [];
  } catch (err) {
    console.error("💥 Exception in getCategories:", err);
    throw err;
  }
};

// Get a single category by ID
export const getCategoryById = async (id: string): Promise<Category | null> => {
  const response = await fetch(`/api/categories/${id}`);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch category");
  }

  const result = await response.json();
  return result.data;
};

// Create a new category
export const createCategory = async (
  category: CreateCategoryRequest
): Promise<Category> => {
  const response = await fetch("/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to create category");
  }

  const result = await response.json();
  return result.data;
};

// Update a category
export const updateCategory = async (
  id: string,
  updates: UpdateCategoryRequest
): Promise<Category> => {
  const response = await fetch(`/api/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to update category");
  }

  const result = await response.json();
  return result.data;
};

// Delete a category
export const deleteCategory = async (id: string): Promise<void> => {
  const response = await fetch(`/api/categories/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to delete category");
  }
};
