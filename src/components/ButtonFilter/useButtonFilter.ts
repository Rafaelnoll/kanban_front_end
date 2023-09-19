import { useState, useEffect } from 'react';

import CategoryController from '../../controllers/CategoryController';
import { Category } from '../../interfaces/Category';

function useButtonFilter(initialCategories?: Category[]) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const allCategories = await CategoryController.index();
      setCategories(allCategories);
    }

    if (initialCategories) {
      setCategories(initialCategories);
      return;
    }

    loadCategories();
  }, []);

  function handleOpenAndCloseList() {
    setIsListOpen((prevState) => !prevState);
  }

  return {
    categories,
    isListOpen,
    handleOpenAndCloseList,
  };
}

export default useButtonFilter;
