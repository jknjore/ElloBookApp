export const bookConstants = {
    SET_ALL_BOOKS:"SET_ALL_BOOKS",
    ADD_SELECTED_BOOK:"ADD_SELECTED_BOOK",
    REMOVE_SELECTED_BOOK:"REMOVE_SELECTED_BOOK",
    SET_BOOKS_STATUS:"SET_BOOKS_STATUS",
}

export const bookListTypes = {
    ALL_BOOKS:"All Books",
    SELECTED_BOOKS:"Selected Books",
    SEARCH_RESULTS:"Search Results",
}

export const fetchBookQuery = `
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;
