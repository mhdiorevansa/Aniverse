"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRef } from "react"
import { useRouter } from 'nextjs-toploader/app';

export default function SearchListAnime() {
   const searchRef = useRef()
   const router = useRouter()
   const handleSearchEnter = (event) => {
      if (event.key === "Enter") {
         const keyword = searchRef.current.value;
         if (keyword) {
            router.push(`/search/${keyword}`);
         }
      }
   }
   const handleSearch = (event) => {
      event.preventDefault();
      const keyword = searchRef.current.value;
      if (keyword) {
         router.push(`/search/${keyword}`);
      }
   }
   return (
      <div className="relative">
         <input
            type="text"
            placeholder="cari anime..."
            className="px-4 py-2 rounded-md w-96 md:w-64"
            ref={searchRef}
            onKeyDown={handleSearchEnter}
         />
         <button className="absolute top-2.5 end-3" onClick={handleSearch}>
            <MagnifyingGlass size={20} />
         </button>
      </div>
   )
}
