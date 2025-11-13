
import { ReactNode } from "react";

interface BottomCallAction {
    title?: string;
    title_2?: string;
    description?: string | ReactNode;
    description_2?: string | ReactNode;
}

export default function BottomCallAction({ title, title_2, description, description_2 }: BottomCallAction) {

    return (
        <>
            <section className=" mx-4 lg:mx-0 ">
                <div className=" container mx-auto bg-[#195A44] rounded-[16px] py-4 lg:py-10 lg:py-[54px] px-4 lg:px-6 lg:px-18 mb-10 lg:mb-[60px] ">
                    <h2 className=" text-3xl  lg:text-5xl font-bold  mb-2 text-[#fefefe]">
                        {title} <br />
                        {title_2}
                    </h2>
                    <p className="text-[#fefefe] text-base ">
                        {description} <br />
                        {description_2}
                    </p>
                </div>
            </section>
        </>
    )
}