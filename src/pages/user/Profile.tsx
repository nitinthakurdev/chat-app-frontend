import { useUpdateProfileMutation } from '@/services/auth.service';
import { checkImage, readAsBase64 } from '@/utils/image.utils';
import { Camera, Mail, User } from 'lucide-react';
import { ChangeEvent, FC, ReactElement, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const Profile: FC = (): ReactElement => {
    const data = useSelector((state: any) => state.logedInUser)
    const [updateProfile, { isLoading }] = useUpdateProfileMutation();
    const [image, setImage] = useState<string>("")
    
    const handleImage = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const file = e.target.files
        if (file) {
            try {
                const isValid = checkImage(file[0], 'image')
                if (isValid) {
                    const dataImage: string | ArrayBuffer | null = await readAsBase64(file[0])
                    setImage(`${dataImage}`)
                    const data = await updateProfile({ image: dataImage }).unwrap()
                    toast.success(data.message)
                }
            } catch (error: any) {
                toast.error(error.data.message || "something went wrong")
            }
        }

    }
    return (
        <div className="h-screen ">
            <div className="max-w-2xl mx-auto p-4 py-8">
                <div className="bg-base-300 rounded-xl p-6 space-y-8">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold ">Profile</h1>
                        <p className="mt-2">Your profile information</p>
                    </div>

                    {/* avatar upload section */}

                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <img
                                src={image || data?.profilePic?.image_Url}
                                alt="Profile"
                                className="size-32 rounded-full object-cover border-4 "
                            />
                            <label
                                htmlFor="avatar-upload"
                                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                 
                `}
                            >
                                <Camera className="w-5 h-5 text-base-200" />
                                <input
                                    type="file"
                                    id="avatar-upload"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleImage}
                                    disabled={isLoading}
                                />
                            </label>
                        </div>
                        <p className="text-sm text-zinc-400">
                            {/* {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"} */}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-1.5">
                            <div className="text-sm text-zinc-400 flex items-center gap-2">
                                <User className="w-4 h-4" />
                                Username
                            </div>
                            <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{data?.username}</p>
                        </div>

                        <div className="space-y-1.5">
                            <div className="text-sm text-zinc-400 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                Email Address
                            </div>
                            <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{data?.email}</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-base-300 rounded-xl p-6">
                        <h2 className="text-lg font-medium  mb-4">Account Information</h2>
                        <div className="space-y-3 text-sm">

                            <div className="flex items-center justify-between py-2">
                                <span>Account Status</span>
                                <span className="text-green-500">Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;