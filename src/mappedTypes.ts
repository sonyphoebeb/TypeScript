// ✅ Mapped Types Example: Movie Domain

type Movie = {
    id: number;
    title: string;
    director: string;
    releaseYear: number;
    rating: number; // IMDb rating
    genre: string;
  };
  
  // 1️⃣ Make all properties optional (Partial)
  type OptionalMovie = {
    [K in keyof Movie]?: Movie[K];
  };
  
  // 2️⃣ Make all properties readonly (Readonly)
  type ReadonlyMovie = {
    readonly [K in keyof Movie]: Movie[K];
  };
  
  // 3️⃣ Convert all property types to string
  type MovieAsString = {
    [K in keyof Movie]: string;
  };
  
  // 4️⃣ Rename all keys with "movie_" prefix
  type PrefixedMovie = {
    [K in keyof Movie as `movie_${K}`]: Movie[K];
  };
  
  // 5️⃣ Boolean flags for UI selection
  type MovieFlags = {
    [K in keyof Movie as `is${Capitalize<K>}Selected`]: boolean;
  };
  
  // ---------------------
  // ✅ Usage Examples
  // ---------------------
  
  const optionalMovie: OptionalMovie = { title: "Inception" }; // only title provided
  
  const readonlyMovie: ReadonlyMovie = {
    id: 1,
    title: "Interstellar",
    director: "Christopher Nolan",
    releaseYear: 2014,
    rating: 8.6,
    genre: "Sci-Fi",
  };
  // readonlyMovie.title = "New Title"; // ❌ Error: cannot assign to readonly property
  
  const movieAsString: MovieAsString = {
    id: "1",
    title: "Dune",
    director: "Denis Villeneuve",
    releaseYear: "2021",
    rating: "8.2",
    genre: "Sci-Fi",
  };
  
  const prefixedMovie: PrefixedMovie = {
    movie_id: 101,
    movie_title: "The Matrix",
    movie_director: "Wachowskis",
    movie_releaseYear: 1999,
    movie_rating: 8.7,
    movie_genre: "Action",
  };
  
  const movieFlags: MovieFlags = {
    isIdSelected: true,
    isTitleSelected: false,
    isDirectorSelected: true,
    isReleaseYearSelected: false,
    isRatingSelected: true,
    isGenreSelected: false,
  };
  
  // ---------------------
  // ✅ Logging
  // ---------------------
  console.log("OptionalMovie:", optionalMovie);
  console.log("ReadonlyMovie:", readonlyMovie);
  console.log("MovieAsString:", movieAsString);
  console.log("PrefixedMovie:", prefixedMovie);
  console.log("MovieFlags:", movieFlags);
  