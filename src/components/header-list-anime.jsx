import Link from "next/link";

export default function HeaderListAnime({ title, linkHref, linkTitle }) {
   return (
      <div className="mb-4 flex justify-between items-center">
         <h1 className="text-2xl font-bold text-white">{title}</h1>
         {linkHref && linkTitle ?
            <Link href={linkHref} className="text-md md:text-xl text-white underline hover:text-color-accent transition-all">{linkTitle}
            </Link>
            : null
         }
      </div>
   )
}