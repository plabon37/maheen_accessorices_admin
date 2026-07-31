"use client";

import AlbumTableRow from "./AlbumTableRow";

interface AlbumTableProps {
  albums: any[];
  getAlbums: () => void;
}

export default function AlbumTable({
  albums,
  getAlbums,
}: AlbumTableProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Image
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Title
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Subtitle
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-black">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {albums.map((album, index) => (
              <AlbumTableRow
                key={album._id}
                album={album}
                index={index}
                getAlbums={getAlbums}
              />
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}