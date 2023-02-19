import Link from "next/link";
import { useDropzone } from "react-dropzone";



export default function Dropzone({ open }) {
  const { getRootProps, getInputProps, acceptedFiles } =
    useDropzone({});

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <Link href="/assessments/external" className="btn btn-primary btn-lg mt-20">Import data</Link>
    </li>
  ));

  return (
    <div className="container d-flex align-items-center justify-content-center flex-column mt-40">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag and drop some files here</p>
        <div className="dropzone-icon">
            <svg width="48" height="48" viewBox="0 0 48 48"><path d="M20 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4H24l-4-4z" fill="#bdbdbd"></path><path d="M0 0h48v48H0z" fill="none"></path></svg>
        </div>
      </div>
      <aside className="dropzone-extra">
        <ul>
            {files}
        </ul>
      </aside>
    </div>
  );
}
