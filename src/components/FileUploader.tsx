import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
type FileUploader = {
  text?: string;
  image?: string;
  onlyUploader?: any;
};
const FileUploader = ({ text, image }: FileUploader) => {
  const [files, setFiles] = useState([]);

  const handleDrop = (e: any, dataType: any) => {
    console.log(dataType);
    e.preventDefault();
    const newFiles: any = [...files];
    for (let i = 0; i < e.dataTransfer.files.length; i++) {
      const file = e.dataTransfer.files[i];
      //   newFiles.push(e.dataTransfer.files[i]);
      if (dataType === 'image' && !file.type.startsWith('image/')) {
        console.log(
          'Error: You can only drop image files in the image dropzone.'
        );
      } else if (dataType === 'document' && file.type.startsWith('image/')) {
        console.log(
          'Error: You can only drop document files in the document dropzone.'
        );
      } else {
        // Add non-restricted files to the state
        newFiles.push(file);
      }
    }

    setFiles(newFiles);
  };

  const handleBrowse = (e: any) => {
    e.preventDefault();
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.addEventListener('change', (e: any) => {
      const newFiles: any = [...files];
      for (let i = 0; i < e.target.files.length; i++) {
        newFiles.push(e.target.files[i]);
      }
      setFiles(newFiles);
    });
    input.click();
  };

  return (
    <div className="my-3">
      {image ? (
        <div
          onDrop={(e) => handleDrop(e, 'image')}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className=" bg-[#f1f7fe] border border-[#017efa] border-dashed rounded-lg flex justify-center items-center flex-col py-8">
            <Image
              src="/images/Folder.svg"
              width={100}
              height={90}
              alt="folder"
              className="my-5 "
            />
            <p className="text-center">{text}</p>
            <div className="flex items-center gap-4 my-3">
              <div className="w-16 h-[1px] bg-gray-300 " />
              <span className="text-sm text-gray-300 ">OR</span>
              <div className="w-16 h-[1px] bg-gray-300 " />
            </div>
            <div onClick={handleBrowse}>
              <Button
                text="Browse"
                cls=" bg-[#017efb] py-[8px] px-[10px] w-[144px] h-[46] border-none text-white"
              />
            </div>
          </div>
          {/* <p className="py-8 ">Property Documents</p>
          <Documents files={files} />

          <GlobalButton
            text="Show all documents"
            cls=" bg-[#017efb] py-2 px-4 mt-3 text-sm border-none text-white"
          /> */}
          {/* <ul>
            {files.map((file) => (
              <>
                <li key={file.name}>{file.name}</li>
                <li key={file.size}>({formatSize(file.size)})</li>
                <li>
                  {file.type.startsWith('image/') ? (
                    <img
                      className="object-contain h-48 w-full"
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                    />
                  ) : (
                    file.name + ' (' + formatSize(file.size) + ')'
                  )}
                </li>
              </>
            ))}
          </ul> */}
        </div>
      ) : (
        <div
          onDrop={(e) => handleDrop(e, 'document')}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className=" bg-[#f1f7fe] border border-[#017efa] border-dashed rounded-lg flex justify-center items-center flex-col py-8">
            <Image
              src="/images/Folder.svg"
              width={100}
              height={90}
              alt="folder"
              className="my-5 "
            />
            <p className="text-center">{text}</p>
            <div className="flex items-center gap-4 my-3">
              <div className="w-16 h-[1px] bg-gray-300 " />
              <span className="text-sm text-gray-300 ">OR</span>
              <div className="w-16 h-[1px] bg-gray-300 " />
            </div>
            <div onClick={handleBrowse}>
              <Button cls=" bg-[#017efb] py-[8px] px-[10px] w-[144px] h-[46] border-none text-white">
                Browse
              </Button>
            </div>
          </div>

          <div>
            <p className="py-8 ">Property Documents</p>
            <Documents files={files && files} />

            <Button cls=" bg-[#017efb] py-2 px-4 mt-3 text-sm border-none text-white">
              Show all documents
            </Button>
          </div>

          {/* <ul>
            {files.map((file) => (
              <>
                <li key={file.name}>{file.name}</li>
                <li key={file.size}>({formatSize(file.size)})</li>
                <li>
                  {file.type.startsWith('image/') ? (
                    <img
                      className="object-contain h-48 w-full"
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                    />
                  ) : (
                    file.name + ' (' + formatSize(file.size) + ')'
                  )}
                </li>
              </>
            ))}
          </ul> */}
        </div>
      )}
    </div>
  );
};

export default FileUploader;

export const Documents = ({ files }: any) => {
  const formatSize = (bytes: any) => {
    const megabytes = bytes / (1024 * 1024);
    return megabytes.toFixed(2) + ' MB';
  };
  return (
    <div className="">
      {files.length ? (
        files.map((file: any, i: any) => (
          <div>
            <div
              key={i}
              className="flex justify-between pb-3 bg-[#f1f7fe] rounded-lg p-3 my-2"
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/images/property/doc.svg"
                  width={22}
                  height={22}
                  alt="documents"
                />
                <div>
                  <p className="text-sm ">{file.name}</p>
                  <p className="text-sm ">({formatSize(file.size)})</p>
                </div>
              </div>

              <div className="flex items-center gap-3 ">
                <Image
                  src="/images/property/edit.svg"
                  width={18}
                  height={18}
                  alt="documents"
                />
                <Image
                  src="/images/property/eye.svg"
                  width={18}
                  height={18}
                  alt="documents"
                />
                <Image
                  src="/images/property/delete.svg"
                  width={18}
                  height={18}
                  alt="documents"
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-between pb-3 bg-[#f1f7fe] rounded-lg p-3 my-2">
          <div className="flex items-center gap-4">
            <Image
              src="/images/property/doc.svg"
              width={22}
              height={22}
              alt="documents"
            />
            <div className="flex">
              <p className="text-sm ">No Document to show</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
