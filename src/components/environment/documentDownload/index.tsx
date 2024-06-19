import { Button, CircularProgress } from '@mui/material';
import * as React from 'react';
import { DocumentsService } from '../../../services/documents';

export interface DocumentDownloadProps {
  id: string;
}

export function DocumentDownload(props: DocumentDownloadProps) {
  const [loading, setLoading] = React.useState(false);

  const download = React.useCallback(async (id: string) => {
    try {
      setLoading(true);
      await DocumentsService.download(id);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  }, []);
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // Render

  return (
    <Button
      size="small"
      variant={'outlined'}
      onClick={() => download(props.id)}
    >
      Download
      {loading && <CircularProgress size={28} />}
    </Button>
  );
}
