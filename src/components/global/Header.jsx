import TextDecorationBar from "../visual/containers/TextDecorationBar"

export default function Header(){
    return(
        <header className="mx-auto w-full">
            <nav className="bg-primary block md:flex justify-between items-center p-2 px-5 md:px-20">
                <TextDecorationBar>
                    <p className="text-3xl">Rafael Salcedo</p>
                </TextDecorationBar>
            </nav>
            
        </header >
    )
}