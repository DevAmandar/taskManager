// import { ReactNode, RefObject, useRef } from "react";
// import { ListType } from "../../Type/list-type";
// type Props = {
//     lists: ListType[];
//     modalRef: RefObject<HTMLDivElement | null>
// }
// export default function CreatListModal({ lists, modalRef }: Props): ReactNode {

//     const formRef = useRef<HTMLFormElement>(null)

//     const 
//     return (
//         <form ref={formRef} onSubmit={handleSubmit}>
//             <input type="text" name="title" className="p-1.5 outline-2 outline-gray-300 w-full" />
//             <div className="flex justify-end gap-1.5 mt-3">
//                 <button type="button" onClick={closeModal} className="py-1.5 px-2 text-gray-950 bg-gray-300 rounded-md font-medium cursor-pointer">Cancel</button>
//                 <button className="py-1.5 px-2 text-white bg-blue-400 rounded-md font-medium cursor-pointer">Add</button>
//             </div>
//         </form>
//     )
// }