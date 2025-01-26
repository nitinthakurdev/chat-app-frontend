import { IChatUser } from "@/types/Auth.types";
import { checkImage, readAsBase64 } from "@/utils/image.utils";
import { Image, Send, X } from "lucide-react";
import { ChangeEvent, FC, FormEvent, ReactElement, useRef, useState } from "react";

const MessageInput: FC<IChatUser> = ({ selectedUser }): ReactElement => {
  const [text, setText] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<null | string>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files
    if (file) {
      const isValid = checkImage(file[0], 'image')
      if (isValid) {
        const dataImage: string | ArrayBuffer | null = await readAsBase64(file[0])
        setImagePreview(`${dataImage}`)
      }
    }
  }

  const removeImage = () => {
    setImagePreview("")
  }

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="p-4 w-full" >
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}
      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`hidden sm:flex btn btn-circle
                     ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={20} />
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-circle"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;