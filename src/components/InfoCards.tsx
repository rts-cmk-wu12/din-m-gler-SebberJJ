import Image from "next/image";

export default function InfoCards() {
    return (
        <div className="flex justify-center items-center border-t-2 pt-16">
            <div className="flex w-1/5 mx-4">
                <Image className="mb-16 mr-2 bg-blue-100" src="/property1.svg" alt="Salgstjek ikon" width={32} height={32} />
                <div className="flex flex-col">
                    <h3 className="font-bold text-blue-950">Bestil et salgstjek</h3>
                    <p className="w-fit">Med et Din Mægler Salgstjek 
                        bliver du opdateret på værdien 
                        af din bolig.</p>
                </div>
            </div>
            <div className="flex w-1/5 mx-4">
                <Image className="mb-16 mr-2 bg-blue-100" src="/location.svg" alt="Salgstjek ikon" width={32} height={32} />
                <div className="flex flex-col">
                    <h3 className="font-bold text-blue-950">Bestil et salgstjek</h3>
                    <p className="w-fit">Med et Din Mægler Salgstjek 
                        bliver du opdateret på værdien 
                        af din bolig.</p>
                </div>
            </div>
            <div className="flex w-1/5 mx-4">
                <Image className="mb-16 mr-2 bg-blue-100" src="/customerBuy.svg" alt="Salgstjek ikon" width={32} height={32} />
                <div className="flex flex-col">
                    <h3 className="font-bold text-blue-950">Bestil et salgstjek</h3>
                    <p className="w-fit">Med et Din Mægler Salgstjek 
                        bliver du opdateret på værdien 
                        af din bolig.</p>
                </div>
            </div>
        </div>
    )
}
