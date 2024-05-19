import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Custom hook that synchronizes the value of an input field with a specific query parameter in the URL search params.
 *
 * @param {string} queryParam - The name of the query parameter to synchronize with.
 *
 * @returns {React.MutableRefObject<HTMLInputElement | null>} A ref object that references the input field.
 */

export const useSyncParamsInput = (queryParam: string): React.MutableRefObject<HTMLInputElement | null> => {
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      const params = new URLSearchParams(searchParams.toString());
      if (params.get(queryParam)) {
        inputRef.current.value = params.get(queryParam) || '';
      } else {
        inputRef.current.value = '';
      }
    }
  }, [searchParams, inputRef, queryParam]);

  return inputRef;
};
