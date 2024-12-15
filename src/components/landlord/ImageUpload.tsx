import React, { RefObject } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  selectedImage: string | null;
  onChange: (image: string) => void;
  fileInputRef: RefObject<HTMLInputElement>;
}

export function ImageUpload({ selectedImage, onChange, fileInputRef }: ImageUploadProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Property Image</label>
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-indigo-500"
      >
        <div className="space-y-1 text-center">
          {selectedImage ? (
            <img src={selectedImage} alt="Preview" className="mx-auto h-32 w-auto" />
          ) : (
            <>
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500">
                  Upload a file
                </label>
              </div>
            </>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
}