import Image from "next/image";

export default function Content() {


    return (

        // <div className="relative">
            <Image
                src="/bg-finance.png"
                alt="background"
                quality={100}
                // sizes="100vw"
                style={{
                    objectFit: 'cover',
                    // height:'500px'
                }}
                className="relative -z-50 w-full"
                fill
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        // </div>

    )
}