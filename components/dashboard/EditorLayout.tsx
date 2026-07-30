import { ReactNode } from "react";

interface EditorLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  preview: ReactNode;
}

export default function EditorLayout({
  title,
  description,
  children,
  preview,
}: EditorLayoutProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-12">
      {/* Left Content */}
      <div className="xl:col-span-7">
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <h1 className="text-2xl font-bold text-slate-800">
              {title}
            </h1>

            {description && (
              <p className="mt-2 text-sm text-slate-500">
                {description}
              </p>
            )}
          </div>

          <div className="p-6">
            {children}
          </div>
        </div>
      </div>

      {/* Right Preview */}
      <div className="xl:col-span-5">
        {preview}
      </div>
    </div>
  );
}