import { supabase } from "../lib/supabaseClient";
import {
  BookCharacter,
  CreateBookCharacterRequest,
  UpdateBookCharacterRequest,
} from "../types/supabaseTypes";

// Get all book characters
export const getBookCharacters = async (): Promise<BookCharacter[]> => {
  const { data, error } = await supabase
    .from("book-characters")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

// Get book characters by book ID
export const getBookCharactersByBookId = async (
  bookId: string
): Promise<BookCharacter[]> => {
  const { data, error } = await supabase
    .from("book-characters")
    .select("*")
    .eq("book_id", bookId)
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

// Get a single book character by ID
export const getBookCharacterById = async (
  id: number
): Promise<BookCharacter | null> => {
  const { data, error } = await supabase
    .from("book-characters")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Create a new book character
export const createBookCharacter = async (
  character: CreateBookCharacterRequest
): Promise<BookCharacter> => {
  const { data, error } = await supabase
    .from("book-characters")
    .insert({
      ...character,
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

// Update a book character
export const updateBookCharacter = async (
  id: number,
  updates: UpdateBookCharacterRequest
): Promise<BookCharacter> => {
  const { data, error } = await supabase
    .from("book-characters")
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

// Delete a book character
export const deleteBookCharacter = async (id: number): Promise<void> => {
  const { error } = await supabase
    .from("book-characters")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
};
