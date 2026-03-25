import HeroMH from "../components/views/index/HeroMH";

export default function Index(){
    return(
        <>  
            <HeroMH/>
            <h1 className="text-3xl font-bold underline">
                Hello world!
                <div className="h-[1000px] overflow-auto">
                    <div className="py-[200px] bg-primary">
                        a
                    </div>
                </div>
            </h1>
        </>
    )
}