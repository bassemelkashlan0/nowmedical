


interface BottomCallAction {
    title?: string;
    title_2?: string;
    description?: string;
}

export default function BottomCallAction({ title, title_2, description }: BottomCallAction) {

    return (
        <>
            <section className="bg-[#195A44] max-w-[1240px] mx-auto rounded-[16px] py-14 px-18 mb-10 md:mb-[60px]">
                <div className="mx-auto">
                    <h2 className=" text-4xl  md:text-5xl font-bold  mb-2 text-[#fefefe]">
                        {title}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-[#fefefe] mb-2">
                        {title_2}                    </h3>
                    <p className="text-[#fefefe] text-base ">
                        {description}
                    </p>
                </div>
            </section>
        </>
    )
}