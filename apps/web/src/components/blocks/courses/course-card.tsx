import Image from "next/image";

export function CourseCard({duration, title, desc, image}: {duration: string, title: string, desc: string, image: string}) {
    return (
          <div
            className="rounded-3xl border border-border-slate-medium bg-surface-slate-strong"
          >
            <div className="relative">
                <Image src={image} alt={title} width={385} height={225} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <span className="mb-4 inline-block bg-surface-slate-light px-2.5 py-1 text-center type-caption text-white rounded-[8px]">
                {duration}
              </span>
              <h3 className="mb-1.5 text-white heading-4">{title}</h3>
              <p className="text-white type-body-s">{desc}</p>
            </div>
          </div>
    );
}