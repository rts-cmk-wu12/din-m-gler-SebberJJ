interface HouseDetailProps {
    id: string;
    basementsize: number;
    built: number;
    cost: number;
    energylabel: string;
    gross: number;
    livingspace: number;
    lotsize: number;
    netto: number;
    payment: number;
    remodel: number;
    rooms: string;
}

export default function HouseDetail2(props: HouseDetailProps) {
    return (
        <div className="flex w-full justify-center items-center">

        <div className="flex justify-between w-3/5 border-t pt-5 gap-5">
            <div className="flex flex-col w-1/5">
                <div className="flex justify-between">
                    <p>Sagsnummer:</p>
                    <p>8934765</p>
                </div>
                <div className="flex justify-between">
                    <p>Boligareal:</p>
                    <p>{props.livingspace} m²</p>
                </div>
                <div className="flex justify-between">
                    <p>Grundareal:</p>
                    <p>{props.lotsize} m²</p>
                </div>
                <div className="flex justify-between">
                    <p>Rum/værelser:</p>
                    <p>{props.rooms}</p>
                </div>
                <div className="flex justify-between">
                    <p>Antal Plan:</p>
                    <p>-</p>
                </div>
            </div>
            <div className="flex flex-col w-1/5">
                <div className="flex justify-between">
                    <p>Kælder:</p>
                    <p>{props.basementsize} m²</p>
                </div>
                <div className="flex justify-between">
                    <p>Byggeår:</p>
                    <p>{props.built}</p>
                </div>
                <div className="flex justify-between">
                    <p>Ombygget:</p>
                    <p>{props.remodel}</p>
                </div>
                <div className="flex justify-between">
                    <p>Energimærke:</p>
                    <p>{props.energylabel}</p>
                </div>
            </div>
            <div className="flex flex-col w-3/12">
                <div className="flex justify-between">
                    <p>Udbetaling:</p>
                    <p>Kr. {props.payment.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                    <p>Brutto ex ejerudgift:</p>
                    <p>Kr. {props.gross.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                    <p>Netto ex ejerudgift:</p>
                    <p>Kr. {props.netto.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                    <p>Ejerudgifter:</p>
                    <p>Kr. {props.cost.toLocaleString()}</p>
                </div>
            </div>
        </div>
        </div>
    )
}