// 🧩 Module 5 – Advanced Types
// 6. Utility Types in TypeScript
// ---------------------------------------------

// ✅ Base Interface
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // ------------------------------------------------------
  // 1️⃣ Partial<T> → Makes all properties optional
  // ------------------------------------------------------
  function updateUser(user: Partial<User>): void {
    console.log("🔹 Updating user:", user);
  }
  
  updateUser({ name: "Sony" }); // Only name is provided
  
  // ------------------------------------------------------
  // 2️⃣ Pick<T, K> → Select specific properties
  // ------------------------------------------------------
  type UserBasicInfo = Pick<User, "id" | "name">;
  
  const basicUser: UserBasicInfo = {
    id: 1,
    name: "Sony",
  };
  
  console.log("🔸 Pick Example:", basicUser);
  
  // ------------------------------------------------------
  // 3️⃣ Omit<T, K> → Remove certain properties
  // ------------------------------------------------------
  type UserWithoutEmail = Omit<User, "email">;
  
  const userWithoutEmail: UserWithoutEmail = {
    id: 2,
    name: "Alex",
  };
  
  console.log("🔸 Omit Example:", userWithoutEmail);
  
  // ------------------------------------------------------
  // ------------------------------------------------------
// 4️⃣ Record<K, T> → Create key-value mapping
// ------------------------------------------------------
type WeatherForecast = Record<string, number>;

const weeklyForecast: WeatherForecast = {
  Monday: 31,
  Tuesday: 30,
  Wednesday: 29,
  Thursday: 32,
  Friday: 33,
};

console.log("🌤 Weekly Forecast:", weeklyForecast);
  
  // ------------------------------------------------------
  // 5️⃣ Readonly<T> → Makes all properties immutable
  // ------------------------------------------------------
  const userReadOnly: Readonly<User> = {
    id: 3,
    name: "Mia",
    email: "mia@example.com",
  };
  
  // userReadOnly.name = "Changed"; ❌ Error: Cannot assign to 'name' because it is a read-only property.
  
  console.log("🔸 Readonly Example:", userReadOnly);
  
  // ------------------------------------------------------
  // ✅ Combined Example – Product Interface
  // ------------------------------------------------------
  // ------------------------------------------------------
  // ✅ Combined Example – Product Interface
  // ------------------------------------------------------
  type Book = {
    isbn: string;
    title: string;
    author: string;
    price: number;
    genre: string;
  };
  
  // Pick: select only title and author
  type BookPreview = Pick<Book, "title" | "author">;
  
  // Partial: all properties optional
  type BookUpdate = Partial<Book>;
  
  // Record: map of string keys to Book
  type Library = Record<string, Book>;
  
  // Readonly: all properties immutable
  type ReadOnlyBook = Readonly<Book>;
  
  // Omit: remove genre property
  type BookWithoutGenre = Omit<Book, "genre">;
  
  // Usage examples
  const previewBook: BookPreview = { title: "1984", author: "George Orwell" };
  const updatedBook: BookUpdate = { price: 499 };
  const library: Library = {
    B001: { isbn: "123-456", title: "Dune", author: "Frank Herbert", price: 899, genre: "Sci-Fi" },
  };
  const lockedBook: ReadOnlyBook = { isbn: "789-101", title: "Sapiens", author: "Yuval Harari", price: 599, genre: "History" };
  const genreRemoved: BookWithoutGenre = { isbn: "111-222", title: "The Alchemist", author: "Paulo Coelho", price: 299 };
  
  console.log("✅ Book Examples:");
  console.log("Preview:", previewBook);
  console.log("Update:", updatedBook);
  console.log("Library:", library);
  console.log("Readonly:", lockedBook);
  console.log("Omit Genre:", genreRemoved);
  