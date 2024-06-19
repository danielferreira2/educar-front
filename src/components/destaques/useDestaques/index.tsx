import * as React from 'react';
import { PostsService } from '../../../services/posts';
import { DestaquesResponse } from '../../../services/posts/types';

export function useDestaques() {
  const [loading, setLoading] = React.useState(false);
  const [destaques, setDestaques] = React.useState<DestaquesResponse>();
  // ---------------------------------------------
  // Functions
  const getDestaques = React.useCallback(async () => {
    try {
      setLoading(true);
      const response = await PostsService.getDestaques();
      setDestaques(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);
  // ---------------------------------------------
  // Effects
  React.useEffect(() => {
    getDestaques();
  }, [getDestaques]);
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API

  return {
    loading,
    destaques,
  };
}
