import { ChangeEvent, FC, ReactElement, useState } from 'react';
import { useGetAllUserQuery } from '@/services/auth.service';
import { IAllUserResponse } from '@/types/Auth.types';
import { SideBarSkeletons } from '@/constants/Components.lazy';
import { Upload } from 'lucide-react';
import { Input } from '@/constants/ui.lazy';
import { checkImage, readAsBase64 } from '@/utils/image.utils';
import { useCreateGroupMutation } from '@/services/group.service';
import toast from 'react-hot-toast';

const GroupModal: FC = (): ReactElement => {
    const { data, isLoading } = useGetAllUserQuery("");
    const [createGroup] = useCreateGroupMutation();
    const [groupMembers, setGroupMembers] = useState<string[]>([]);
    const [searchData, setSearchData] = useState<IAllUserResponse[]>([]);
    const [search, setSearch] = useState<string>("");
    const [imagePreview, setImagePreview] = useState<string>("");
    const [groupData, setGroupData] = useState({
        name: "",
    })

    const handleGroupMembers = (e: React.ChangeEvent<HTMLInputElement>, selectedId: string) => {
        if (e.target.checked) {
            setGroupMembers([...groupMembers, selectedId]);
        } else {
            setGroupMembers(groupMembers.filter((id) => id !== selectedId));
        }
    }

    const HandleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        setSearch(search);
        if (search) {
            const filteredUsers = data.data.filter((user: IAllUserResponse) => user.username.toLowerCase().includes(search.toLowerCase()));
            setSearchData(filteredUsers);
        }
    }

    const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        if (file) {
            const isValid = checkImage(file[0], 'image')
            if (isValid) {
                const dataImage: string | ArrayBuffer | null = await readAsBase64(file[0])
                setImagePreview(`${dataImage}`)
            }
        }
    }

    const handleSubmit = async () => {

        try {
            const data = {
                name: groupData.name,
                users: groupMembers,
                image: imagePreview
            }
            if (!(data.name && data.image)) {
                alert('Please fill all the fields')
                return;
            }
            const modal1 = document.getElementById('my_modal_3') as HTMLDialogElement | null;
            const modal2 = document.getElementById('my_modal_4') as HTMLDialogElement | null;
            if (modal1 && modal2) {
                modal1.close();
                modal2.close();
            }

            console.log(data)
            const res = await createGroup(data).unwrap();
            toast.success(res.message)

        } catch (error: any) {
            toast.error(error.data.message)
        } finally {
            setGroupMembers([]);
            setGroupData({ name: "", })
            setImagePreview("");
        }

    }

    return (
        <div>
            {/* modal 1 */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="text-lg font-bold">Create Group</h3>

                    <div className="py-4 px-2" >
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="search" onChange={HandleSearch} className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>

                    <div className="overfloy-y-auto w-full py-3">
                        {isLoading ? <SideBarSkeletons /> : (search !== "" ? searchData : data.data).map((user: IAllUserResponse) => (
                            <button
                                key={user._id}
                                className={`
                              w-full p-3 flex items-center gap-3
                              hover:bg-base-300 transition-colors
                            `}
                            >
                                <input type="checkbox" className="checkbox" onChange={(e) => handleGroupMembers(e, user._id)} />
                                <div className="relative mx-0">
                                    <img
                                        src={user.profilePic.image_Url || "/avatar.png"}
                                        alt={user.username}
                                        className="size-12 object-cover rounded-full"
                                    />
                                </div>

                                {/* User info - only visible on larger screens */}
                                <div className=" text-left min-w-0">
                                    <div className="font-medium truncate">{user.username}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className='text-right' >
                        <button className="btn btn-sm hover:bg-neutral " onClick={() => {
                            const modal = document.getElementById('my_modal_4') as HTMLDialogElement | null;
                            if (modal && groupMembers.length > 0) {
                                modal.showModal();
                            }
                        }} >Next </button>
                    </div>
                </div>
            </dialog>

            {/* modal 2 */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <h3 className="text-lg font-bold">Create Group</h3>

                    <div className='flex flex-col gap-4 w-full py-10'>
                        <input
                            type="text"
                            placeholder="Group name"
                            className="input input-bordered input-primary w-full" onChange={(e: ChangeEvent<HTMLInputElement>) => setGroupData({ ...groupData, name: e.target.value })} />
                        <label htmlFor="file" className='label dark:border border-slate-700 rounded-md h-12 px-3 cursor-pointer'>
                            <span className='label-text font-medium' >Upload File </span>

                            <div className='' >
                                <div className=' pl-3 flex items-center pointer-events-none' >
                                    <Upload className='size-5 text-base-content/40' />
                                </div>
                                <Input type="file"
                                    className={`input input-bordered w-full pl-10`}
                                    id='file'
                                    name='file'
                                    onChange={handleImage}
                                    hidden={true} />
                            </div>
                        </label>

                        {imagePreview && <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={imagePreview} />
                            </div>
                        </div>}
                    </div>

                    <div className='flex w-full items-center justify-between' >

                        <button className="btn btn-sm hover:bg-neutral " onClick={() => {
                            const modal1 = document.getElementById('my_modal_3') as HTMLDialogElement | null;
                            const modal2 = document.getElementById('my_modal_4') as HTMLDialogElement | null;
                            if (modal1) {
                                modal2?.close();
                                modal1.showModal();
                            }
                        }}>Back </button>
                        <button className="btn btn-sm hover:bg-neutral " onClick={handleSubmit} >Create </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default GroupModal;