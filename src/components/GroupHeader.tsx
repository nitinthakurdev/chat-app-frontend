import { IGroupHeaderProp } from "@/types/group.types";
import { FC, ReactElement } from "react";

const GroupHeader:FC<IGroupHeaderProp> = ({selectedGroup}):ReactElement => {
  return (
    <div className="p-2.5 border-b border-base-300">
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="avatar">
                <div className="size-10 rounded-full relative">
                    <img src={selectedGroup.Image?.image_Url } alt={selectedGroup.name} />
                </div>
            </div>

            {/* User info */}
            <div>
                <h3 className="font-medium">{selectedGroup.name}</h3>
                <p className="text-sm text-base-content/70">
                    Group
                </p>
            </div>
        </div>


    </div>
</div>
  );
};

export default GroupHeader;