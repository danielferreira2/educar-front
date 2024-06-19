import * as React from 'react';
import { LibraryService } from '../../../../services/libraries';
import { Library } from '../../../../services/libraries/schemas/library';

export function useLibrariesSelect() {
  const [loading, setLoading] = React.useState(false);
  const [libraries, setLibraries] = React.useState<Library[]>();

  const getLibraries = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await LibraryService.getAll();
      setLibraries(response.libraries);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    getLibraries();
  }, [getLibraries]);
  // ---------------------------------------------
  // Functions
  // ---------------------------------------------
  // Effects
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API

  return {
    libraries,
    loading,
  };
}
