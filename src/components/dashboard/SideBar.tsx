import {
    ChevronRightIcon,
    PlusCircleIcon,
    MinusCircleIcon,
    ChartBarIcon,
    UserIcon
} from "@heroicons/react/20/solid"

export default function SideBar() {

    return (

        <div className="h-screen  bg-indigo-600 relative">

            <div className="flex flex-col   text-white   justify-center align-middle items-center">

                <div className="border-b-2 mt-6 pb-11 pt-6 border-white  font-extrabold">
                    MINHAS FINANÇAS
                </div>

                <div className="pb-9 pt-6 font-semibold flex justify-self-end items-center cursor-pointer  hover:text-black ">
                    <PlusCircleIcon className="h-8 w-8 mr-4" aria-hidden="true" />
                    <span className="me-5"> Entradas</span>
                    {/* <UserIcon className=" h-6 w-6 text-white" aria-hidden="true" /> */}
                    <ChevronRightIcon className="h-8 w-8 " aria-hidden="true" />
                </div>

                <div className="pb-9 pt-6 font-semibold flex justify-self-end items-center cursor-pointer hover:text-black ">
                    <MinusCircleIcon className="h-8 w-8  mr-4" aria-hidden="true" />
                    <span className="me-5"> Saidas</span>
                    {/* <UserIcon className=" h-6 w-6 text-white" aria-hidden="true" /> */}
                    <ChevronRightIcon className="h-8 w-8 " aria-hidden="true" />
                </div>
                <div className="pb-9 pt-6 font-semibold flex justify-self-end items-center cursor-pointer hover:text-black ">
                    <ChartBarIcon className="h-8 w-8  mr-4" aria-hidden="true" />
                    <span className="me-5"> Movimentos</span>
                    {/* <UserIcon className=" h-6 w-6 text-white" aria-hidden="true" /> */}
                    <ChevronRightIcon className="h-8 w-8 " aria-hidden="true" />
                </div>

                <div className="font-semibold flex justify-self-end items-center cursor-pointer hover:text-black   border-t-2 pt-7 border-white">
                    <UserIcon className="h-8 w-8  mr-4" aria-hidden="true" />
                    <span className="me-5"> User</span>
                    {/* <UserIcon className=" h-6 w-6 text-white" aria-hidden="true" /> */}
                    <ChevronRightIcon className="h-8 w-8 " aria-hidden="true" />
                </div>


            </div>

            {/* <div className="font-semibold relative h-32 w-32 bg-black    italic text-white "> */}
            <div className="absolute inset-x-0 bottom-0  h-8 bg-black text-white">
                <div className="flex  flex-col items-center italic font-semibold">
                    <legend>deginer by hesasoft</legend> 
                </div>
            </div>
            {/* </div> */}

        </div>

    )

}