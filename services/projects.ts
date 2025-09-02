import { supabase } from "../lib/supabaseClient";
import {
  Project,
  CreateProjectRequest,
  UpdateProjectRequest,
} from "../types/supabaseTypes";

// Get all projects
export const getProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

// Get a single project by ID
export const getProjectById = async (id: number): Promise<Project | null> => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Create a new project
export const createProject = async (
  project: CreateProjectRequest
): Promise<Project> => {
  const { data, error } = await supabase
    .from("projects")
    .insert({
      ...project,
      created_at: new Date().toISOString(),
      update_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Update a project
export const updateProject = async (
  id: number,
  updates: UpdateProjectRequest
): Promise<Project> => {
  const { data, error } = await supabase
    .from("projects")
    .update({
      ...updates,
      update_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Delete a project
export const deleteProject = async (id: number): Promise<void> => {
  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
};
