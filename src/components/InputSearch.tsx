"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash/debounce";

interface InputSearchProps {
  search?: string;
}

const InputSearch = ({ search }: InputSearchProps) => {
  const [value, setValue] = useState(search || "");
  const router = useRouter();

  const searchParams = useSearchParams();

  const handleSearch = useCallback(
    debounce((newSearch: string) => {
      const query = new URLSearchParams(searchParams.toString());

      if (newSearch) {
        query.set("search", newSearch);
      } else {
        query.delete("search");
      }

      router.push(`/?${query.toString()}`, { scroll: false });
    }, 500),
    [searchParams, router]
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input
      className="text-black p-2 outline-none rounded-md"
      type="text"
      placeholder="Ingresa nombre o sku.."
      value={value}
      onChange={onChangeInput}
    />
  );
};

export default InputSearch;
