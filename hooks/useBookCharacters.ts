import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getBookCharacters,
  getBookCharactersByBookId,
  getBookCharacterById,
  createBookCharacter,
  updateBookCharacter,
  deleteBookCharacter,
} from "../services/bookCharacters";
import {
  BookCharacter,
  CreateBookCharacterRequest,
  UpdateBookCharacterRequest,
} from "../types/supabaseTypes";

// Query keys
export const bookCharacterKeys = {
  all: ["book-characters"] as const,
  lists: () => [...bookCharacterKeys.all, "list"] as const,
  list: (filters: string) =>
    [...bookCharacterKeys.lists(), { filters }] as const,
  details: () => [...bookCharacterKeys.all, "detail"] as const,
  detail: (id: number) => [...bookCharacterKeys.details(), id] as const,
  byBook: (bookId: string) =>
    [...bookCharacterKeys.all, "byBook", bookId] as const,
};

// Get all book characters
export const useBookCharacters = () => {
  return useQuery({
    queryKey: bookCharacterKeys.lists(),
    queryFn: getBookCharacters,
  });
};

// Get book characters by book ID
export const useBookCharactersByBookId = (bookId: string) => {
  return useQuery({
    queryKey: bookCharacterKeys.byBook(bookId),
    queryFn: () => getBookCharactersByBookId(bookId),
    enabled: !!bookId,
  });
};

// Get a single book character by ID
export const useBookCharacter = (id: number) => {
  return useQuery({
    queryKey: bookCharacterKeys.detail(id),
    queryFn: () => getBookCharacterById(id),
    enabled: !!id,
  });
};

// Create book character mutation
export const useCreateBookCharacter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBookCharacter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookCharacterKeys.lists() });
    },
  });
};

// Update book character mutation
export const useUpdateBookCharacter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      updates,
    }: {
      id: number;
      updates: UpdateBookCharacterRequest;
    }) => updateBookCharacter(id, updates),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: bookCharacterKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: bookCharacterKeys.detail(data.id),
      });
    },
  });
};

// Delete book character mutation
export const useDeleteBookCharacter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBookCharacter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookCharacterKeys.lists() });
    },
  });
};
